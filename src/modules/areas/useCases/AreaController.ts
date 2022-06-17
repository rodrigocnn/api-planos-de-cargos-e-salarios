import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAreaUseCase } from "./CreateAreaUseCase";
import { DeleteAreaUseCase } from "./DeleteAreaUseCase";
import { IndexAreaUseCase } from "./IndexAreaUseCase";
import { ShowAreaUseCase } from "./ShowAreaUseCase";
import { UpdateAreaUseCase } from "./UpdateAreaUseCase";

export class AreaController{

    async index(request: Request, response: Response): Promise<Response>{
        const indexAreaUseCase = container.resolve(IndexAreaUseCase)
        const result =  await indexAreaUseCase.execute()
        return response.json(result)
    } 

    async show(request: Request, response: Response): Promise<Response>{
        const info = request.params.info
        const showAreaUseCase = container.resolve(ShowAreaUseCase)
        const result =  await showAreaUseCase.execute(info)
        return response.json(result)
    } 
    
    async create(request: Request, response: Response): Promise<Response>{
        const { title, observations} = request.body
        const createAreaUseCase = container.resolve(CreateAreaUseCase)
        const result =  await createAreaUseCase.execute({title, observations})
        return response.json(result)
    }  

    async update(request: Request, response: Response): Promise<Response>{
        const id = request.params.id
        const { title, observations} = request.body
        const updateAreaUseCase = container.resolve(UpdateAreaUseCase)
        const result =  await updateAreaUseCase.execute({id,title,observations})
        return response.json(result)
    }  
    
    async delete(request: Request, response: Response): Promise<Response>{
        const { id } = request.body
        const deleteAreaUseCase = container.resolve(DeleteAreaUseCase)
        const result =  await deleteAreaUseCase.execute(id)
        return response.json(result)
    } 
}


