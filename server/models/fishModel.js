import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const fishModel = db.define('fishes', {
    name: DataTypes.STRING,
    latinName: DataTypes.STRING,
    class: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING,
    desc: DataTypes.STRING,
    habitats: DataTypes.STRING,
    endemicArea: DataTypes.STRING,
    fishPicture: DataTypes.TEXT
}, {
    freezeTableName: true,
})
 
export default fishModel;

(async() => {
    await db.sync();
})();