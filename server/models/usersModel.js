import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const usersModel = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
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
    isAdmin: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "visitors"
    },
    profilePic: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    loginAt: {
        type: DataTypes.DATE,
    },
    logoutAt: {
        type: DataTypes.DATE,
    }
}, {
    freezeTableName: true,
})

export default usersModel;

(async() => {
    await db.sync();
})();