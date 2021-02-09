/* eslint-disable no-plusplus */
const makeIterator = async (selector, OfType) => {
    let nextIndex = 0;
    const count = await selector.count;
    return {
        next() {
            return nextIndex < count
                ? {
                    value: OfType
                        ? new OfType(selector.nth(nextIndex++))
                        : selector.nth(nextIndex++),
                    done: false,
                }
                : { done: true };
        },
        [Symbol.iterator]() {
            return {
                next: () => this.next(),
            };
        },
        length: count,
    };
};

export default makeIterator;
