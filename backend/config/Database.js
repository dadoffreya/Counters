import {Sequelize} from "sequelize";

const dbase = new Sequelize('dms', 'firman','FreyaImut30#)',{
    host: '192.168.2.253',
    dialect: 'mysql'
});

export default dbase;