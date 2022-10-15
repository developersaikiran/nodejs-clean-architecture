import { Sequelize } from "sequelize/types";
const { DataTypes, Model } = require('sequelize');

class Business extends Model {
    static init(sequelize: Sequelize){
        super.init({
            uuid :{
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false,
            },
            user_id:  DataTypes.UUID,
            business_type_id:  DataTypes.UUID,
            company_name:  DataTypes.STRING,
            company_address:  DataTypes.STRING,
            country_code:  DataTypes.STRING,
            office_number:  DataTypes.STRING,
            country:  DataTypes.STRING,
            region:  DataTypes.STRING,
            city:  DataTypes.STRING,
            zip_code:  DataTypes.STRING,
            reference_id:  DataTypes.UUID,
            sales_person_id:  DataTypes.UUID,
        },{
            tableName: "business_profile",
            sequelize
        })
    }
    static associate(models: any) {

    }
}

export { Business }