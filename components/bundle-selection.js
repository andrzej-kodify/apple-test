import { t, Selector } from 'testcafe';

export class ModelItem extends Selector {
    constructor(selector) {
        super(selector);
        this.isSelected = async () => await this.getAttribute('aria-pressed') === 'true';
    }
}

export class ColorOption extends Selector {
    constructor(selector) {
        super(selector)
        this.friendlyName = this.selector.getAttribute('datacolor');
    }
}

export class BundleSelector {
    constructor(selector) {
        this.selector = selector;
        this.heading = this.selector.find('h3');
        this.specs = this.selector.find('.modelspecs');
        this.colors = this.selector.find('.as-colorselector-option');
        this.price = this.selector.find('[data-autom^="price-"]');
        this.addToCartButton = this.selector.find('button[type="submit"]');
    }

    async findColor (friendlyName) {
        return new ColorOption(this.colors.withAttribute('datacolor', friendlyName));
    }
}

export class BundleSelection {
    constructor() {
        this.selector = new Selector('bundle-selection');
        this.models = this.selector.find('fieldset button');
        this.bundleSelectors = this.selector.find('.as-bundleselection-modelactive .as-macbundle bundle-selector');        
    }

    async findModel (name) {
        return new ModelItem(this.models.withAttribute('data-autom', `filterButton-${name}`));
    }

    async getBundleSelectors () {
        const output = [];
        const bundleSelectorCount = await this.bundleSelectors.count;
        for (let cnt = 0; cnt < bundleSelectorCount; cnt++) {
            output.push(new BundleSelector(this.bundleSelectors.nth(cnt)));
        }
        return output;
    }
}
