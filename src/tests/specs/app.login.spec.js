import LoginPage from "../pageobjects/login.page.js";
import { expect } from "chai";

describe("Login", () => {
  it("Deve logar com credenciais válidas", async () => {
    await LoginPage.open();
    await LoginPage.login("teste@hotmail.com", "12345678");

    const msg = await browser.getAlertText();
    expect(msg).to.equal("Success\nYou are signed up!");

    await browser.acceptAlert();
  });
});
