import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    //NOTE: elements collection
    get inputUsername () {return $('#InputUsername1');}
    get inputPassword () {return $('#InputPassword1');}
    get btnSubmit () {return $('button[type="submit"]');}
    get errorMessage() {return $('.subtitle.text-danger');}
    get forgotPasswordLink() {return $('a[href="/reset-password"]');}
    get inputEmail () {return $('#email');}
    get errorIncorrectEmail() {return $('.text-danger');}


    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async messageError () {
        await this.errorMessage.waitForExist({ timeout: 5000 });
        await expect(this.errorMessage).toBeDisplayed();
    }
    async forgotPassword (username) {
        await this.forgotPasswordLink.click();
        await this.inputEmail.setValue(username);
        await this.btnSubmit.click();
    }
    async errorForgotPassword () {
        await this.errorIncorrectEmail.waitForExist({ timeout: 5000 });
        await expect(this.errorIncorrectEmail).toBeDisplayed();
    }
    open () {
        return super.open('login');
    }
}

export default new LoginPage();
