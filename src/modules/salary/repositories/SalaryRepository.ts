import { DeleteResult, Repository } from 'typeorm'
import { dataSource } from '../../../config/database/typeorm'
import {   ICreateSalaryDTO } from '../dto/ICreatePositionDTO'
import { IUpdatePositionDTO } from '../dto/IUpdatePositionDTO'

import { ISalaryRepository } from './ISalaryRepository'
import { Salary } from './../infra/typeorm/model/index';


export class SalaryRepository implements ISalaryRepository {

  private repository: Repository<Salary>

  constructor() {
    this.repository = dataSource.getRepository(Salary)
  }

  async index(): Promise<Salary[]> {
    const result = this.repository.find()
    return result
  }

  async create({ positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive}: ICreateSalaryDTO): Promise<void> {
    const position = await this.repository.create({ 
    positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive });
    await this.repository.save(position);
  }


  async show(param: string): Promise<Salary | null> {
   
    const result = await this.repository.createQueryBuilder()
      .select()
      .where("id = :id", { id: param} )
      .orWhere(`title like '%${param}%'`)
      .getOne();
  
      return result

  }

  async findByPosition(id: string): Promise<Salary | null> {
  
    const result = await this.repository.createQueryBuilder()
      .select()
      .where({ positionId: id })
      .getOne();
      return result
    
  }

}

