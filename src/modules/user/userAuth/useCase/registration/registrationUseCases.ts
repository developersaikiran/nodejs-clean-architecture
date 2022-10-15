import { IUserAuthRepository } from '../../repository/IUserAuthRepository';
interface IRequests{
    first_name: string, 
    last_name: string, 
    username: string, 
    email: string, 
    mobile_no: string, 
    password: string,

    business_type_id: string, 
    company_name: string, 
    company_address: string, 
    country_code: string, 
    office_number: string, 
    country: string, 
    region: string, 
    city: string, 
    zip_code: string, 
    reference_id: string, 
    sales_person_id: string
}

class RegistrationUseCase {
    constructor(private userAuthRepository: IUserAuthRepository ){}

    async execute({first_name, last_name, username, email, mobile_no, password, business_type_id, company_name, company_address, country_code, office_number, country, region, city, zip_code, reference_id, sales_person_id}: IRequests):Promise<any>{
        try{
            const Registration = await this.userAuthRepository.registration({ first_name, last_name, username, email, mobile_no, password, business_type_id, company_name, company_address, country_code, office_number, country, region, city, zip_code, reference_id, sales_person_id})
            if(Registration == null){
                return {
                    status: false,
                    message: 'Registration failed, Please try again later...',
                    data: {}
                };
            }else{
                return {
                    status: true,
                    message: 'Registration successfully...',
                    data: Registration
                };
            }
        }catch {
            return {
                status: false,
                message: 'Something went wrong...',
                data: {}
            };                
        }        

    };

}

export {
    RegistrationUseCase
}