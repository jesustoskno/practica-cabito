import {expect, test as base} from '@playwright/test';
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import {RegisterPage} from '../pages/RegisterPage';
import path from 'path';

dotenv.config({path:'./.env'}); // Load .env file
   const email = process.env.EMAIL as string;
   const password = process.env.PASSWORD as string;
   const baseURL = process.env.base_URL as string;
   const firstName = process.env.FIRST_NAME as string;
   const lastName = process.env.LAST_NAME as string;
   const fullName = process.env.FULL_NAME as string;

const test = base.extend<{registerPage: RegisterPage}>({
    registerPage: async ({page}, use) => {
        const registerPage = new RegisterPage(page);
        await use(registerPage);
    }
});

test('TC001 | Register User Test', async ({page, registerPage}) => {
    await page.goto(baseURL);
    //Verify that home page is visible successfully
    await expect(registerPage.homePageText,"Verify that home page is visible successfully").toBeVisible();
    //Click on 'Signup / Login' button
    await registerPage.signupLoginButton.click();
    //Verify 'New User Signup!' is visible
    await expect(registerPage.newUserSignupText,"New User Signup, needs to be visible").toBeVisible();
    //Enter name and email address
    await registerPage.registerAccount({
        fullName, 
        email
    });
    //Verify that 'Enter Account Information!' is visible
    await expect(registerPage.enterAccountInformationText,"Enter Account Information, needs to be visible").toBeVisible();
    //Fill details: Title, Name, Email, Password, Date of birth
    await registerPage.fillAccountInformation({
            title: 'Mr', 
            password: password, 
            "Date of birth": ['1', 'January', '2000']
        });

    //Select checkbox 'Sign up for our newsletter!'
    await registerPage.newsletterCheckbox.check();
    //Select checkbox 'Receive special offers from our partners!'
    await registerPage.specialOffersCheckBox.check();
    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await registerPage.fillAddressInformation({
        firstName : firstName,
        lastName: lastName,
        company: 'Test Company',
        address: '123 Test Street',
        address2: 'Apt 4',
        country: 'United States',
        state: 'California',
        city: 'Los Angeles',
        zipcode: '90001',
        mobileNumber: '1234567890'
    });

    //Click 'Create Account button'
    await registerPage.createAccountButton.click();
    //Verify that 'ACCOUNT CREATED!' is visible
    await expect(registerPage.accountCreatedText,"Account Created, needs to be visible").toBeVisible();
    //Click 'Continue' button
    await registerPage.continueButton.click();
    //Verify that 'Logged in as username' is visible
    await expect(registerPage.loggedInAsUsernameText(fullName),`Logged in as ${fullName}, needs to be visible`).toBeVisible();
    //Click 'Delete Account' button
    await registerPage.deleteAccountButton.click();
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(registerPage.accountDeletedText,"Account Deleted, needs to be visible").toBeVisible();
    await registerPage.continueButton.click();
});
