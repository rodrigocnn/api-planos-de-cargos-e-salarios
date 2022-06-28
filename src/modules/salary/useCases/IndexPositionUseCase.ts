import { inject, injectable } from "tsyringe"
import { ISalaryRepository } from "../repositories/ISalaryRepository"


@injectable()
export class IndexPositionUseCase {

    constructor(
        @inject("SalaryRepository")
        private salaryRepository: ISalaryRepository
     ){}

    async execute(){
        return this.salaryRepository.index()
    }
}