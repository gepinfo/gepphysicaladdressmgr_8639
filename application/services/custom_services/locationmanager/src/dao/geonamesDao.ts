import * as mongoose from 'mongoose';
import geonamesModel from '../models/geonames';
import { CustomLogger } from '../config/Logger'


export class geonamesDao {
    private geonames = geonamesModel;
    constructor() { }
    
    public async GpDelete(geonamesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: GpDelete');

    

    
    
    
    this.geonames.findByIdAndRemove(geonamesId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from geonamesDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(geonamesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(geonamesData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.geonames.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from geonamesDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(geonamesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: GpSearchForUpdate');

    

    
    
    
    this.geonames.findOneAndUpdate({ _id: geonamesData._id }, geonamesData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from geonamesDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(geonamesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: GpUpdate');

    

    
    
    
    this.geonames.findOneAndUpdate({ _id: geonamesData._id }, geonamesData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from geonamesDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(geonamesId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: GpGetNounById');

    

    
    
    
    this.geonames.findById(geonamesId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from geonamesDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: GpGetAllValues');

    

    
    
    
    this.geonames.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from geonamesDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(geonamesData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: GpCreate');

    let temp = new geonamesModel(geonamesData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from geonamesDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async (){
    
    new CustomLogger().showLogger('info', 'Enter into geonamesDao.ts: ');

    

    
    
    
    }


}