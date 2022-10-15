import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class Users extends Model {
    static init(sequelize: Sequelize){
        super.init({
            img_id :{
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            unique_id: DataTypes.STRING,
            img: DataTypes.STRING,
            publish: DataTypes.STRING
        },{
            tableName: "clinic_images",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { Users }