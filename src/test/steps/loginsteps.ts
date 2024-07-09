import {Given, When, Then} from "@cucumber/cucumber"

import {pageFixture} from "../../hooks/pageFixture"
import Loginspage from "../../pages/loginpag"
import {Page, expect } from "@playwright/test";

let logpage: Loginspage; 
let page: Page


Given('User navigates to the application', {timeout:10000}, async function () {
    logpage = new Loginspage(pageFixture.page)
    await pageFixture.page.goto(process.env.BASEURL);
    
  });

  Then('Click on Signin button', {timeout:10000}, async function () {
    await logpage.clickOnSignin();
  });

  Then('User enters email as {string} and password as {string}', {timeout:10000}, async function (mail, pwd) {
    await logpage.enterEmail(mail);
    await logpage.enterpwd(pwd)
  });

  Then('Click on checkbox', {timeout:10000}, async function () {
    await logpage.clickOnCheckbox();
  });

  When('User clicks Signin button', {timeout:10000}, async function () {
    await logpage.clickSignin_bttn();
  });

  Then('Login should be Successful', {timeout:10000}, async function () {
    await logpage.verifyButton
  });

  When('Login should fail', {timeout:10000}, async function (){
    await logpage.veriyErrorMssg
  })