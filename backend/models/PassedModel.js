import {Sequelize} from "sequelize";
import dbase from "../config/Database.js";

const {DataTypes} = Sequelize;

const Passed = dbase.define('rft_main',{
    line: DataTypes.STRING,
    status: DataTypes.STRING,
    code: DataTypes.STRING,
    qty: DataTypes.INTEGER
},{
    freezeTableName:true
});

export default Passed;

(async()=>{
    await dbase.sync();
})();