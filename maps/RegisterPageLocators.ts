import {Page} from "@playwright/test";
export class registerUserPageLocators {
    constructor(public page:Page){}
    /*
     *General Use Locators
    */
    get signup_login_button(){
        return this.page.getByText('Signup / Login');
    }
    get continue_Button(){
        return this.page.getByRole('link', { 
            name: 'Continue' 
        });
    }
    get create_account_Button(){
        return this.page.getByRole('button', { 
            name: 'Create Account' 
        });
    }
    get delete_account_Button(){
        return this.page.getByRole('link', { 
            name: 'Delete Account' 
        });
    }

    /*
     *signup section locators
    */
    get signup_link () {
        return this.page.getByRole('link', { 
            name: 'Sign up' 
        });
    }
    get signup_input_fullName () { 
        return this.page.getByRole('textbox', { 
                name: 'Name' 
            });
    }
    //Two textbox for email present, one for sign up and the other one for login, locator use to specify the one for sign up
    get signup_input_email () {
        return this.page.locator('form').filter({ 
            hasText: 'Signup' 
        }).getByPlaceholder('Email Address');
    }
        
    get btn_createAccount () {
        return this.page.getByRole('button', { 
            name: 'Signup' 
        });
    }

    /*
    *account Information section locators
    */
    //Method
    accountInformation_input_title (Title: string){
        return this.page.getByRole('radio', { 
            name: new RegExp(`^${Title}\\.?$`) 
        });
    }
    
    get accountInformation_input_password () { 
        return this.page.getByRole('textbox', { 
            name: 'Password *' 
        });
    }

    get accountInformation_input_dob_day() {
        return this.page.locator('select#days')
    }

    get accountInformation_input_dob_month() { 
        return this.page.locator('select#months')
    }
    get accountInformation_input_dob_year(){
        return this.page.locator('select#years')
    }

    get signup_newsletter_CheckBox(){
        return this.page.getByRole('checkbox', { 
            name: 'Sign up for our newsletter!' 
        });
    }
    get special_offers_CheckBox(){
        return this.page.getByRole('checkbox', { 
            name: 'Receive special offers from' 
        });
    }

    /*
     *address Information section locators
    */
    get addressInformation_input_firstName(){
        return this.page.getByRole('textbox', { 
                name: 'First name *' 
        });
    }
    get addressInformation_input_lastName(){
        return this.page.getByRole('textbox', { 
            name: 'Last name *' 
        });
    }
    //Locator use, due to two companies labels visible, one in company and the other one in address 1 (Street Address, Company)
    get addressInformation_input_company(){
        return this.page.locator('input#company')
    }
    get addressInformation_input_address(){
        return this.page.getByRole('textbox', { 
            name: 'Address * (Street address, P.' 
        });
    }
    get addressInformation_input_address2(){
        return this.page.getByRole('textbox', { name: 'Address 2' })
    }
    get addressInformation_input_country(){
        return this.page.getByLabel('Country *')
    }
    //page.locator('select[name="country"]'),
    get addressInformation_input_state(){
        return this.page.getByRole('textbox', { name: 'State' })
    }
    get addressInformation_input_city(){
        return this.page.getByRole('textbox', { name: 'City' })
    }
    //Locator used, if getByRole used conflict with the city locator
    get addressInformation_input_zipcode(){
        return this.page.locator('input#zipcode')
    }
    get addressInformation_input_mobileNumber(){
        return this.page.getByRole('textbox', { name: 'Mobile Number *' })
    }
}

export class expectedAssertionsPageLocators{
    constructor(private page:Page){}
    get expected_homePage_Visible(){
        return this.page.getByText('Home');
    }

    get expected_new_user_Signup(){
        return this.page.getByText('New User Signup!');
    }

    get expected_enter_account_Information(){
        return this.page.getByText('Enter Account Information');
    }

    get expected_account_Created(){
        return this.page.getByText('Account Created!');
    }

    expected_logged_Username(fullName: string){
        return this.page.getByText(`Logged in as ${fullName}`);
    }

    get expected_account_Deleted(){
        return this.page.getByText('Account Deleted!');
    }
}
