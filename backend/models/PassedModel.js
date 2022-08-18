import {Sequelize} from "sequelize";
import dbase from "../config/Database.js";

const {DataTypes} = Sequelize;

const Passed = dbase.define('inspection',{
    line: DataTypes.STRING,
    flagstat: DataTypes.STRING,
    code: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    tanggal: DataTypes.DATEONLY
},{
    freezeTableName:true
});

export default Passed;

(async()=>{
    await dbase.sync();
})();