import { inject, injectable } from "tsyringe"
import { IAreasRepository } from "../repositories/IAreasRepository"


@injectable()
export class IndexAreaUseCase {

    constructor(
        @inject("AreasRepository")
         private areasRepository: IAreasRepository
     ){}

    async execute(){
        return this.areasRepository.index()
    }
}