import tabBar from "./tab-bar.page.js";

class LoginPage {
  get inputEmail() {
    return $("~input-email");
  }
  get inputPassword() {
    return $("~input-password");
  }

  get inputConfirmPassword() {
    return $("~input-repeat-password");
  }

  get btnLogin() {
    return $("~button-LOGIN");
  }

  get btnSignUp() {
    return $("~button-SIGN UP");
  }

  get tabSignUp() {
    return $("~Sign up");
  }

  async open() {
    await tabBar.goToLogin();
    await this.inputEmail.waitForDisplayed({ timeout: 10000 });
  }

  async goToSignUp() {
    await this.tabSignUp.click();
    await this.inputEmail.waitForDisplayed({ timeout: 10000 });
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  async signUp(email, password) {
    await this.goToSignUp();
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.inputConfirmPassword.setValue(password);
    await this.btnSignUp.click();
  }
}

export default new LoginPage();
