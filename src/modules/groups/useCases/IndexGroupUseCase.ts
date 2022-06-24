import { inject, injectable } from "tsyringe"
import { IGroupsRepository } from "../repositories/IGroupsRepository"


@injectable()
export class IndexGroupUseCase {

    constructor(
        @inject("GroupsRepository")
        private groupsRepository: IGroupsRepository
     ){}

    async execute(){
        return this.groupsRepository.index()
    }
}