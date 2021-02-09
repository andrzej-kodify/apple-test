/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import currency from 'currency.js';
import models from '../data/mac/models';
import homePage from '../pages/home-page';
import macPage from '../pages/mac-page';
import macbookProPage from '../pages/macbook-pro-page';
import buyMacbookPage from '../pages/shop/buy-macbook-page';
import buyMacbookCustomizePage from '../pages/shop/buy-macbook-customize-page';

fixture('Buy a mac');

for (const model of Object.values(models)) {
    test(`Choose ${model.friendlyName} model`, async (browser) => {
        await homePage.navigateTo();
        await browser
            .click(await homePage.globalNavigation.findItem(model.globalNavRef))
            .click(await macPage.chapterNavigation.findItem(model.chapterNavRef))
            .click(await macbookProPage.localNavigation.findItem('buy'));
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

test('Buy most expensive macbook pro 16"', async (browser) => {
    const model = models.pro16;
    await buyMacbookPage.navigateTo(model);
    const modelItem = await buyMacbookPage.bundleSelection.findModel(model.bundleModelRef);
    await browser
        .expect(await modelItem.isSelected())
        .ok('Model not selected correctly');
    const bundleSelectors = await buyMacbookPage.bundleSelection.getBundleSelectors();
    let mostExpensiveBundleSelector;
    let highestPrice = currency(0);
    for (const bundleSelector of bundleSelectors) {
    // eslint-disable-next-line no-await-in-loop
        const currentPrice = currency(await bundleSelector.price.textContent);
        if (highestPrice.intValue < currentPrice.intValue) { // TBD what if they're equal?
            highestPrice = currentPrice;
            mostExpensiveBundleSelector = bundleSelector;
        }
    }
    if (!mostExpensiveBundleSelector) {
        throw new Error('No suitable bundleSelector found');
    }
    await browser.click(mostExpensiveBundleSelector.addToCartButton);
    await browser
        .expect(buyMacbookCustomizePage.totalPrice.exists)
        .ok()
        .expect(currency(await buyMacbookCustomizePage.totalPrice.textContent))
        .eql(highestPrice);
    const configurationOptionGroups = await buyMacbookCustomizePage.getConfigurationOptionGroups();
    let currentTotalPrice = highestPrice;
    for (const configurationOptionGroup of configurationOptionGroups) {
        const configurationOptions = await configurationOptionGroup.getConfigurationOptions();
        let mostExpensiveConfigurationOption;
        let highestPriceDelta = currency(0);
        for (const configurationOption of configurationOptions) {
            if (!await configurationOption.priceDelta.exists) {
                continue;
            }
            const currentPriceDelta = currency(await configurationOption.priceDelta.textContent);
            if (highestPriceDelta.intValue < currentPriceDelta.intValue) {
                highestPriceDelta = currentPriceDelta;
                mostExpensiveConfigurationOption = configurationOption;
                await browser.hover(mostExpensiveConfigurationOption);
            }
        }
        if (!mostExpensiveConfigurationOption) {
            continue;
        }
        await browser.click(mostExpensiveConfigurationOption);
        currentTotalPrice = currentTotalPrice.add(highestPriceDelta);
        await browser
            .expect(currency(await buyMacbookCustomizePage.totalPrice.textContent))
            .eql(currentTotalPrice);
    }
    await browser.click(buyMacbookCustomizePage.addToCartButton);
    // TODO for some reason running this as an automated test shopping bag is not updated :shrug:
});
