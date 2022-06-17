import { ICreateAreaDTO } from "../dto/ICreateAreaDTO"
import { IUpdateAreaDTO } from "../dto/IUpdateAreaDTO"
import { Area } from "../infra/typeorm/model"

interface IAreasRepository{
    index():Promise<Area[]>
    show(info: string):Promise<any>
    create({title, observations}: ICreateAreaDTO): Promise<void>
    update({id, title, observations}: IUpdateAreaDTO): Promise<Area | null>
    destroy(id: string):Promise<any>
    findByTitle(title:string):Promise<Area | null>
}

export { IAreasRepository }