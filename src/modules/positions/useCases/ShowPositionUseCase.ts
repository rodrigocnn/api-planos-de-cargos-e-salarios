import { inject, injectable } from "tsyringe"

import { IPositionsRepository } from "../repositories/IPositionsRepository"


@injectable()
export class ShowPositionUseCase {

    constructor(
        @inject("PositionsRepository")
        private positionsRepository: IPositionsRepository
     ){}

    async execute(info:string){
        return this.positionsRepository.show(info)
    }
}