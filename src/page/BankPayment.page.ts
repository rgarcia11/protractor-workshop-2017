import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get bankPaymentMenu(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public goToBankPaymentMenu(): promise.Promise<void> {
    return this.bankPaymentMenu.click();
  }
}
