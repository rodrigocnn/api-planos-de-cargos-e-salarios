import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"


@Entity('salary')

export class Salary {
    
    @PrimaryColumn()
    id?: string;

    @Column()
    positionId?: string;
    
    @Column("decimal", { precision: 7, scale: 2 })
    rangeOne!: number
  
    @Column("decimal", { precision: 7, scale: 2 })
    rangeTwo!: number

    @Column("decimal", { precision: 7, scale: 2 })
    rangeThree!: number

    @Column("decimal", { precision: 7, scale: 2 })
    rangeFour!: number
    
    @Column("decimal", { precision: 7, scale: 2 })
    rangeFive!: number

    @CreateDateColumn()
    created_at!: Date;


    constructor(){
        if(!this.id){
            this.id = uuidV4()
            this.created_at = new Date()
        }
    }
   
}


