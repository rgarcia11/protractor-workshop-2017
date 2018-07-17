import {$, ElementFinder, promise} from 'protractor';

export class ProductAddedModalPage {
    private get addedItemMenu(): ElementFinder {
        return $('#add_to_cart > button > span');
    }
    
    public goToAddedItemMenu(): promise.Promise<void> {
        return this.addedItemMenu.click();
    }
}