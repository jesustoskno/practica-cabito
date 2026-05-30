import {signupLocators, accountInformationLocators,addressInformationLocators} from "../maps/Map Locator";

export async function registerAccount(page: any,userData : {fullName: string, email: string}) {
    await signupLocators.signup_input_fullName(page).fill(userData.fullName);
    await signupLocators.signup_input_email(page).fill(userData.email);
    await signupLocators.btn_createAccount(page).click();
}

export async function fillAccountInformation(page: any, accountInformation : {Title: string, Password: string, "Date of birth": string[]}) {
    //console.log(accountInformation.Title);
    //console.log("Path Locator Title "+ accountInformationLocators.accountInformation_input_title(page, accountInformation.Title)); 
    await accountInformationLocators.accountInformation_input_title(page, accountInformation.Title).check();
    await accountInformationLocators.accountInformation_input_password(page).fill(accountInformation.Password);
    await accountInformationLocators.accountInformation_input_dob_day(page).selectOption(accountInformation["Date of birth"][0]);
    await accountInformationLocators.accountInformation_input_dob_month(page).selectOption(accountInformation["Date of birth"][1]);
    await accountInformationLocators.accountInformation_input_dob_year(page).selectOption(accountInformation["Date of birth"][2]);
}

export async function fillAddressInformation(page: any, addressInformation : {firstName: string, lastName: string, company: string, address: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string}) {
    await addressInformationLocators.addressInformation_input_firstName(page).fill(addressInformation.firstName);
    await addressInformationLocators.addressInformation_input_lastName(page).fill(addressInformation.lastName);
    await addressInformationLocators.addressInformation_input_company(page).fill(addressInformation.company);
    await addressInformationLocators.addressInformation_input_address(page).fill(addressInformation.address);
    await addressInformationLocators.addressInformation_input_address2(page).fill(addressInformation.address2);
    await addressInformationLocators.addressInformation_input_country(page).selectOption(addressInformation.country);
    await addressInformationLocators.addressInformation_input_state(page).fill(addressInformation.state);
    await addressInformationLocators.addressInformation_input_city(page).fill(addressInformation.city);
    await addressInformationLocators.addressInformation_input_zipcode(page).fill(addressInformation.zipcode);
    await addressInformationLocators.addressInformation_input_mobileNumber(page).fill(addressInformation.mobileNumber);
}
