import { DeleteResult, Repository } from 'typeorm'
import { dataSource } from '../../../config/database/typeorm'
import {  ICreateGroupDTO } from '../dto/ICreateGroupDTO'
import {  IUpdateGroupDTO } from '../dto/IUpdateGroupDTO'
import { Group } from '../infra/typeorm/model'
import { IGroupsRepository } from './IGroupsRepository'

export class GroupsRepository implements IGroupsRepository {

  private repository: Repository<Group>

  constructor() {
    this.repository = dataSource.getRepository(Group)
  }

  async index(): Promise<Group[]> {
    const result = this.repository.find()
    return result
  }

  async create({ title, observations }: ICreateGroupDTO): Promise<void> {
    const group = this.repository.create({ title, observations });
    await this.repository.save(group);
  }

  async update({ id, title, observations }: IUpdateGroupDTO): Promise<Group | null> {
    this.repository.update(id, { title, observations })
    return await this.repository.findOneBy({ id });
  }

  async destroy(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id)
  }

  async findByTitle(title: string): Promise<Group | null> {
    const result = await this.repository.findOneBy({ title })
    return result
  }

  async show(param: string): Promise<Group | null> {
    const result = await this.repository.createQueryBuilder()
      .select()
      .where("id = :id", { id: param} )
      .orWhere(`title like '%${param}%'`)
      .getOne();
    return result

  }

}

