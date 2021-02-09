import models from '../data/mac/models';
import homePage from '../pages/home-page';
import macPage from '../pages/mac-page';
import macbookProPage from '../pages/macbook-pro-page';
import buyMacbookPage from '../pages/shop/buy-macbook-page';
import currency from 'currency.js';

fixture('Buy a mac');

for (const model of Object.values(models)) {
    test(`Choose ${model.friendlyName} model`, async browser => {
        await homePage.navigateTo();
        await browser
            .click(await homePage.globalNavigation.findItem(model.globalNavRef))
            .click(await macPage.chapterNavigation.findItem(model.chapterNavRef))
            .click(await macbookProPage.localNavigation.findItem('buy'))
        if (model.bundleModelRef) {
            await browser
                .expect(buyMacbookPage.bundleSelection.models.exists)
                .ok();
            const modelItem = await buyMacbookPage.bundleSelection.findModel(model.bundleModelRef);
            await browser
                .expect(await modelItem.isSelected())
                .ok('Model not selected correctly');
        } else {
            await browser
                .expect(buyMacbookPage.bundleSelection.models.exists)
                .notOk();
        }
    });
}

test('Buy most expensive mac', async browser => {
    const model = models.pro16;
    await buyMacbookPage.navigateTo(model);
    const modelItem = await buyMacbookPage.bundleSelection.findModel(model.bundleModelRef);
    await browser
        .expect(await modelItem.isSelected())
        .ok('Model not selected correctly');
    const bundleSelectors = await buyMacbookPage.bundleSelection.getBundleSelectors();
    let mostExpensiveBundleSelector;
    let highestPrice = 0;
    for (const bundleSelector of bundleSelectors) {
        const currentPrice = currency(await bundleSelector.price.textContent);
        console.log({ highestPrice, currentPrice });
        if (highestPrice < currentPrice) { // TBD what if they're equal?
            highestPrice = currentPrice;
            mostExpensiveBundleSelector = bundleSelector;
        }
    }
    if (!mostExpensiveBundleSelector) {
        throw new Error('No suitable bundleSelector found');
    }
    await browser.click(mostExpensiveBundleSelector.addToCartButton);
    await browser.debug();
});