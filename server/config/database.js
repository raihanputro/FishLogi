import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: 'mysql',

});

db.authenticate().then(() => {
    console.log('Terkoneksi dengan database!');
 }).catch((error) => {
    console.error('Tidak dapat konek dengan database:', error);
 });

export default db;
