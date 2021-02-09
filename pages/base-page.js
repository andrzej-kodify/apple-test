import { Selector } from 'testcafe';
import { NavigationBar } from '../components/navigation-bar';

export class BasePage {
    constructor() {
        this.globalNavigation = new NavigationBar({
            contextSelector: '#ac-globalnav',
            itemsSelector: 'ul.ac-gn-list li a',
            findByAttribute: 'data-analytics-title',
        });
    }
}