import { IUserAuthRepository } from '../IUserAuthRepository';
import { Users } from '../../../../../models/users';
import { Business } from '../../../../../models/businessProfile';
import moment from 'moment';
import jwt from 'jsonwebtoken';

const authConfig = require('../../../../../config/auth.json');
const { Op } = require('sequelize');
const TodayDate = moment().format('YYYY-MM-DD');
const currentTime = moment().format('HH:mm:ss');

class UserAuthRepository implements IUserAuthRepository {
    
    // Generate Token
    generateToken(loginUser: string): string {
        return jwt.sign({ loginUser }, authConfig.secret, {
            expiresIn: 86400,
        })
    }


    // login user
    async login({username, password}:any): Promise<any>{
        const result = await Users.findOne({
            where: {
                [Op.or]:[
                    {
                        email: username,
                    },
                    {
                        username: username,
                    }
                ],
                password: password
            }
        });

        if(result){
            return result
        }else{
            return null
        }
    }

    async registration({ first_name, last_name, username, email, mobile_no, password, business_type_id, company_name, company_address, country_code, office_number, country, region, city, zip_code, reference_id, sales_person_id }:any): Promise<any>{
        const addUser = await Users.create({
            first_name: first_name, 
            last_name: last_name, 
            username: username, 
            email: email, 
            mobile_no: mobile_no, 
            password: password
        });
        if(addUser){
            const addBusiness = await Business.create({
                user_id: addUser.uuid,
                business_type_id: business_type_id, 
                company_name: company_name, 
                company_address: company_address, 
                country_code: country_code, 
                office_number: office_number, 
                country: country, 
                region: region, 
                city: city, 
                zip_code: zip_code, 
                reference_id: reference_id, 
                sales_person_id: sales_person_id
            });

            if(addBusiness){
                return {
                    user: addUser, 
                    business: addBusiness
                }
            }else{
                await Users.destroy({
                    where:{
                        uuid: addUser.uuid
                    } 
                });
                return null
            }
        }else{
            return null
        }
    }

    async findUsername({ email, username }:any): Promise<any>{
        const result = await Users.findOne({
            where: {
                [Op.or]: [
                    {
                      email: email,
                    },
                    {
                        username: username
                    }
                ],
            }
        });
        if(result){
            return result
        }else{
            return null
        }
    }

}

export {
    UserAuthRepository
}