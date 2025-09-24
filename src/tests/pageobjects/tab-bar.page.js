class TabBar {
  get home() {
    return $("~Home");
  }
  get login() {
    return $("~Login");
  }
  get forms() {
    return $("~Forms");
  }
  get webview() {
    return $("~Webview");
  }
  get swipe() {
    return $("~Swipe");
  }
  get drag() {
    return $("~Drag");
  }

  async goToLogin() {
    await this.login.click();
  }

  async goToForms() {
    await this.forms.click();
  }

  async goToWebview() {
    await this.webview.click();
  }

  async goToHome() {
    await this.home.click();
  }

  async goToSwipe() {
    await this.swipe.click();
  }

  async goToDrag() {
    await this.drag.click();
  }
}
export default new TabBar();
