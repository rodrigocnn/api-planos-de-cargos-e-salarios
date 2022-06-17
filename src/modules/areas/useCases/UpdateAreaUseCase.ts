import { inject, injectable } from "tsyringe"
import { IAreasRepository } from "../repositories/IAreasRepository"

interface IUpdateArea{
    id: string
    title:string,
    observations: string
}

@injectable()
export class UpdateAreaUseCase {

    constructor(
        @inject("AreasRepository")
         private areasRepository: IAreasRepository
     ){}

    async execute({id, title, observations}: IUpdateArea){
        return this.areasRepository.update({id, title, observations})
    }
}