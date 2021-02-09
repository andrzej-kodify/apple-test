const makeIterator = async (selector, ofType) => {
    let nextIndex = 0;
    const count = await selector.count;
    return {
        next() {
            return nextIndex < count
                ? { value: ofType ? new ofType(selector.nth(nextIndex++)) : selector.nth(nextIndex++), done: false }
                : { done: true };
        },
        [Symbol.iterator]() {
            return {
                next: () => this.next()
            };
        },
        length: count
    };
};

export default makeIterator;
