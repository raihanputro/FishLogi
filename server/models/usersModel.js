import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const usersModel = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePic: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    }
}, {
    freezeTableName: true,
})

export default usersModel;

(async() => {
    await db.sync();
})();