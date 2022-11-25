import { Sequelize } from "sequelize";

const db = new Sequelize('FishLogi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

});

export default db;
