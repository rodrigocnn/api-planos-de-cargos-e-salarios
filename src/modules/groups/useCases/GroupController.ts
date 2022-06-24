import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGroupUseCase } from "./CreateGroupUseCase";
import { DeleteGroupUseCase } from "./DeleteGroupUseCase";
import { IndexGroupUseCase } from "./IndexGroupUseCase";
import { ShowGroupUseCase } from "./ShowGroupUseCase";
import { UpdateGroupUseCase } from "./UpdateGroupUseCase";

export class GroupController{

    async index(request: Request, response: Response): Promise<Response>{
        const indexGroupUseCase = container.resolve(IndexGroupUseCase)
        const result =  await indexGroupUseCase.execute()
        return response.json(result)
    } 

    async show(request: Request, response: Response): Promise<Response>{
        const info = request.params.info
        const showGroupUseCase = container.resolve(ShowGroupUseCase)
        const result =  await showGroupUseCase.execute(info)
        return response.json(result)
    } 
    
    async create(request: Request, response: Response): Promise<Response>{
        const { title, observations } = request.body
        const createGroupUseCase = container.resolve(CreateGroupUseCase)
        const result =  await createGroupUseCase.execute({title, observations})
        return response.json(result)
    }  

    async update(request: Request, response: Response): Promise<Response>{
        const id = request.params.id
        const { title, observations } = request.body
        const updateGroupUseCase = container.resolve(UpdateGroupUseCase)
        const result =  await updateGroupUseCase.execute({id,title,observations})
        return response.json(result)
    }  
    
    async delete(request: Request, response: Response): Promise<Response>{
        const { id } = request.body
        const deleteGroupUseCase = container.resolve(DeleteGroupUseCase)
        const result =  await deleteGroupUseCase.execute(id)
        return response.json(result)
    } 
}


