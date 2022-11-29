import { Sequelize } from "sequelize";

const db = new Sequelize('FishLogi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

});

db.authenticate().then(() => {
    console.log('Terkoneksi dengan database!');
 }).catch((error) => {
    console.error('Tidak dapat konek dengan database:', error);
 });

export default db;
