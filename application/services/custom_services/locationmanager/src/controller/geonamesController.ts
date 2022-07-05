import { Request, Response } from 'express';
import { geonamesService } from '../service/geonamesService';
import { CustomLogger } from '../config/Logger'
let geonames = new geonamesService();

export class geonamesController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
geonames.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
geonames.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
geonames.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
geonames.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
geonames.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
geonames.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
geonames.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpCreate');
    })}
public GpSEF(req: Request, res: Response) {
geonames.GpSEF(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into geonamesController.ts: GpSEF');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from geonamesController.ts: GpSEF');
    })}


}