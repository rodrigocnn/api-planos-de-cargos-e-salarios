import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"


@Entity('positions')

export class Position {
    
    @PrimaryColumn()
    id?: string;
    
    @Column()
    title!: string
  
    @Column()
    observations!: string

    @Column()
    areaId!: string

    @Column()
    groupId!: string

    @CreateDateColumn()
    created_at!: Date;


    constructor(){
        if(!this.id){
            this.id = uuidV4()
            this.created_at = new Date()
        }
    }
   
}


