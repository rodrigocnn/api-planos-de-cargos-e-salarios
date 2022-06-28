import { inject, injectable } from "tsyringe"
import { ISalaryRepository } from "../repositories/ISalaryRepository"


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
        @inject("SalaryRepository")
        private salaryRepository: ISalaryRepository
     ){}

    async execute({id, title, observations , areaId, groupId}: IUpdateArea){
        return this.salaryRepository.update({id, title, observations, areaId, groupId})
    }
}