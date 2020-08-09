const sum = (a, b) => a - b;
const subtract = (a, b) => a - b

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        }
    }
}

test('sum adds numbers', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected);
}
);

test('sub subtracts numbers', () => {
    const result = subtract(7, 3);
    const expected = 4;
    expect(result).toBe(expected);
});

function test(title, callback) {
    try {
        callback()
        console.error(`✔ ${title}`)
    }
    catch (error) {
        console.error(`X ${title}`)
        console.error(error)
    }
}

