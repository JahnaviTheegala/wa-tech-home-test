import {Page,expect} from "@playwright/test"

let page: Page;

export default class LogOut{
    private page: Page
    constructor(page: Page) {
    this.page = page

}

private Elements= {
    accountIcon: "//i[contains(@class,'hdr-user-avatar-icon-bc bc-i-user')]",
    myProfile: "//span[text()='My Profile']",
    logout: "//span[text()[normalize-space()='Logout']]"
}

async clickOnAccountIcon(){
    const account =  await this.page.locator(this.Elements.accountIcon)
    await expect(account).toBeDisabled;
    await this.page.click(this.Elements.accountIcon)
}
async clickOnMyProfile(){
    const myprofile =  await this.page.locator(this.Elements.myProfile)
       await expect(myprofile).toBeDisabled;
    await this.page.click(this.Elements.myProfile)
}
async clickOnLogout(){
    const elemnt = await page.$(this.Elements.logout)
    await elemnt.scrollIntoViewIfNeeded()
    await page.waitForTimeout(8000);
    await this.page.click(this.Elements.logout)
}
}