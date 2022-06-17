import { DeleteResult, Repository } from 'typeorm'
import { dataSource } from '../../../config/database/typeorm'
import { ICreateAreaDTO } from '../dto/ICreateAreaDTO'
import { IUpdateAreaDTO } from '../dto/IUpdateAreaDTO'
import { Area } from '../infra/typeorm/model'
import { IAreasRepository } from './IAreasRepository'

export class AreasRepository implements IAreasRepository {

  private repository: Repository<Area>

  constructor() {
    this.repository = dataSource.getRepository(Area)
  }

  async index(): Promise<Area[]> {
    const result = this.repository.find()
    return result
  }

  async create({ title, observations }: ICreateAreaDTO): Promise<void> {
    const area = this.repository.create({ title, observations });
    await this.repository.save(area);
  }

  async update({ id, title, observations }: IUpdateAreaDTO): Promise<Area | null> {
    this.repository.update(id, { title, observations })
    return await this.repository.findOneBy({ id });
  }

  async destroy(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id)
  }

  async findByTitle(title: string): Promise<Area | null> {
    const result = await this.repository.findOneBy({ title })
    return result
  }

  async show(param: string): Promise<Area | null> {
    const result = await this.repository.createQueryBuilder()
      .select()
      .where("id LIKE %:first%", { id: param })
      .orWhere("title LIKE %:param%", { title: param })
      .getOne();
    return result

  }

}

