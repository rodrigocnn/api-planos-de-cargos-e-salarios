import { inject, injectable } from "tsyringe"
import { IGroupsRepository } from "../repositories/IGroupsRepository"

interface ICreateGroup{
    title:string,
    observations: string
}

@injectable()
export class CreateGroupUseCase {

    constructor(
        @inject("GroupsRepository")
         private groupsRepository: IGroupsRepository
     ){}

    async execute({title, observations}: ICreateGroup){
        const areaAlreadyExist = await this.groupsRepository.findByTitle(title)
        if(areaAlreadyExist){
            throw new Error('Group already exist')
         }
        return this.groupsRepository.create({title, observations})
    }
}