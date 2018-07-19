import { $, ElementFinder, promise} from 'protractor';

export class ProductDetailPage {
  private get tShirtDetailMenu(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');

  }

  public goToTShirtDetailMenu(): promise.Promise<void> {
    return this.tShirtDetailMenu.click();
  }
}
