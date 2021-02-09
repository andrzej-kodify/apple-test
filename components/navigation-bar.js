import { t, Selector } from 'testcafe';

export class NavigationBar extends Selector {
    // TODO support mobile
    constructor({ contextSelector, itemsSelector, findByAttribute, findByClass }) {
        super(contextSelector);
        this.items = this.find(itemsSelector);
        this.findItem = async name => {
            // TODO just temporary solution (as every solution in IT)
            if (findByAttribute) {
                return this.items.withAttribute(findByAttribute, name);
            }
            if (findByClass) {
                return this.items.filter(`.${findByClass}${name}`);
            }
        }
    }
}
