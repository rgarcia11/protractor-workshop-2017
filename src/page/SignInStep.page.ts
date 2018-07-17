import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get signInMenu(): ElementFinder {
    return $('.cart_navigation span');
  }

  private get emailField(): ElementFinder {
    return $('#email');
  }

  private get passwordField(): ElementFinder {
    return $('#passwd');
  }

  private get submitLoginButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public goToSignInMenu(): promise.Promise<void> {
    return this.signInMenu.click();
  }

  public async fillSignInMenu(): Promise<void> {
    await this.emailField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    await this.submitLoginButton.click();
  }
}
