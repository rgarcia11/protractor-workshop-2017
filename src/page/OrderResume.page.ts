import {$, ElementFinder, promise} from 'protractor';

export class OrderResumePage {
    private get orderResume(): ElementFinder {
        return $('#cart_navigation > button > span');
    }

    private get orderResumeStatus(): ElementFinder {
        return $('#center_column > div > p > strong');
    }
    
    public goToOrderResume(): promise.Promise<void> {
        return this.orderResume.click();
    }

    public getOrderResumeStatus(): promise.Promise<String> {
        return this.orderResumeStatus.getText();
    }
}