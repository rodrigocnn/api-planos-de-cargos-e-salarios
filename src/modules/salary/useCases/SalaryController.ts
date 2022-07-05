import { Request, Response } from "express";
import { container } from "tsyringe";
import {  CreateSalaryUseCase } from "./CreateSalaryUseCase";
import { UpdateSalaryUseCase } from "./UpdateSalaryUseCase";


export class SalaryController{

    /*async index(request: Request, response: Response): Promise<Response>{
        const indexPositionUseCase = container.resolve(IndexPositionUseCase)
        const result =  await indexPositionUseCase.execute()
        return response.json(result)
    } 

    async show(request: Request, response: Response): Promise<Response> {
        const info = request.params.info
        const showPositionUseCase = container.resolve(ShowPositionUseCase)
        const result =  await showPositionUseCase.execute(info)
        return response.json(result)
    } */
    
    async create(request: Request, response: Response): Promise<Response>{
        const { positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive } = request.body
        const createSalaryUseCase= container.resolve(CreateSalaryUseCase)
        
        try {
            const result =  await createSalaryUseCase.execute({
            positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive})
            return response.json(result)
        } catch (error) {
            return response.json(error)
        }

    }  

     async update(request: Request, response: Response): Promise<Response>{
        const id = request.params.id
        const { positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive } = request.body
        const updateSalaryUseCase = container.resolve(UpdateSalaryUseCase)
        const result =  await updateSalaryUseCase.execute({id,positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive})
        return response.json(result)
    }  
    /*
    async delete(request: Request, response: Response): Promise<Response>{
        const { id } = request.body
        const deletePositionUseCase = container.resolve(DeletePositionUseCase)
        const result =  await deletePositionUseCase.execute(id)
        return response.json(result)
    } 

    */
}


