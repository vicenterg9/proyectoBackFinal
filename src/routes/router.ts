import {Router} from 'express'
import filmsRoutes from './films.routes'

const routes = Router();

routes.use("/films",filmsRoutes );

console.log("asdas")


export default routes;