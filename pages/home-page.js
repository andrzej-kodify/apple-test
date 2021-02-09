import { t } from 'testcafe';
import config from 'config';
import { BasePage } from './base-page';

class HomePage extends BasePage {
    get url() {
        return config.get('baseUrl');
    }

    async navigateTo() {
        await t.navigateTo(this.url);
    }
}

export default new HomePage();
