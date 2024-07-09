import {Page,expect} from "@playwright/test"

let page: Page;

export default class LoginsPage {
    private page: Page
    constructor(page: Page) {
    this.page = page
 }

private Elements ={
    signin: "(//button[contains(@class,'btn s-small')]//span)[1]",
    email: "//input[@name='username']",
    password: "//input[@name = 'password']",
    checkbx: "//i[@class = 'checkbox-control-icon-bc bc-i-checked']",
    signin_bttn: "//div[@class='entrance-form-action-item-bc right']//button[1]",
    accountIcon: "//i[contains(@class,'hdr-user-avatar-icon-bc bc-i-user')]",
    verifyBttn: "//a[@class='btn account-verified-button']",
    Forgotpwd: "//p[text()[normalize-space()='Forgot your password?']]",
    errormsg: "//div[text()='Invalid Username or Password']"

    
    }

   
    async clickOnSignin(){
        const signin =  await this.page.locator(this.Elements.signin)
       await expect(signin).toBeVisible();
        await this.page.click(this.Elements.signin)
    }

    async enterEmail(mail: string){
        await this.page.fill(this.Elements.email, mail)
    }

    async enterpwd(pwd: string){
        await this.page.fill(this.Elements.password, pwd)
    }

    async clickOnCheckbox(){
       const checkbox =  await this.page.locator(this.Elements.checkbx)
       await expect(checkbox).toBeDisabled;
        await this.page.click(this.Elements.checkbx)
    }

    async clickSignin_bttn(){
        const signinbttn =  await this.page.locator(this.Elements.signin_bttn)
       await expect(signinbttn).toBeDisabled;
        await this.page.click(this.Elements.signin_bttn)
    }
    async clickOnAccountIcon(){
        const account =  await this.page.locator(this.Elements.accountIcon)
       await expect(account).toBeDisabled;
        await this.page.click(this.Elements.accountIcon)
    }
    async verifyButton(){
        const textmessage = await this.page.locator(this.Elements.verifyBttn).textContent();
        console.log('Username: ' + textmessage);
    }
    async veriyErrorMssg(){
       const errormsg =  await this.page.locator(this.Elements.errormsg)
       await expect(errormsg).toBeVisible();
    }

    


}









