import {Sequelize} from "sequelize";

const dbase = new Sequilize('RFT_DB', 'itdps2','PTdpsNGAWI0301!@#',{
    host: '192.168.2.253',
    dialect: 'mysql'
});

export default dbase;