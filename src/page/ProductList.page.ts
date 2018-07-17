import { $, ElementFinder, promise } from 'protractor';

export class MenuContentPage {
  private get tShirtMenu(): ElementFinder {
    return $('·block_top_menu > ul >li:nth-child(3) > a');
  }

  public goToTShirtMenu(): promise.Promise<void> {
    return this.tShirtMenu.click();
  }
}
