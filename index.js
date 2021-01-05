const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto("http://localhost");
  await page.waitForSelector("input[name=username]");
  await page.$eval(
    "input[name=username]",
    (el) => (el.value = "admin@localhost.com")
  );
  await page.$eval("input[name=password]", (el) => (el.value = "password"));
  await page.click("input[type=submit]");

  await page.screenshot({ path: "screenshoot/dashboard.png" });

  expect(true).toBe(true);

  await browser.close();
})();
