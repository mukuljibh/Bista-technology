import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../db/db.js";

const roles = ['user','admin','employee','employer'];  
const User = sequelize.define('User', {
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM(roles),
        allowNull: false
    }
});

export default User;