import { RegistrationUseCase } from './registrationUseCases';
import { Request, Response } from 'express';

class RegistrationController {
    constructor(public RegistrationUseCase : RegistrationUseCase){}

    async handle(request: Request, response: Response): Promise<any>{
        const {
            first_name, 
            last_name, 
            username, 
            email, 
            password,
            mobile_no, 

            business_type_id,
            company_name,
            company_address,
            country_code,
            office_number,
            country,
            region,
            city,
            zip_code,
            reference_id,
            sales_person_id,
        } = request.body;

        const result = await this.RegistrationUseCase.execute({first_name, last_name, username, email, mobile_no, password, business_type_id, company_name, company_address, country_code, office_number, country, region, city, zip_code, reference_id, sales_person_id});
        if(result.status == true){
            return response.status(200).send(result);
        }else{
            return response.status(500).send(result);
        }
    }
}

export {
    RegistrationController
}