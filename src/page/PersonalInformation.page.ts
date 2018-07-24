import { ElementFinder, $ } from 'protractor';

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

    //private profession(professionToFill: String): ElementFinder {
    //    return $(``);
    //}
    //
    //private get submit(): ElementFinder {
    //    return $('#submit');
    //}
    //

    public async fillForm(informationToFill: any) {
        await this.firstName.sendKeys(informationToFill.firstName);
        await this.lastName.sendKeys(informationToFill.lastName);
        await this.sex(informationToFill.sex).click();
        await this.experience(informationToFill.experience).click();
        //*await this.profession.sendKeys(informationToFill.profession);
        //*await this.tools.sendKeys(informationToFill.tools);
        //await this.continent.sendKeys(informationToFill.continent);
        //*await this.commands.sendKeys(informationToFill.commands);
    }
}