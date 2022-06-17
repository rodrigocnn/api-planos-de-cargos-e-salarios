import { inject, injectable } from "tsyringe"
import { IAreasRepository } from "../repositories/IAreasRepository"


@injectable()
export class ShowAreaUseCase {

    constructor(
        @inject("AreasRepository")
         private areasRepository: IAreasRepository
     ){}

    async execute(info:string){
        return this.areasRepository.show(info)
    }
}