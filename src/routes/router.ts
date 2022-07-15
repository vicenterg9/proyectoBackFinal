import {Router} from 'express'
import commentsRoutes from './comments.routes';
import filmsRoutes from './films.routes'
import usersRoutes from './users.routes';

const routes = Router();

routes.use("/films",filmsRoutes );
routes.use("/comments",commentsRoutes );
routes.use("/users",usersRoutes );

console.log("asdas")


export default routes;