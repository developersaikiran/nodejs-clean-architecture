interface IUserAuthRepository {
    login({username, password}:any): Promise<any>;
    registration({first_name, last_name, username, email, mobile_no, password, business_type_id, company_name, company_address, country_code, office_number, country, region, city, zip_code, reference_id, sales_person_id}:any): Promise<any>;
    findUsername({ email, username }:any): Promise<any>;
}

export {
    IUserAuthRepository
}