import mysql from 'mysql';

export const dbConnection = mysql.createPool({
    host: 'localhost',
    user: 'adrian',
    password: '123456',
    database: 'se3',
    port: 3309
});