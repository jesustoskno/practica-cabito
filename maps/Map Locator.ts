import {Page} from "@playwright/test";

export const signupLocators = {
    signup_link: (page : Page) => 
        page.getByRole('link', { name: 'Sign up' }),
    signup_input_fullName : (page : Page) => 
        page.locator('input[name="name"]'),
    signup_input_email: (page : Page) => 
        page.locator('input[data-qa="signup-email"][name="email"]'),
    btn_createAccount: (page : Page) => 
        page.getByRole('button', { name: 'Signup' })
}

export const accountInformationLocators = {
    accountInformation_input_title: (page: Page, Title: string) => 
        page.getByRole('radio', { name: new RegExp(`^${Title}\\.?$`) }),
    accountInformation_input_password: (page : Page) => 
        page.locator('input[data-qa="password"][name="password"]'),
    accountInformation_input_dob_day: (page : Page) => 
        page.locator('select#days'),
    accountInformation_input_dob_month: (page : Page) => 
        page.locator('select#months'),
    accountInformation_input_dob_year: (page : Page) => 
        page.locator('select#years')
}   

export const addressInformationLocators = {
    addressInformation_input_firstName: (page : Page) => 
        page.getByRole('textbox', { name: 'First name *' }),
    addressInformation_input_lastName: (page : Page) => 
        page.getByRole('textbox', { name: 'Last name *' }),
    //Locator use, due to two companies labels visible, one in company and the other one in address 1 (Street Address, Company)
    addressInformation_input_company: (page : Page) => 
        page.locator('input#company'),
    addressInformation_input_address: (page : Page) => 
        page.getByRole('textbox', { name: 'Address * (Street address, P.' }),
        //page.getByRole('textbox', { name: new RegExp(`^address1$`) }),
    addressInformation_input_address2: (page : Page) => 
        page.getByRole('textbox', { name: 'Address 2' }),
    addressInformation_input_country: (page : Page) => 
        page.locator('select[name="country"]'),
    addressInformation_input_state: (page : Page) => 
        page.getByRole('textbox', { name: 'State' }),
    addressInformation_input_city: (page : Page) => 
        page.getByRole('textbox', { name: 'City' }),
    //Locator used, if getByRole used conflict with the city locator
    addressInformation_input_zipcode: (page : Page) => 
        page.locator('input#zipcode'),
    addressInformation_input_mobileNumber: (page : Page) => 
        page.getByRole('textbox', { name: 'Mobile Number *' })

}