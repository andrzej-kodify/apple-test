export default {
    air: {
        friendlyName: 'macbook air',
        globalNavRef: 'mac',
        chapterNavRef: 'macbook-air',
        buyUrlPath: '/macbook-air',
    },
    pro13: {
        friendlyName: 'macbook pro 13"',
        globalNavRef: 'mac',
        chapterNavRef: 'macbook-pro-13',
        bundleModelRef: '13inch',
        buyUrlPath: '/macbook-pro/13-inch',
    },
    pro16: {
        friendlyName: 'macbook pro 16"',
        globalNavRef: 'mac',
        chapterNavRef: 'macbook-pro-16',
        bundleModelRef: '16inch',
        buyUrlPath: '/macbook-pro/16-inch',
        customizeUrlPath: '/macbook-pro/16-inch-space-gray-2.3ghz-8-core-processor-1tb',
        configurationOptionGroups: {
            Processor: [
                { description: '2.3GHz 8‑core 9th‑generation Intel Core i9 processor, Turbo Boost up to 4.8GHz', priceDelta: 0 },
                { description: '2.4GHz 8‑core 9th‑generation Intel Core i9 processor, Turbo Boost up to 5.0GHz', priceDelta: 200 },
            ],
            Memory: [
                { description: '16GB 2666MHz DDR4 memory', priceDelta: 0 },
                { description: '32GB 2666MHz DDR4 memory', priceDelta: 400 },
                { description: '64GB 2666MHz DDR4 memory', priceDelta: 800 },
            ],
            Graphics: [
                { description: 'AMD Radeon Pro 5500M with 4GB of GDDR6 memory', priceDelta: 0 },
                { description: 'AMD Radeon Pro 5500M with 8GB of GDDR6 memory', priceDelta: 100 },
                { description: 'AMD Radeon Pro 5600M with 8GB of HBM2 memory', priceDelta: 700 },
            ],
            Storage: [
                { description: '1TB SSD storage', priceDelta: 0 },
                { description: '2TB SSD storage', priceDelta: 400 },
                { description: '4TB SSD storage', priceDelta: 1000 },
                { description: '8TB SSD storage', priceDelta: 2200 },
            ],
            'Keyboard Language': [],
            'Final Cut Pro': [
                { description: 'None', priceDelta: 0 },
                { description: 'Final Cut Pro', priceDelta: 299.99 },
            ],
            'Logic Pro': [
                { description: 'None', priceDelta: 0 },
                { description: 'Logic Pro', priceDelta: 199.99 },
            ],
        },
    },
    // etc.
};
