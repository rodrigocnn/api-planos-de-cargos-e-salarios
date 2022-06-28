import { inject, injectable } from "tsyringe"
import { AppError } from "../../../shared/errors/AppError";
import {  ISalaryRepository } from "../repositories/ISalaryRepository"

interface ICreateSalary{
    positionId: string;
    rangeOne: number;
    rangeTwo: number;
    rangeThree: number;
    rangeFour: number;
    rangeFive: number;
}

@injectable()
export class CreateSalaryUseCase {

    constructor(
        @inject("SalaryRepository")
        private salaryRepository: ISalaryRepository
     ){}

    async execute({positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive}: ICreateSalary){
       
        const positionAlreadyExist = await this.salaryRepository.findByPosition(positionId)
       
       
        if(positionAlreadyExist){
            throw new AppError('The Salary already exist')
         }

        return this.salaryRepository.create({
            positionId, 
            rangeOne, 
            rangeTwo, 
            rangeThree , 
            rangeFour, 
            rangeFive })
    }
}