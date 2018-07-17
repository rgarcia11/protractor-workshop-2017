import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get addressMenu(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToAddressMenu(): promise.Promise<void> {
    return this.addressMenu.click();
  }
}
