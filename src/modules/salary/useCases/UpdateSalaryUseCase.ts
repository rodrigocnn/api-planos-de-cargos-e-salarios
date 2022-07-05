import { inject, injectable } from "tsyringe"
import { ISalaryRepository } from "../repositories/ISalaryRepository"


interface IUpdateSalary{
    id: string
    positionId: string;
    rangeOne: number;
    rangeTwo: number;
    rangeThree: number;
    rangeFour: number;
    rangeFive: number;
}

@injectable()
export class UpdateSalaryUseCase {

    constructor(
        @inject("SalaryRepository")
        private salaryRepository: ISalaryRepository
     ){}

    async execute({id, positionId, rangeOne, rangeTwo, rangeThree, rangeFour, rangeFive}:  IUpdateSalary){
        return this.salaryRepository.update({id, positionId, rangeOne, rangeTwo, rangeThree, rangeFour, rangeFive})
    }
}