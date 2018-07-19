import { $, ElementFinder, browser } from 'protractor';

export class IFramePage {
    private get iFrame1(): ElementFinder {
        return $('#IF1');
    }

    public async getIFrame1Height() {
        const height = await this.iFrame1.getCssValue('height'); 
        return await Number(height.replace(/[^0-9.]/g, ''));
    }

    public async changeIFrame1Height(height: number, id : string) {
        return await browser.executeScript(`document.getElementById("${id}").style.height = "${height}px";`);
    }
}