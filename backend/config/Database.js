import {Sequelize} from "sequelize";

const dbase = new Sequelize('dms', 'admin','PTdpsNGW0301!@#',{
    host: 'localhost',
    dialect: 'mysql'
});

export default dbase;