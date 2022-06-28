import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateSalary1656420582898 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "salary",
            columns: [
                {
                    name: "id",
                    type: 'uuid',
                    isPrimary: true,
                },

                {
                    name: "positionId",
                    type: 'uuid',
                    unsigned: true

                },
                {
                    name: "rangeOne",
                    type: "decimal(8, 2)"
                },
                {
                    name: "rangeTwo",
                    type: "decimal(8, 2)"
                },
                {
                    name: "rangeThree",
                    type: "decimal(8, 2)"
                },
                {
                    name: "rangeFour",
                    type: "decimal(8, 2)"
                },
                {
                    name: "rangeFive",
                    type: "decimal(8, 2)"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },


            ],

        }), true);


        await queryRunner.createForeignKey(
            'salary',
            new TableForeignKey({
                columnNames: ['positionId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'positions',
                onDelete: 'SET NULL'
            })
        );

 

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("salary")
    }

}
