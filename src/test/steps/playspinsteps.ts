import {Given, When, Then} from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import {pageFixture} from "../../hooks/pageFixture"
import PlayGame from "../../pages/playspinpage";

let playgame: PlayGame;


  Then('Enter username as {string} and password as {string}', async function (mail, pwd) {
    playgame = new PlayGame(pageFixture.page)
    await playgame.enterEmail(mail)
    await playgame.enterpwd(pwd)
    
  });

  Then('click on Wonder Wheel game', {timeout:10000}, async function () {
    await playgame.clickOnWonderWheel();
  });


  Then('Click on All button', {timeout:10000}, async function () {
    await playgame.clickOnAllBttn();
  })