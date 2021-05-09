require("chromedriver");
const webdriver = require("selenium-webdriver"),
  By = webdriver.By;

const driver = new webdriver.Builder().forBrowser("chrome").build();
driver.get("http://www.google.com").then(function () {
  driver
    .findElement(By.name("q"))
    .sendKeys("Computer\n")
    .then(function () {
      driver.findElements(By.id("searchform")).then(function (header) {
        var result = header.length >= 1 ? "Test passed" : "Test Failed";
        console.log(result);
        driver.quit();
      });
    });
});
