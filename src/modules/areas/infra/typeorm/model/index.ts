import { v4 as uuidV4 } from "uuid"
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"

@Entity('areas')

export class Area {
    
    @PrimaryColumn()
    id?: string;
    
    @Column()
    title!: string
    
    @Column()
    observations!: string
    
    @CreateDateColumn()
    created_at!: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4()
            this.created_at = new Date()
        }
    }
   
}


