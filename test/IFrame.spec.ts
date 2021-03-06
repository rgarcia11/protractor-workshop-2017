import { browser } from 'protractor';
import { IFramePage } from '../src/page/IFrame.page';

describe('Changes IFrame height', () => {
  const iFramePage: IFramePage = new IFramePage();
  it('Should open the webpage', async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('Should change height', async () => {
    await iFramePage.changeIFrame1Height(800, 'IF1');
    await expect(iFramePage.getIFrame1Height()).toBe(800);
    await iFramePage.changeIFrame1Height(100, 'IF1');
    await expect(iFramePage.getIFrame1Height()).toBe(100);
  });

  it('should have a title', async () => {
    await expect(iFramePage.getH1SampleTitle()).toBe('Sample Iframe page');
    await iFramePage.switchToIFrame1();
    await expect(iFramePage.getH1SampleTitle()).toBe('Practice Automation Form');
    await iFramePage.switchToPage();
    await expect(iFramePage.getH1SampleTitle()).toBe('Sample Iframe page');
  });
});
