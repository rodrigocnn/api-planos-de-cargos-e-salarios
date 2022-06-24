import { DeleteResult, Repository } from 'typeorm'
import { dataSource } from '../../../config/database/typeorm'
import {  ICreatePositionDTO } from '../dto/ICreatePositionDTO'
import { IUpdatePositionDTO } from '../dto/IUpdatePositionDTO'
import { Position } from '../infra/typeorm/model'
import {  IPositionsRepository } from './IPositionsRepository'

export class PositionsRepository implements IPositionsRepository {

  private repository: Repository<Position>

  constructor() {
    this.repository = dataSource.getRepository(Position)
  }

  async index(): Promise<Position[]> {
    const result = this.repository.find()
    return result
  }

  async create({ title, observations, areaId, groupId }: ICreatePositionDTO): Promise<void> {
    const position = await this.repository.create({ title, observations, areaId, groupId });
    await this.repository.save(position);
  }

  async update({ id, title, observations, areaId, groupId }: IUpdatePositionDTO): Promise<Position | null> {
    await this.repository.update(id, { title, observations, areaId, groupId })
    return await this.repository.findOneBy({ id });
  }

  async destroy(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id)
  }

  async findByTitle(title: string): Promise<Position | null> {
    const result = await this.repository.findOneBy({ title })
    return result
  }

  async show(param: string): Promise<Position | null> {
   
    const result = await this.repository.createQueryBuilder()
      .select()
      .where("id = :id", { id: param} )
      .orWhere(`title like '%${param}%'`)
      .getOne();
  
      return result

  }

}

