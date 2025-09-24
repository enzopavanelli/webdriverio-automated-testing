import LoginPage from "../pageobjects/login.page.js";
import { expect } from "chai";

describe("Sign Up", () => {
  it("Deve registrar com credenciais válidas", async () => {
    await LoginPage.open();
    await LoginPage.signUp("teste@hotmail.com", "12345678", "12345678");
  });
});
