import { DataSource} from "typeorm"
import { Area } from "../../../modules/areas/infra/typeorm/model"
import { Group } from "../../../modules/groups/infra/typeorm/model"
import { Position } from './../../../modules/positions/infra/typeorm/model/index';

const dataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    port: 5432,
    username: "postgres",
    password: "1245a3",
    database: "salaryplan",
    entities: [Area, Group, Position],
    migrations: ["./src/config/database/typeorm/migrations/*.ts"],
   
})

dataSource.initialize()

export { dataSource }
