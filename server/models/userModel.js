import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const users = db.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
}, {
    freezeTableName: true,
})

export default users;

(async() => {
    await db.sync();
})();