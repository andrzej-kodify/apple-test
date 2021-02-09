import homePage from '../pages/home-page';
import macPage from '../pages/mac-page';
import macbookProPage from '../pages/macbook-pro-page';
import buyMacbookProPage from '../pages/shop/buy-macbook-pro-page';

fixture('Buy macbook');
// TODO define some constants for nav items etc.

for (const model of ['13', '16']) {
    test(`Choose macbook pro ${model}" model`, async browser => {
        await homePage.navigateTo();
        await browser
            .click(await homePage.globalNavigation.findItem('mac'))
            .click(await macPage.chapterNavigation.findItem(`macbook-pro-${model}`))
            .click(await macbookProPage.localNavigation.findItem('buy'));
        const bundleSelectionItem = await buyMacbookProPage.bundleSelection.findItem(`${model}inch`);
        await browser
            .expect(await bundleSelectionItem.isSelected())
            .ok('Model not selected correctly');
        await browser
            .debug();
    });
}