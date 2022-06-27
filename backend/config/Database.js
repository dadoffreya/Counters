import {Sequelize} from "sequelize";

const dbase = new Sequelize('RFT_DB', 'root','PTdpsNGAWI0301!@#',{
    host: '192.168.2.253',
    dialect: 'mysql'
});

export default dbase;