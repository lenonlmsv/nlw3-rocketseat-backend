import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

//Multer (upload)
import Multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = Multer(uploadConfig); 

//GET
routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);

//POST
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;