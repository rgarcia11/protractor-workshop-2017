import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page/PersonalInformation.page';
import { IFramePage } from '../src/page/IFrame.page';

describe('Opening a browser page', () => {
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
  const iFramePage: IFramePage = new IFramePage();
  it('should open', async () => {
    await browser.get('http://toolsqa.com/automation-practice-form');
  });

  it('should have a title', async () => {
    await expect(iFramePage.getH1SampleTitle()).toBe('Practice Automation Form');
  });

  it('should fill the form', async () => {
    await personalInformationPage.fillForm({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester', 'Manual Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    });
    await browser.sleep(5000);
  });
});
