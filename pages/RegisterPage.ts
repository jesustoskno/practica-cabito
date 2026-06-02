import {Page,expect} from "@playwright/test";
import {registerUserPageLocators,expectedAssertionsPageLocators} from "../maps/RegisterPageLocators";

export class registerUserPage {
    private getregisterUserPageLocators: registerUserPageLocators;

    constructor(public page:Page){
        this.getregisterUserPageLocators = new registerUserPageLocators(page);
    }

    public async click_signup_login_Button(){
        await this.getregisterUserPageLocators.signup_login_button.click();
    }

    public async click_signup_newsletter_CheckBox(){
        await this.getregisterUserPageLocators.signup_newsletter_CheckBox.check();
    }
    public async click_special_offers_CheckBox(){
        await this.getregisterUserPageLocators.special_offers_CheckBox.check();
    }

    public async click_continue_Button(){
        await this.getregisterUserPageLocators.continue_Button.click();
    }

    public async click_create_account_Button(){
        await this.getregisterUserPageLocators.create_account_Button.click();
    }

    public async click_delete_account_Button(){
        await this.getregisterUserPageLocators.delete_account_Button.click();
    }
    public async registerAccount(userData : {fullName: string, email: string}) {
        await this.getregisterUserPageLocators.signup_input_fullName.fill(userData.fullName);
        await this.getregisterUserPageLocators.signup_input_email.fill(userData.email);
        await this.getregisterUserPageLocators.btn_createAccount.click();
    }

    public async fillAccountInformation(accountInformation : {Title: string, Password: string, "Date of birth": string[]}) {
        await this.getregisterUserPageLocators.accountInformation_input_title(accountInformation.Title).check();
        await this.getregisterUserPageLocators.accountInformation_input_password.fill(accountInformation.Password);
        await this.getregisterUserPageLocators.accountInformation_input_dob_day.selectOption(accountInformation["Date of birth"][0]);
        await this.getregisterUserPageLocators.accountInformation_input_dob_month.selectOption(accountInformation["Date of birth"][1]);
        await this.getregisterUserPageLocators.accountInformation_input_dob_year.selectOption(accountInformation["Date of birth"][2]);
    }

    public async fillAddressInformation(addressInformation : {firstName: string, lastName: string, company: string, address: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string}) {
        await this.getregisterUserPageLocators.addressInformation_input_firstName.fill(addressInformation.firstName);
        await this.getregisterUserPageLocators.addressInformation_input_lastName.fill(addressInformation.lastName);
        await this.getregisterUserPageLocators.addressInformation_input_company.fill(addressInformation.company);
        await this.getregisterUserPageLocators.addressInformation_input_address.fill(addressInformation.address);
        await this.getregisterUserPageLocators.addressInformation_input_address2.fill(addressInformation.address2);
        await this.getregisterUserPageLocators.addressInformation_input_country.selectOption(addressInformation.country);
        await this.getregisterUserPageLocators.addressInformation_input_state.fill(addressInformation.state);
        await this.getregisterUserPageLocators.addressInformation_input_city.fill(addressInformation.city);
        await this.getregisterUserPageLocators.addressInformation_input_zipcode.fill(addressInformation.zipcode);
        await this.getregisterUserPageLocators.addressInformation_input_mobileNumber.fill(addressInformation.mobileNumber);
    }
}

export class expected_assertions{

    private get_expected_Assertions: expectedAssertionsPageLocators;
    constructor(private page:Page){
        this.get_expected_Assertions = new expectedAssertionsPageLocators(page);
    }
    
    public async homePage_Visible(){
        await expect(this.get_expected_Assertions.expected_homePage_Visible,"Verify that home page is visible successfully").toBeVisible();
    }

    public async new_user_Signup(){
        await expect(this.get_expected_Assertions.expected_new_user_Signup,"New User Signup, needs to be visible").toBeVisible();
    }

    public async enter_account_Information(){
        await expect(this.get_expected_Assertions.expected_enter_account_Information,"Enter Account Information, needs to be visible").toBeVisible();
    }

    public async account_Created(){
        await expect(this.get_expected_Assertions.expected_account_Created,"Account Created, needs to be visible").toBeVisible();
    }

    public async logged_Username(fullName: string){
        await expect(this.get_expected_Assertions.expected_logged_Username(fullName),`Logged in as ${fullName}, needs to be visible`).toBeVisible();
    }

    public async account_Deleted(){
        await expect(this.get_expected_Assertions.expected_account_Deleted,"Account Deleted, needs to be visible").toBeVisible();
    }
}