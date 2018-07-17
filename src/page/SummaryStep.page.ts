import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
  private get summaryMenu(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public goToSummaryMenu(): promise.Promise<void> {
    return this.summaryMenu.click();
  }
}
