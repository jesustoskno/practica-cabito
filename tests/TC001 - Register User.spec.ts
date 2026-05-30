import {expect, test} from '@playwright/test';
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
import { fillAccountInformation, registerAccount, fillAddressInformation } from '../pages/TC001 - Pages';
import path from 'path';
import { signupLocators } from '../maps/Map Locator';

dotenv.config({path:'./.env'}); // Load .env file
   const email = process.env.EMAIL as string;
   const password = process.env.PASSWORD as string;
   //const short_password = process.env.SHORT_PASSWORD as string;
   const baseURL = process.env.base_URL as string;
   const firstName = process.env.FIRST_NAME as string;
   const lastName = process.env.LAST_NAME as string;
   const fullName = process.env.FULL_NAME as string;

test('TC001-Register User | Register User Test', async ({page}) => {
    //Navigate to url 'http://automationexercise.com'
    await page.goto(baseURL);
    //Wait until page finish request
    //await page.waitForLoadState('networkidle');
    //Verify that home page is visible successfully
    await expect(page.getByText('Home'),"Verify that home page is visible successfully").toBeVisible();
    //Click on 'Signup / Login' button
    await page.getByText('Signup / Login').click();
    //Verify 'New User Signup!' is visible
    await expect(page.getByText('New User Signup!'),"New User Signup, needs to be visible").toBeVisible();
    //Enter name and email address
    await registerAccount(page, {
        fullName, 
        email
    });
    //Verify that 'Enter Account Information!' is visible
    await expect(page.getByText('Enter Account Information'),"Enter Account Information, needs to be visible").toBeVisible();
    //Fill details: Title, Name, Email, Password, Date of birth
    await fillAccountInformation(page, {
            Title: 'Mr', 
            Password: password, 
            "Date of birth": ['1', 'January', '2000']
        });

    //Select checkbox 'Sign up for our newsletter!'
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    //Select checkbox 'Receive special offers from our partners!'
    await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    await fillAddressInformation(page, {
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
    await page.getByRole('button', { name: 'Create Account' }).click();

    //Verify that 'ACCOUNT CREATED!' is visible
    await expect(page.getByText('Account Created!'),"Account Created, needs to be visible").toBeVisible();
    //Click 'Continue' button
    await page.getByRole('link', { name: 'Continue' }).click();
    //Verify that 'Logged in as username' is visible
    await expect(page.getByText(`Logged in as ${fullName}`),`Logged in as ${fullName}, needs to be visible`).toBeVisible();
    //Click 'Delete Account' button
    await page.getByRole('link', { name: 'Delete Account' }).click();
    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await expect(page.getByText('Account Deleted!'),"Account Deleted, needs to be visible").toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();
});