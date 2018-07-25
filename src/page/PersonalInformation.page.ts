import { ElementFinder, $ } from 'protractor';
import { resolve } from 'path';

export class PersonalInformationPage {
  private get firstName(): ElementFinder {
    return $(`[name="firstname"]`);
  }

  private get lastName(): ElementFinder {
    return $(`[name="lastname"]`);
  }

  private sex(sexToFill: String): ElementFinder {
    return $(`[name="sex"][value="${sexToFill}"]`);
  }

  private experience(expToFill: number): ElementFinder {
    return $(`[name="exp"][value="${expToFill}"`);
  }

  private profession(professionToFill: String): ElementFinder {
    return $(`[name="profession"][value="${professionToFill}"]`);
  }

  private tool(toolToFill: String): ElementFinder {
    return $(`[name="tool"][value="${toolToFill}"]`);
  }

  private continent(): ElementFinder {
    return $(`#continents`);
  }

  private command(): ElementFinder {
    return $(`#selenium_commands`);
  }

  private get submit(): ElementFinder {
    return $('#submit');
  }

  private get chooseFile(): ElementFinder {
    return $(`#photo`)
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

  private async uploadProfilePicture(path){
    await this.chooseFile.sendKeys(resolve(__dirname, path));
  }

  public async submitForm(informationToFill: any) {
    await this.fillForm(informationToFill);
    await this.uploadProfilePicture(informationToFill.picture);
    await this.submit.click();
  }
}
