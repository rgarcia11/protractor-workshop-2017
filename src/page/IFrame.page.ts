import { $, ElementFinder, browser, promise } from 'protractor';

export class IFramePage {
    private get iFrame1(): ElementFinder {
        return $('#IF1');
    }

    private get h1SampleTitle(): ElementFinder {
        return $('#content h1');
    }

    public async getIFrame1Height() {
        const height = await this.iFrame1.getCssValue('height'); 
        return await Number(height.replace(/[^0-9.]/g, ''));
    }

    public async changeIFrame1Height(height: number, id : string) {
        return await browser.executeScript(`document.getElementById("${id}").style.height = "${height}px";`);
    }

    public async getH1SampleTitle() {
        return await this.h1SampleTitle.getText();
    }

    public switchToIFrame1(): promise.Promise<void> {
        return browser.switchTo().frame(this.iFrame1.getWebElement());
    }

    public switchToPage(): promise.Promise<void> {
        return browser.switchTo().defaultContent();
    }
}