import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index, show, create ou store, update, delete ou destroy
const routes = express.Router();
const pointController = new PointsController();  
const itemsController = new ItemsController(); 

routes.get('/items', itemsController.index);
routes.post('/points', pointController.create);
//request params
routes.get('/points', pointController.index);
routes.get('/points/:id', pointController.show);
export default routes;