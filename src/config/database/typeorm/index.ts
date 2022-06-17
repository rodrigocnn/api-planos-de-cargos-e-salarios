import { DataSource} from "typeorm"
import { Area } from "../../../modules/areas/infra/typeorm/model"

const dataSource = new DataSource({
    type: "postgres",
    host:"localhost",
    port: 5432,
    username: "postgres",
    password: "1245a3",
    database: "salaryplan",
    entities: [Area],
    migrations: ["./src/config/database/typeorm/migrations/*.ts"],
   
})

dataSource.initialize()

export { dataSource }
