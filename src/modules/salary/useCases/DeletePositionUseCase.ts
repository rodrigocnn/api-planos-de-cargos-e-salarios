import { inject, injectable } from "tsyringe"
import { ISalaryRepository } from "../repositories/ISalaryRepository"


@injectable()
export class DeletePositionUseCase {

    constructor(
        @inject("SalaryRepository")
        private salaryRepository: ISalaryRepository
     ){}

    async execute(id:string){
        return this.salaryRepository.destroy(id)
    }
}