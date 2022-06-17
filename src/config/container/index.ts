import { container } from 'tsyringe'
import { AreasRepository } from '../../modules/areas/repositories/AreasRepository'
import { IAreasRepository } from '../../modules/areas/repositories/IAreasRepository'

container.registerSingleton<IAreasRepository>(
    "AreasRepository", 
     AreasRepository)