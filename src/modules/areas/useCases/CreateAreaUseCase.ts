import { inject, injectable } from "tsyringe"
import { IAreasRepository } from "../repositories/IAreasRepository"

interface ICreateArea{
    title:string,
    observations: string
}

@injectable()
export class CreateAreaUseCase {

    constructor(
        @inject("AreasRepository")
         private areasRepository: IAreasRepository
     ){}

    async execute({title, observations}: ICreateArea){
        const areaAlreadyExist = await this.areasRepository.findByTitle(title)
        if(areaAlreadyExist){
            throw new Error('Area already exist')
         }
        return this.areasRepository.create({title, observations})
    }
}