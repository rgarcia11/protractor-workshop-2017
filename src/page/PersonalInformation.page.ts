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

    private profession(professionToFill: String): ElementFinder {
        return $(`[name="profession"][value="${professionToFill}"]`);
    }

    private tool(toolToFill: String): ElementFinder {
        return $(`[name="tool"][value="${toolToFill}"]`);
    }

    //private continent(continent: String): ElementFinder {
    //    return $(`#continents`).filter();
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
        for (let professionToFill of informationToFill.profession) {
            await this.profession(professionToFill).click();
        }
        for (let toolToFill of informationToFill.tools) {
            await this.tool(toolToFill).click();
        }
        //await this.continent(informationToFill.continent).click();
        //*await this.commands.sendKeys(informationToFill.commands);
    }
}