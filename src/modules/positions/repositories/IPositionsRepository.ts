
import { ICreatePositionDTO } from "../dto/ICreatePositionDTO"
import { IUpdatePositionDTO } from "../dto/IUpdatePositionDTO"
import { Position } from "../infra/typeorm/model"

interface IPositionsRepository{
    index():Promise<Position[]>
    show(info: string):Promise<any>
    create({title, observations, areaId, groupId}: ICreatePositionDTO): Promise<void>
    update({id, title, observations}: IUpdatePositionDTO): Promise<Position | null>
    destroy(id: string):Promise<any>
    findByTitle(title:string):Promise<Position | null>
}

export { IPositionsRepository }