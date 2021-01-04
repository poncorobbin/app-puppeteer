const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  await page.goto("http://idcomm.kanvasindonesia.com/");
  await page.$eval(
    "input[name=username]",
    (el) => (el.value = "admin@localhost.com")
  );
  await page.$eval("input[name=password]", (el) => (el.value = "password"));
  await page.click("input[type=submit]");

  await page.screenshot({ path: "dashboard.png" });

  await browser.close();
})();
