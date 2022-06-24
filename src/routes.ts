import { Router } from "express"
import { AreaController } from "./modules/areas/useCases/AreaController"
import { GroupController } from "./modules/groups/useCases/GroupController"
import { PositionController } from "./modules/positions/useCases/PositionController"

const routes = Router()

// AREAS
const areaController = new AreaController()
routes.get("/areas/", areaController.index )
routes.get("/areas/:info", areaController.index )
routes.post("/areas/", areaController.create )
routes.post("/areas/delete/", areaController.delete )
routes.put("/areas/:id", areaController.update )

// GROUPS

const groupController = new GroupController()
routes.get("/groups/", groupController.index )
routes.get("/groups/:info", groupController.index )
routes.post("/groups/", groupController.create )
routes.post("/groups/delete/", groupController.delete )
routes.put("/groups/:id", groupController.update )

// POSITIONS

const positionController = new PositionController()
routes.get("/positions/", positionController.index )
routes.get("/positions/:info", positionController.show )
routes.post("/positions/", positionController.create )
routes.post("/positions/delete/", positionController.delete )
routes.put("/positions/:id", positionController.update )

export { routes }