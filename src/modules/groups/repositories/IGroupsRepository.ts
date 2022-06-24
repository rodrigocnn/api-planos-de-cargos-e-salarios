import { ICreateGroupDTO  } from "../dto/ICreateGroupDTO"
import { IUpdateGroupDTO } from "../dto/IUpdateGroupDTO"
import { Group } from "../infra/typeorm/model"

interface IGroupsRepository{
    index():Promise<Group[]>
    show(info: string):Promise<any>
    create({title, observations}: ICreateGroupDTO): Promise<void>
    update({id, title, observations}: IUpdateGroupDTO): Promise<Group | null>
    destroy(id: string):Promise<any>
    findByTitle(title:string):Promise<Group | null>
}

export { IGroupsRepository }