const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const assert = require('assert')
const webdriver = require('selenium-webdriver');

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

// SETUP FIREFOX DRIVER 
// const firefox = require('geckodriver');
// const {By, Builder} = require('selenium-webdriver');
// let driver = new Builder()
//          .forBrowser('firefox')
//          .build();


Given('I visit ultima school webpage', {timeout: 15 * 1000}, async () => {    
    
    await driver.get("https://www.ultima.school/")
    
    
          });

When('i go into "cursos"', async () => {
    await driver.manage().window().setRect({ width: 1014, height: 728 })
    await driver.findElement(By.css(".hp-cursos__title")).click()
    
          });

Then('I should see "Escolha o curso que mais combina com você"', async () => {
    
    assert(await driver.findElement(By.css(".hp-cursos__title")).getText() == "Escolha o curso que mais combina com você")
    
    //===============

    await driver.quit()
    
          });