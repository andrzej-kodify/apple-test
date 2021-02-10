import NavigationBar from '../components/navigation-bar';

export default class BasePage {
    constructor() {
        this.globalNavigation = new NavigationBar({
            contextSelector: '#ac-globalnav',
            itemsSelector: 'ul.ac-gn-list li a',
            findByAttribute: 'data-analytics-title',
        });
    }

    // eslint-disable-next-line class-methods-use-this
    get url() {
        throw new Error('Not implemented');
    }

    // eslint-disable-next-line class-methods-use-this
    async navigateTo() {
        throw new Error('Not implemented');
    }
}
