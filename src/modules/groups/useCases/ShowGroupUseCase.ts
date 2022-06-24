import { inject, injectable } from "tsyringe"
import { IGroupsRepository } from "../repositories/IGroupsRepository"


@injectable()
export class ShowGroupUseCase {

    constructor(
        @inject("GroupsRepository")
        private groupsRepository: IGroupsRepository
     ){}

    async execute(info:string){
        return this.groupsRepository.show(info)
    }
}