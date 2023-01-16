import {Sequelize} from "sequelize";

const dbase = new Sequelize('dms', 'beacukai','wSnaSLMZ9D2BAKbs',{
    host: '192.168.2.240',
    dialect: 'mysql'
});

export default dbase;