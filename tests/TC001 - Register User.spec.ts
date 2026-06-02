import {expect, test} from '@playwright/test';
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import {RegisterUserPage} from '../pages/register.page';
import path from 'path';

dotenv.config({path:'./.env'}); // Load .env file
   const email = process.env.EMAIL as string;
   const password = process.env.PASSWORD as string;
   const baseURL = process.env.base_URL as string;
   const firstName = process.env.FIRST_NAME as string;
   const lastName = process.env.LAST_NAME as string;
   const fullName = process.env.FULL_NAME as string;

test('TC001 | Register User Test', async ({page}) => {

    const registerUserSpec = new RegisterUserPage (page);

    await page.goto(baseURL);
    //Verify that home page is visible successfully
    await expect(page.getByText('Home'),"Verify that home page is visible successfully").toBeVisible();
    //Click on 'Signup / Login' button
    await registerUserSpec.clickSignupLoginButton()
    //Verify 'New User Signup!' is visible
    await expect(page.getByText('New User Signup!'),"New User Signup, needs to be visible").toBeVisible();
    //Enter name and email address
    await registerUserSpec.registerAccount({
        fullName, 
        email
    });
    //Verify that 'Enter Account Information!' is visible
    await expect(page.getByText('Enter Account Information'),"Enter Account Information, needs to be visible").toBeVisible();
    //Fill details: Title, Name, Email, Password, Date of birth
    await registerUserSpec.fillAccountInformation({
            title: 'Mr', 
            password: password, 
            "Date of birth": ['1', 'January', '2000']
        });

    //Select checkbox 'Sign up for our newsletter!'
    await registerUserSpec.clickSignupNewsletterCheckBox()
    //Select checkbox 'Receive special offers from our partners!'
    await registerUserSpec.clickSpecialOffersCheckBox()
    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await registerUserSpec.fillAddressInformation({
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
    await registerUserSpec.clickCreateAccountButton()
    //Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.getByText('Account Created!'),"Account Created, needs to be visible").toBeVisible();
    //Click 'Continue' button
    await registerUserSpec.clickContinueButton()
    //Verify that 'Logged in as username' is visible
    await expect(page.getByText(`Logged in as ${fullName}`),`Logged in as ${fullName}, needs to be visible`).toBeVisible();
    //Click 'Delete Account' button
    await registerUserSpec.clickDeleteAccountButton()
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.getByText('Account Deleted!'),"Account Deleted, needs to be visible").toBeVisible();
    await registerUserSpec.clickContinueButton()
});