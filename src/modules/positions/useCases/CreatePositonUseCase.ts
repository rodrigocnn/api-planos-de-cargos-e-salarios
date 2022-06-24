import { inject, injectable } from "tsyringe"
import {  IPositionsRepository } from "../repositories/IPositionsRepository"

interface ICreateArea{
    title:string,
    observations: string
    areaId: string
    groupId: string
}

@injectable()
export class CreatePositionUseCase {

    constructor(
        @inject("PositionsRepository")
         private positionsRepository: IPositionsRepository
     ){}

    async execute({title, observations, areaId, groupId}: ICreateArea){
        const positionAlreadyExist = await this.positionsRepository.findByTitle(title)
        if(positionAlreadyExist){
            throw new Error('Position already exist')
         }
        return this.positionsRepository.create({title, observations, areaId, groupId})
    }
}