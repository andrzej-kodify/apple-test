import { t, Selector } from 'testcafe';

export class BundleSelectionItem extends Selector {
    constructor(selector) {
        super(selector);
        this.isSelected = async () => await this.getAttribute('aria-pressed') === 'true';
    }
}

export class BundleSelection extends Selector {
    constructor() {
        super('bundle-selection');
        this.items = this.find('fieldset button');
        this.findItem = async name => new BundleSelectionItem(this.items.withAttribute('data-autom', `filterButton-${name}`));
    }
}
