import { t as browser } from 'testcafe';
import config from 'config';
import BasePage from '../base-page';
import { BundleSelection } from '../../components/bundle-selection';

class BuyMacbookPage extends BasePage {
    constructor() {
        super();
        this.bundleSelection = new BundleSelection();
    }

    // eslint-disable-next-line class-methods-use-this
    get url() {
        return `${config.get('baseUrl')}/shop/buy-mac`;
    }

    async navigateTo({ buyUrlPath }) {
        if (!buyUrlPath) {
            throw new Error('buyUrlPath is mandatory');
        }
        await browser.navigateTo(`${this.url}${buyUrlPath}`);
    }
}

export default new BuyMacbookPage();
