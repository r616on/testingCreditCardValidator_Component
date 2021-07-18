import puppetteer from "puppeteer";

jest.setTimeout(30000); // default puppeteer timeout
describe("cart form", () => {
  let browser = null;
  let page = null;
  const baseUrl = "http://localhost:9000";
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: true, // show gui
      slowMo: 0,
      devtools: false, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  // test code here (next page)
  describe("Valid cart", () => {
    test("Valid cart and valid selector buttom", async () => {
      await page.goto(baseUrl);
      const widget = await page.$(".credit-cart-validiti");
      const input = await widget.$(".input-row__input");
      await input.type("5480158084261928");
      await page.waitForSelector(".input-row__button.valid");
    });
  });
});
