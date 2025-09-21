const {By, Builder, Browser} = require('selenium-webdriver');
const assert = require("assert");

(async function firstTest() {
  let driver;

  try {

     driver = await new Builder().forBrowser(Browser.CHROME).build();

     await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

     } catch (errorAuto) {
     console.log(errorAuto)
   } finally {
     await driver.quit();
  }
}())
