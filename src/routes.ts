import { Router } from "express"
import { AreaController } from "./modules/areas/useCases/AreaController"

const routes = Router()

// AREAS
const areaController = new AreaController()
routes.get("/areas/", areaController.index )
routes.get("/areas/:info", areaController.index )
routes.post("/areas/", areaController.create )
routes.post("/areas/delete/", areaController.delete )
routes.put("/areas/:id", areaController.update )

export { routes }