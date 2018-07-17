import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get shippingStepMenu(): ElementFinder {
    return $('#cgv');
  }

  public goToShippingMenu(): promise.Promise<void> {
    return this.shippingStepMenu.click();
  }
}
