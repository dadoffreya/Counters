import {Sequelize} from "sequelize";
import dbase from "../config/Database.js";

const {DataTypes} = Sequelize;

const ViewsModel = dbase.define('view03',{
    TGLTRX: DataTypes.DATEONLY,
    LINED: DataTypes.STRING,
    JMREC: DataTypes.INTEGER,
    STDMS: DataTypes.STRING,
    JMTOT: DataTypes.INTEGER,
    PDMS: DataTypes.DECIMAL
},{
    freezeTableName:true
});

export default ViewsModel;

(async()=>{
    await dbase.sync();
})();