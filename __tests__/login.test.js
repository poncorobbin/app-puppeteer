describe("Test for Demo", () => {
  beforeEach(async () => {
    await jestPuppeteer.resetBrowser();
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    await page.setViewport({ width: 1920, height: 1080 });
  });

  afterEach(async () => {
    await page.goto("http://idcomm.kanvasindonesia.com/logout");
  });

  test("Successs Login", async () => {
    await page.waitForSelector("input[name=username]");

    await page.$eval(
      "input[name=username]",
      (el) => (el.value = "admin@localhost.com")
    );
    await page.$eval("input[name=password]", (el) => (el.value = "password"));
    await page.click("input[type=submit]");

    await page.waitForSelector("h2");
    const title = await page.title();

    await page.screenshot({ path: "screenshoot/testLoginSuccess.png" });

    expect(title).toBe("IDCOMM - Dashboard");
  });

  test("Failed Login", async () => {
    await page.waitForSelector("input[name=username]");

    await page.$eval(
      "input[name=username]",
      (el) => (el.value = "admin@localhost.com")
    );
    // type wrong password
    await page.$eval("input[name=password]", (el) => (el.value = "ppassword"));
    await page.click("input[type=submit]");

    const title = await page.title();

    await page.screenshot({ path: "screenshoot/testLoginFailed.png" });

    expect(title).toBe("IDCOMM - Dashboard");
  });
});
