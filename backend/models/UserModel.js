import { Sequelize } from "sequelize";
import dbase from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = dbase.define('users',{
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    alias: DataTypes.STRING,
    line: DataTypes.STRING,
    password: DataTypes.STRING,
    refresh_token: DataTypes.TEXT
},{
    freezeTableName: true
});

export default Users;