import { container } from 'tsyringe'
import { AreasRepository } from '../../modules/areas/repositories/AreasRepository'
import { IAreasRepository } from '../../modules/areas/repositories/IAreasRepository'
import { GroupsRepository } from '../../modules/groups/repositories/GroupsRepository'
import { IGroupsRepository } from '../../modules/groups/repositories/IGroupsRepository'
import { IPositionsRepository } from '../../modules/positions/repositories/IPositionsRepository'
import { PositionsRepository } from '../../modules/positions/repositories/PositionsRepository'

container.registerSingleton<IAreasRepository>(
    "AreasRepository", 
     AreasRepository)

container.registerSingleton<IGroupsRepository>(
    "GroupsRepository", 
    GroupsRepository)

container.registerSingleton<IPositionsRepository>(
    "PositionsRepository", 
    PositionsRepository)