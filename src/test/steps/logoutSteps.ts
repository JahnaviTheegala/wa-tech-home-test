import {Given, When, Then} from "@cucumber/cucumber"
import {Page,expect} from "@playwright/test"
import {pageFixture} from "../../hooks/pageFixture"
import LogOut from "../../pages/logoutPage"

let logout: LogOut



Then('Click on Account', {timeout:10000}, async function(){
logout = new LogOut(pageFixture.page)
await logout.clickOnAccountIcon();
})

Then('Click on My Profile', {timeout:10000}, async function(){
await logout.clickOnMyProfile()
})

Then('click on Logout', {timeout:10000}, async function(){
await logout.clickOnLogout
})