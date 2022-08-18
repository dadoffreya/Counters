import {Sequelize} from "sequelize";
import dbase from "../config/Database.js";

const {DataTypes} = Sequelize;

const Issues = dbase.define('m_issue',{
    code: DataTypes.STRING,
    label: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Issues;

(async()=>{
    await dbase.sync();
})();