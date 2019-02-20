import { dbConnection } from '../db/mysql-connection';

export const list = (callback) => { 
    console.log('im in model recipes list');
    const query = "select * from recipes";
    dbConnection.query(query, (err, result, fields) => {
        if(err) throw err;

        callback(result);
    });
};

export const save = (callback) => {
    const query = `INSERT INTO recipes values (value1,value2)`;
    dbConnection.query(query, (err, result, fields) => {
        if (err) throw err;

        callback(result);
    });
};

export const remove = (callback) => {
    const query = `DELETE FROM recipes where id_recipe = ?`;
    dbConnection.query(query, (err, result, fields) => {
        if (err) throw err;

        callback(result);
    });
}