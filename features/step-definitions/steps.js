import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';

const pages = {
    login: LoginPage
}
//steps for Login Page
Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});
When(/^I login with incorrect (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});
Then(/I should see error message$/, async () => {
    await LoginPage.messageError();
});
When(/I click forgot password, and input incorrect email (.+)$/, async (username) => {
    await LoginPage.forgotPassword(username)
});
Then(/I should see error when input incorrect email$/, async () => {
    await LoginPage.errorForgotPassword();
});
