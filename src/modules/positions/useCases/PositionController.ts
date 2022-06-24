import { Request, Response } from "express";
import { container } from "tsyringe";
import {  CreatePositionUseCase } from "./CreatePositonUseCase";
import { IndexPositionUseCase } from "./IndexPositionUseCase";
import { UpdatePositionUseCase } from "./UpdatePositionUseCase";
import { DeletePositionUseCase } from './DeletePositionUseCase';
import { ShowPositionUseCase } from "./ShowPositionUseCase";


export class PositionController{

    async index(request: Request, response: Response): Promise<Response>{
        const indexPositionUseCase = container.resolve(IndexPositionUseCase)
        const result =  await indexPositionUseCase.execute()
        return response.json(result)
    } 

    async show(request: Request, response: Response): Promise<Response> {
        const info = request.params.info
        const showPositionUseCase = container.resolve(ShowPositionUseCase)
        const result =  await showPositionUseCase.execute(info)
        return response.json(result)
    } 
    
    async create(request: Request, response: Response): Promise<Response>{
        const { title, observations, areaId, groupId } = request.body
        const createPositionUseCase= container.resolve(CreatePositionUseCase)
        const result =  await createPositionUseCase.execute({title, observations, areaId, groupId})
        return response.json(result)
    }  

     async update(request: Request, response: Response): Promise<Response>{
        const id = request.params.id
        const { title, observations, areaId, groupId } = request.body
        const updateAreaUseCase = container.resolve(UpdatePositionUseCase)
        const result =  await updateAreaUseCase.execute({id,title,observations, areaId, groupId})
        return response.json(result)
    }  
    
    async delete(request: Request, response: Response): Promise<Response>{
        const { id } = request.body
        const deletePositionUseCase = container.resolve(DeletePositionUseCase)
        const result =  await deletePositionUseCase.execute(id)
        return response.json(result)
    } 
}


