import { inject, injectable } from "tsyringe"
import { IGroupsRepository } from "../repositories/IGroupsRepository"

interface IUpdateArea{
    id: string
    title:string,
    observations: string
}

@injectable()
export class UpdateGroupUseCase {

    constructor(
        @inject("GroupsRepository")
        private groupsRepository: IGroupsRepository
     ){}

    async execute({id, title, observations}: IUpdateArea){
        return this.groupsRepository.update({id, title, observations})
    }
}