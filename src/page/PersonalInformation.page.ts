import { ElementFinder, element, by, browser } from 'protractor';
import { resolve } from 'path';
import { DownloadService } from '../service/Download.service';
import * as remote from 'selenium-webdriver/remote';

export class PersonalInformationPage {
  downloadService: DownloadService = new DownloadService();

  private get firstName(): ElementFinder {
    return element(by.name("firstname"));
  }

  private get lastName(): ElementFinder {
    return element(by.name("lastname"));
  }

  private sex(sexToFill: String): ElementFinder {
    return element(by.css(`[value="${sexToFill}"]`));
  }

  private experience(expToFill: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${expToFill}"`));
  }

  private profession(professionToFill: String): ElementFinder {
    return element(by.css(`[name="profession"][value="${professionToFill}"]`));
  }

  private tool(toolToFill: String): ElementFinder {
    return element(by.css(`[name="tool"][value="${toolToFill}"]`));
  }

  private continent(): ElementFinder {
    return element(by.css(`#continents`));
  }

  private command(): ElementFinder {
    return element(by.css(`#selenium_commands`));
  }

  private get submit(): ElementFinder {
    return element(by.css('#submit'));
  }

  private get chooseFile(): ElementFinder {
    return element(by.css(`#photo`));
  }

  private downloadLink(linkText): ElementFinder {
    return element(by.linkText(linkText));
  }

  private async fillForm(informationToFill: any) {
    await this.firstName.sendKeys(informationToFill.firstName);
    await this.lastName.sendKeys(informationToFill.lastName);
    await this.sex(informationToFill.sex).click();
    await this.experience(informationToFill.experience).click();
    for (const professionToFill of informationToFill.profession) {
      await this.profession(professionToFill).click();
    }
    for (const toolToFill of informationToFill.tools) {
      await this.tool(toolToFill).click();
    }
    await this.continent().sendKeys(informationToFill.continent);
    for (const commandToFill of informationToFill.tools) {
      await this.command().sendKeys(commandToFill);
    }
  }

  private async uploadProfilePicture(path) {
    browser.setFileDetector(new remote.FileDetector());
    await this.chooseFile.sendKeys(resolve(__dirname, path));
  }

  private async download(linkText, filename) {
    const link = await this.downloadLink(linkText).getAttribute('href');
    return await this.downloadService.downloadFile(link, filename);
  }

  public async submitForm(informationToFill: any) {
    await this.fillForm(informationToFill);
    await this.uploadProfilePicture(informationToFill.picture);
    await this.download(informationToFill.downloadFile, informationToFill.downloadLocation);
    await this.submit.click();
  }
}
