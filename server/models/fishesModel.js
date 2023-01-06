import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const fishesModel = db.define('fishes', {
    name: DataTypes.STRING,
    latinName: DataTypes.STRING,
    classes: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING,
    desc: DataTypes.STRING,
    habitats: DataTypes.STRING,
    endemicArea: DataTypes.STRING,
    fishPicture: DataTypes.TEXT,
    authorId: DataTypes.INTEGER,
    authorName: DataTypes.STRING,
    deletedAt: {
        type: DataTypes.DATE,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    freezeTableName: true,
})
 
export default fishesModel;

(async() => {
    await db.sync();
})();