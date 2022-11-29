import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const fishesModel = db.define('fishes', {
    name: DataTypes.STRING,
    latinName: DataTypes.STRING,
    class: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING,
    desc: DataTypes.STRING,
    habitats: DataTypes.STRING,
    endemicArea: DataTypes.STRING,
    fishPicture: DataTypes.TEXT,
    authorName: DataTypes.STRING,
}, {
    freezeTableName: true,
})
 
export default fishesModel;

(async() => {
    await db.sync();
})();