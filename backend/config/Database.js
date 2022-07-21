import {Sequelize} from "sequelize";

const dbase = new Sequelize('dms', 'root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default dbase;