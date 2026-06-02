import {expect, test} from '@playwright/test';
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import {registerUserPage,expected_assertions} from '../pages/RegisterPage';
import path from 'path';

dotenv.config({path:'./.env'}); // Load .env file
   const email = process.env.EMAIL as string;
   const password = process.env.PASSWORD as string;
   //const short_password = process.env.SHORT_PASSWORD as string;
   const baseURL = process.env.base_URL as string;
   const firstName = process.env.FIRST_NAME as string;
   const lastName = process.env.LAST_NAME as string;
   const fullName = process.env.FULL_NAME as string;

test('TC001-Register User | Register User Test', async ({page}) => {

    const registerUserSpec = new registerUserPage (page);
    const expected_assertionsSpec = new expected_assertions(page);

    await page.goto(baseURL);
    //Verify that home page is visible successfully
    await expected_assertionsSpec.homePage_Visible()
    //Click on 'Signup / Login' button
    await registerUserSpec.click_signup_login_Button()
    //Verify 'New User Signup!' is visible
    await expected_assertionsSpec.new_user_Signup()
    //Enter name and email address
    await registerUserSpec.registerAccount({
        fullName, 
        email
    });
    //Verify that 'Enter Account Information!' is visible
    await expected_assertionsSpec.enter_account_Information()
    //Fill details: Title, Name, Email, Password, Date of birth
    await registerUserSpec.fillAccountInformation({
            Title: 'Mr', 
            Password: password, 
            "Date of birth": ['1', 'January', '2000']
        });

    //Select checkbox 'Sign up for our newsletter!'
    await registerUserSpec.click_signup_newsletter_CheckBox()
    //Select checkbox 'Receive special offers from our partners!'
    await registerUserSpec.click_special_offers_CheckBox()
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
    await registerUserSpec.click_create_account_Button()
    //Verify that 'ACCOUNT CREATED!' is visible
    await expected_assertionsSpec.account_Created()
    //Click 'Continue' button
    await registerUserSpec.click_continue_Button()
    //Verify that 'Logged in as username' is visible
    await expected_assertionsSpec.logged_Username(fullName)
    //Click 'Delete Account' button
    await registerUserSpec.click_delete_account_Button()
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expected_assertionsSpec.account_Deleted()
    await registerUserSpec.click_continue_Button()
});