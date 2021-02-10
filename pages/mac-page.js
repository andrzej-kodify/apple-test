import { t } from 'testcafe';
import config from 'config';
import BasePage from './base-page';
import NavigationBar from '../components/navigation-bar';

class MacPage extends BasePage {
    constructor() {
        super();
        this.chapterNavigation = new NavigationBar({
            contextSelector: '#chapternav',
            itemsSelector: 'ul.chapternav-items li',
            findByClass: 'chapternav-item-',
        });
    }

    // eslint-disable-next-line class-methods-use-this
    get url() {
        return `${config.get('baseUrl')}/mac`;
    }

    async navigateTo() {
        await t.navigateTo(this.url);
    }
}

export default new MacPage();
