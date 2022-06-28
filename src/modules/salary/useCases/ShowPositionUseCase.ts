import { inject, injectable } from "tsyringe"

import { ISalaryRepository } from "../repositories/ISalaryRepository"


@injectable()
export class ShowPositionUseCase {

    constructor(
        @inject("SalaryRepository")
        private positionsRepository: ISalaryRepository
     ){}

    async execute(info:string){
        return this.positionsRepository.show(info)
    }
}