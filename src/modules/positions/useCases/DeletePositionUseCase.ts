import { inject, injectable } from "tsyringe"

import { IPositionsRepository } from "../repositories/IPositionsRepository"


@injectable()
export class DeletePositionUseCase {

    constructor(
        @inject("PositionsRepository")
        private positionsRepository: IPositionsRepository
     ){}

    async execute(id:string){
        return this.positionsRepository.destroy(id)
    }
}