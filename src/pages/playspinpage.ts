import {Page,expect} from "@playwright/test"

let page: Page;

export default class PlayGame {
    private page: Page
    constructor(page: Page) {
    this.page = page

    }

    private Elements = {
        email: "//input[@name='username']",
        password: "//input[@name = 'password']",
        wonder_wheel: "//span[text()='Wonder Wheel']",
        spin: "//span[text()='spin']",
        allBttn: "//a[@class='user-nav-icon bc-i-promotions-3']"
    }

    async enterEmail(mail: string){
        await this.page.fill(this.Elements.email, mail);
    }

    async enterpwd(pwd: string){
        await this.page.fill(this.Elements.password, pwd);
    }

    async clickOnWonderWheel(){
        const link =  await this.page.locator(this.Elements.wonder_wheel)
       await expect(link).toBeVisible;
        await this.page.click(this.Elements.wonder_wheel);
    }

    async clickOnAllBttn(){
        const account1 =  await this.page.locator(this.Elements.allBttn)
       await expect(account1).toBeDisabled;
        await this.page.click(this.Elements.allBttn);
    }
    
    async expectedURL(){
        await this.page.goto('https://m.efbet.net/en/wonderwheel')
    }
}
