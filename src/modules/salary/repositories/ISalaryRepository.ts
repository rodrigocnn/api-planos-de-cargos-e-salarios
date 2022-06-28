
import { ICreateSalaryDTO } from "../dto/ICreatePositionDTO"
import { IUpdatePositionDTO } from "../dto/IUpdatePositionDTO"
import { Salary } from "../infra/typeorm/model"

interface ISalaryRepository{
    //index():Promise<Position[]>
    //show(info: string):Promise<any>
    create({positionId, rangeOne, rangeTwo, rangeThree , rangeFour, rangeFive}: ICreateSalaryDTO): Promise<void>
    //update({id, title, observations}: IUpdatePositionDTO): Promise<Position | null>
    //destroy(id: string):Promise<any>
    findByPosition(id:string):Promise<Salary | null>
}

export { ISalaryRepository }