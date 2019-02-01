import { dbConnection } from '../db/mysql-connection';

export const list = (callback) => { 
    const query = "select * from test";
    dbConnection.query(query, (err, result, fields) => {
        if(err) throw err;

        callback(result);
    });
};