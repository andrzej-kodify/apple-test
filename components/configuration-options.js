import { Selector } from 'testcafe';
import makeIterator from '../utils/make-iterator';

export class ConfigurationOption extends Selector {
    constructor(selector) {
        super(selector);
        this.priceDelta = this.find('.as-optiontile-pricedelta');
    }
}

export class ConfigurationOptionGroup {
    constructor(selector) {
        this.selector = selector;
        this.heading = this.selector.find('h3');
    }

    async getConfigurationOptions () {
        return makeIterator(this.selector.find('.form-element'), ConfigurationOption);
    }
}
