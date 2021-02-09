import { t } from 'testcafe';
import config from 'config';
import { BasePage } from './base-page';
import { NavigationBar } from '../components/navigation-bar';

class MacbookProPage extends BasePage {
    constructor() {
        super();
        this.localNavigation = new NavigationBar({
            contextSelector: '#ac-localnav',
            itemsSelector: 'a',
            findByAttribute: 'data-analytics-title'
        });
    }

    get url() {
        return `${config.get('baseUrl')}/macbook-pro-16`;
    }

    async navigateTo() {
        await t.navigateTo(this.url);
    }
}

export default new MacbookProPage();
