import { inject, injectable } from "tsyringe"
import { IPositionsRepository } from "../repositories/IPositionsRepository"

interface IUpdateArea{
    id: string
    title:string,
    observations: string
    areaId: string
    groupId: string
}

@injectable()
export class UpdatePositionUseCase {

    constructor(
        @inject("PositionsRepository")
        private positionsRepository: IPositionsRepository
     ){}

    async execute({id, title, observations , areaId, groupId}: IUpdateArea){
        return this.positionsRepository.update({id, title, observations, areaId, groupId})
    }
}