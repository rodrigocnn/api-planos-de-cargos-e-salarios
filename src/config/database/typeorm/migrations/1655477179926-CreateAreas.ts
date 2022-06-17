import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAreas1655477179926 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
               {
            
                name: 'areas',
                columns:[
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },

                    {
                        name: "observations",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },

                ]
               
               }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("areas")
    }

}
