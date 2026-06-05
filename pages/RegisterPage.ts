import {Page} from "@playwright/test";
import {RegisterMap} from "../maps/RegisterMap";

export class RegisterPage extends RegisterMap{
    constructor(page: Page){
        super(page);
    }
    public async registerAccount(userData : {fullName: string, email: string}) {
        await this.nameInput.fill(userData.fullName);
        await this.emailInput.fill(userData.email);
        await this.signUpButton.click();
    }
    public async fillAccountInformation(accountInformation : {title: string, password: string, "Date of birth": string[]}) {
        await this.titleRadio(accountInformation.title).check();
        await this.passwordInput.fill(accountInformation.password);
        await this.dateOfBirthDaySelect.selectOption(accountInformation["Date of birth"][0]);
        await this.dateOfBirthMonthSelect.selectOption(accountInformation["Date of birth"][1]);
        await this.dateOfBirthYearSelect.selectOption(accountInformation["Date of birth"][2]);
    }
    public async fillAddressInformation(addressInformation : {firstName: string, lastName: string, company: string, address: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string}) {
        await this.firstNameInput.fill(addressInformation.firstName);
        await this.lastNameInput.fill(addressInformation.lastName);
        await this.companyInput.fill(addressInformation.company);
        await this.addressInput.fill(addressInformation.address);
        await this.address2Input.fill(addressInformation.address2);
        await this.countryLabel.selectOption(addressInformation.country);
        await this.stateInput.fill(addressInformation.state);
        await this.cityInput.fill(addressInformation.city);
        await this.zipCodeInput.fill(addressInformation.zipcode);
        await this.mobileNumberInput.fill(addressInformation.mobileNumber);
    }
}