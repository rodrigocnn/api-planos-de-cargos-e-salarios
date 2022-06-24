import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreatePositions1655904204934 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "positions",
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
                   name: "areaId",
                   type: 'uuid',
                   unsigned: true
                   
               },

               {
                   name: "groupId",
                   type: 'uuid',
                   unsigned: true
                   
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

                
            ],
            
        }), true);


        await queryRunner.createForeignKey(
            'positions',
            new TableForeignKey({
              columnNames: ['areaId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'areas',
              onDelete: 'SET NULL'
            })
          );

          await queryRunner.createForeignKey(
            'positions',
            new TableForeignKey({
              columnNames: ['groupId'],
              referencedColumnNames: ['id'],
              referencedTableName: 'groups',
              onDelete: 'SET NULL'
            })
          );
    
    }  

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("positions")
    }

}
