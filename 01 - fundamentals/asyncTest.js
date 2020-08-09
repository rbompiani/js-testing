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

test('sum adds numbers', async () => {
    const result = sum(3, 7);
    const expected = 10;
    await expect(result).toBe(expected);
}
);

test('sub subtracts numbers', async () => {
    const result = subtract(7, 3);
    const expected = 4;
    await expect(result).toBe(expected);
});

async function test(title, callback) {
    try {
        await callback()
        console.error(`✔ ${title}`)
    }
    catch (error) {
        console.error(`X ${title}`)
        console.error(error)
    }
}

