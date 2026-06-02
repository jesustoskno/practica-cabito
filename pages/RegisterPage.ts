import {Page} from "@playwright/test";
import {RegisterMap} from "../maps/RegisterMap";

export class RegisterPage extends RegisterMap{
    constructor(page: Page){
        super(page);
    }
    public async clickSignupLoginButton(){
        await this.signupLoginButton.click();
    }
    public async clickSignupNewsletterCheckBox(){
        await this.signupNewsletterCheckbox.check();
    }
    public async clickSpecialOffersCheckBox(){
        await this.specialOffersCheckBox.check();
    }
    public async clickContinueButton(){
        await this.continueButton.click();
    }
    public async clickCreateAccountButton(){
        await this.createAccountButton.click();
    }
    public async clickDeleteAccountButton(){
        await this.deleteAccountButton.click();
    }
    public async registerAccount(userData : {fullName: string, email: string}) {
        await this.signupInputFullName.fill(userData.fullName);
        await this.signupInputEmail.fill(userData.email);
        await this.btnCreateAccount.click();
    }
    public async fillAccountInformation(accountInformation : {title: string, password: string, "Date of birth": string[]}) {
        await this.accountInformationInputTitle(accountInformation.title).check();
        await this.accountInformationInputPassword.fill(accountInformation.password);
        await this.accountInformationInputDobDay.selectOption(accountInformation["Date of birth"][0]);
        await this.accountInformationInputDobMonth.selectOption(accountInformation["Date of birth"][1]);
        await this.accountInformationInputDobYear.selectOption(accountInformation["Date of birth"][2]);
    }
    public async fillAddressInformation(addressInformation : {firstName: string, lastName: string, company: string, address: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string}) {
        await this.addressInformationInputFirstName.fill(addressInformation.firstName);
        await this.addressInformationInputLastName.fill(addressInformation.lastName);
        await this.addressInformationInputCompany.fill(addressInformation.company);
        await this.addressInformationInputAddress.fill(addressInformation.address);
        await this.addressInformationInputAddress2.fill(addressInformation.address2);
        await this.addressInformationInputCountry.selectOption(addressInformation.country);
        await this.addressInformationInputState.fill(addressInformation.state);
        await this.addressInformationInputCity.fill(addressInformation.city);
        await this.addressInformationInputZipcode.fill(addressInformation.zipcode);
        await this.addressInformationInputMobileNumber.fill(addressInformation.mobileNumber);
    }
}