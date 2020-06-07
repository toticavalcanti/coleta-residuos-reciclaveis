import express from 'express';
import PointsController from './controllers/pointsController';
import ItemsController from './controllers/itemsController';

// index, show, create ou store, update, delete ou destroy
const routes = express.Router();
const pointController = new PointsController();  
const itemsController = new ItemsController(); 

routes.get('/items', );
routes.post('/points', pointController.create);
//request params
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);
export default routes;