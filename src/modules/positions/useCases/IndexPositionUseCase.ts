import { inject, injectable } from "tsyringe"

import { IPositionsRepository } from "../repositories/IPositionsRepository"


@injectable()
export class IndexPositionUseCase {

    constructor(
        @inject("PositionsRepository")
         private areasRepository: IPositionsRepository
     ){}

    async execute(){
        return this.areasRepository.index()
    }
}