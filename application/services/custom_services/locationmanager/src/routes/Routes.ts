import { Request, Response, NextFunction } from "express";
import { geonamesController } from '../controller/geonamesController';


export class Routes {
    private geonames: geonamesController = new geonamesController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/geonames/:id').delete(this.geonames.GpDelete);
app.route('/geonames/get/search').get(this.geonames.GpSearch);
app.route('/geonames/get/update').put(this.geonames.GpSearchForUpdate);
app.route('/geonames').put(this.geonames.GpUpdate);
app.route('/geonames/:id').get(this.geonames.GpGetNounById);
app.route('/geonames').get(this.geonames.GpGetAllValues);
app.route('/geonames').post(this.geonames.GpCreate);
app.route('').(this..);
     }

}