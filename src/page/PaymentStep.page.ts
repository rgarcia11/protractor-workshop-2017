import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get paymentMenu(): ElementFinder {
    return $('#form > p > button > span');
  }

  public goToPaymentMenu(): promise.Promise<void> {
    return this.paymentMenu.click();
  }
}
