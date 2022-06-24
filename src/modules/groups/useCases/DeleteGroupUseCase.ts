import { inject, injectable } from "tsyringe"
import { IGroupsRepository } from "../repositories/IGroupsRepository"


@injectable()
export class DeleteGroupUseCase {

    constructor(
        @inject("GroupsRepository")
         private groupsRepository: IGroupsRepository
     ){}

    async execute(id:string){
        return this.groupsRepository.destroy(id)
    }
}