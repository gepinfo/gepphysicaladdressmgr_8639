import { Request, Response } from 'express';
import {geonamesDao} from '../dao/geonamesDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let geonames = new geonamesDao();

export class geonamesService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: GpDelete')
     let  geonamesId = req.params.id;
     geonames.GpDelete(geonamesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: GpSearch')
     let  geonamesData = req.query;
     geonames.GpSearch(geonamesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: GpSearchForUpdate')
     let  geonamesData = req.body;
     geonames.GpSearchForUpdate(geonamesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: GpUpdate')
     let  geonamesData = req.body;
     geonames.GpUpdate(geonamesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: GpGetNounById')
     let  geonamesId = req.params.id;
     geonames.GpGetNounById(geonamesId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: GpGetAllValues')
     
     geonames.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: GpCreate')
     let  geonamesData = req.body;
     geonames.GpCreate(geonamesData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: GpCreate')
         callback(response);
         });
    }
    
public  (req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into geonamesService.ts: ')
     
     geonames.(()=>{
             new CustomLogger().showLogger('info', 'Exit from geonamesService.ts: ')
         callback();
         });
    }
    
    
    
    
}