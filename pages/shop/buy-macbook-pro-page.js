import { t } from 'testcafe';
import config from 'config';
import { BasePage } from '../base-page';
import { BundleSelection } from '../../components/bundle-selection';

class BuyMacbookProPage extends BasePage {
    constructor() {
        super();
        this.bundleSelection = new BundleSelection();
    }

    get url() {
        return `${config.get('baseUrl')}/shop/buy-mac/macbook-pro`;
    }

    async navigateTo(model) {
        await t.navigateTo(model ? `${this.url}/${model}` : this.url);
    }
}

export default new BuyMacbookProPage();
