import { inject, injectable } from "tsyringe"
import { IAreasRepository } from "../repositories/IAreasRepository"


@injectable()
export class DeleteAreaUseCase {

    constructor(
        @inject("AreasRepository")
         private areasRepository: IAreasRepository
     ){}

    async execute(id:string){
        return this.areasRepository.destroy(id)
    }
}