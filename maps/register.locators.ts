import {type Page,type Locator} from "@playwright/test";
//const test = (page : Page) => {return page.getByText('Signup / Login');};
export class RegisterUserPageLocators {
    readonly page: Page;
    //General locators
    readonly signupLoginButton : Locator;
    readonly continueButton : Locator;
    readonly createAccountButton : Locator;
    readonly deleteAccountButton : Locator;
    //Signup section locators
    readonly signupLink : Locator;
    readonly signupInputFullName : Locator;
    readonly signupInputEmail : Locator;
    readonly btnCreateAccount : Locator;
    //Account Information section locators
    
    readonly accountInformationInputPassword : Locator;
    readonly accountInformationInputDobDay : Locator;
    readonly accountInformationInputDobMonth : Locator;
    readonly accountInformationInputDobYear : Locator;
    readonly signupNewsletterCheckbox : Locator;
    readonly specialOffersCheckBox : Locator;
    //Address Information section locators
    readonly addressInformationInputFirstName : Locator;
    readonly addressInformationInputLastName : Locator;
    readonly addressInformationInputCompany : Locator;
    readonly addressInformationInputAddress : Locator;
    readonly addressInformationInputAddress2 : Locator;
    readonly addressInformationInputCountry : Locator;
    readonly addressInformationInputState : Locator;
    readonly addressInformationInputCity : Locator;
    readonly addressInformationInputZipcode : Locator;
    readonly addressInformationInputMobileNumber : Locator;

    constructor(page: Page){
        this.page = page;
        this.signupLoginButton = page.getByText('Signup / Login');
        this.continueButton = page.getByRole('link', {
            name : 'Continue'
        });
        this.createAccountButton = page.getByRole('button', {
            name : 'Create Account'
        });
        this.deleteAccountButton = page.getByRole('link', {
            name : 'Delete Account'
        });

        this.signupLink = page.getByRole('link', {
            name : 'Sign up'
        });
        this.signupInputFullName = page.getByRole('textbox', {
            name : 'Name'
        });
        this.signupInputEmail = page.locator('form')
            .filter({
                hasText: 'Signup'
            })
            .getByPlaceholder('Email Address');
        this.btnCreateAccount = page.getByRole('button', {
            name : 'Signup'
        });

        this.accountInformationInputPassword = page.getByRole('textbox', {
            name: 'Password *'
        });
        this.accountInformationInputDobDay = page.locator('select#days');
        this.accountInformationInputDobMonth = page.locator('select#months');
        this.accountInformationInputDobYear = page.locator('select#years');
        this.signupNewsletterCheckbox = page.getByRole('checkbox', {
            name:'Sign up for our newsletter!'
        });
        this.specialOffersCheckBox = page.getByRole('checkbox', {
            name: 'Receive special offers from'
        });
        this.addressInformationInputFirstName = page.getByRole('textbox', {
            name: 'First name *'
        });
        this.addressInformationInputLastName = page.getByRole('textbox', {
            name: 'Last name *'
        });
        this.addressInformationInputCompany = page.getByRole('textbox', { 
            name: 'Company', exact: true 
        });
        this.addressInformationInputAddress = page.getByRole('textbox', {
            name: 'Address * (Street address, P.'
        });
        this.addressInformationInputAddress2 = page.getByRole('textbox', {
            name: 'Address 2'
        });
        this.addressInformationInputCountry = page.getByLabel('Country *');
        this.addressInformationInputState = page.getByRole('textbox', {
            name: 'State'
        });
        //actual name in element = City * Zipcode *, that's why zipcode is having issues pointing to the right textbox using getByRole.
        this.addressInformationInputCity = page.getByRole('textbox', {
            name: 'City'
        });
        // zipcode name locator was added by mistake to the city textbox, that's why when getByRole and name used pointed to city textbox, doing manual inspection noticed that if name="",exact true is used, point to zipcode since the name is empty on the form.
        this.addressInformationInputZipcode = page.getByRole('textbox',{
            name: '', exact: true
        });
        this.addressInformationInputMobileNumber = page.getByRole('textbox', {
            name: 'Mobile Number *'
        });
    }
    //Methods
    public accountInformationInputTitle(Title : string) : Locator{
        return this.page.getByRole('radio', {name: new RegExp(`^${Title}\\.?$`)});
    }
}
