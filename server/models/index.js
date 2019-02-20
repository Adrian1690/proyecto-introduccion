import { dbConnection } from '../db/mysql-connection';
import * as recipesModel from './recipes';

export const recipes = recipesModel;

export const list = (callback) => { 
    const query = "select * from test";
    dbConnection.query(query, (err, result, fields) => {
        if(err) throw err;

        callback(result);
    });
};