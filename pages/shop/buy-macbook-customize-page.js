import { t, Selector } from 'testcafe';
import { BasePage } from '../base-page';
import { ConfigurationOptionGroup } from '../../components/configuration-options';
import makeIterator from '../../utils/make-iterator';

class BuyMacbookCustomizePage extends BasePage {
    constructor() {
        super();
        this.configurationSelectionArea = new Selector('.as-configuration-selectionarea');
        this.totalPrice = new Selector('.current_price .as-price-acinstallmentterms');
        this.addToCartButton = new Selector('[data-autom="addToCart"] button');
    }

    async getConfigurationOptionGroups () {
        return makeIterator(this.configurationSelectionArea.find('.as-configuration-optiongroup'), ConfigurationOptionGroup);
    }
}

export default new BuyMacbookCustomizePage();
