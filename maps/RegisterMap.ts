import {type Page,type Locator} from "@playwright/test";
export class RegisterMap {
    readonly page: Page;
    //General locators
    readonly signupLoginButton : Locator;
    readonly continueButton : Locator;
    readonly createAccountButton : Locator;
    readonly deleteAccountButton : Locator;
    //Signup section locators
    readonly signUpLink : Locator;
    readonly nameInput : Locator;
    readonly emailInput : Locator;
    readonly signUpButton : Locator;
    //Account Information section locators 
    readonly passwordInput : Locator;
    readonly dateOfBirthDaySelect : Locator;
    readonly dateOfBirthMonthSelect : Locator;
    readonly dateOfBirthYearSelect : Locator;
    readonly newsletterCheckbox : Locator;
    readonly specialOffersCheckBox : Locator;
    //Address Information section locators
    readonly firstNameInput : Locator;
    readonly lastNameInput : Locator;
    readonly companyInput : Locator;
    readonly addressInput : Locator;
    readonly address2Input : Locator;
    readonly countryLabel : Locator;
    readonly stateInput : Locator;
    readonly cityInput : Locator;
    readonly zipCodeInput : Locator;
    readonly mobileNumberInput : Locator;
    //Expect Locators
    readonly homePageText : Locator;
    readonly newUserSignupText : Locator;
    readonly enterAccountInformationText : Locator;
    readonly accountCreatedText : Locator;
    readonly accountDeletedText : Locator;

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
        this.signUpLink = page.getByRole('link', {
            name : 'Sign up'
        });
        this.nameInput = page.getByRole('textbox', {
            name : 'Name'
        });
        this.emailInput = page.locator('form')
            .filter({
                hasText: 'Signup'
            })
            .getByPlaceholder('Email Address');
        this.signUpButton = page.getByRole('button', {
            name : 'Signup'
        });
        this.passwordInput = page.getByRole('textbox', {
            name: 'Password *'
        });
        this.dateOfBirthDaySelect = page.locator('select#days');
        this.dateOfBirthMonthSelect = page.locator('select#months');
        this.dateOfBirthYearSelect = page.locator('select#years');
        this.newsletterCheckbox = page.getByRole('checkbox', {
            name:'Sign up for our newsletter!'
        });
        this.specialOffersCheckBox = page.getByRole('checkbox', {
            name: 'Receive special offers from'
        });
        this.firstNameInput = page.getByRole('textbox', {
            name: 'First name *'
        });
        this.lastNameInput = page.getByRole('textbox', {
            name: 'Last name *'
        });
        this.companyInput = page.getByRole('textbox', { 
            name: 'Company', exact: true 
        });
        this.addressInput = page.getByRole('textbox', {
            name: 'Address * (Street address, P.'
        });
        this.address2Input = page.getByRole('textbox', {
            name: 'Address 2'
        });
        this.countryLabel = page.getByLabel('Country *');
        this.stateInput = page.getByRole('textbox', {
            name: 'State'
        });
        //actual name in element = City * Zipcode *, that's why zipcode is having issues pointing to the right textbox using getByRole.
        this.cityInput = page.getByRole('textbox', {
            name: 'City'
        });
        // zipcode name locator was added by mistake to the city textbox, that's why when getByRole and name used pointed to city textbox, doing manual inspection noticed that if name="",exact true is used, point to zipcode since the name is empty on the form.
        this.zipCodeInput = page.getByText('Zipcode').locator("//following-sibling::input");
        this.mobileNumberInput = page.getByRole('textbox', {
            name: 'Mobile Number *'
        });
        //Expect locators
        this.homePageText = page.getByText('Home');
        this.newUserSignupText = page.getByText('New User Signup!');
        this.enterAccountInformationText = page.getByText('Enter Account Information');
        this.accountCreatedText = page.getByText('Account Created!');
        this.accountDeletedText = page.getByText('Account Deleted!');
    }
    //Methods
    public titleRadio(Title : string) : Locator{
        return this.page.getByRole('radio', {name: new RegExp(`^${Title}\\.?$`)});
    }
    //Expect Methods
    public loggedInAsUsernameText(fullName : string) : Locator{
        return this.page.getByText(`Logged in as ${fullName}`);
    }
}


