function listApply(list, f) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        result.push(f(list[i]));
    }
    return result;
}

function cadToUsd(cad) {
    return cad * 0.73;
}

function cadsToUsds(list) {
    return listApply(list, cadToUsd);
}


//every
function every(list, logic) {
    return list.reduce((acc, element) => acc && element, true)
}

// assert
function assert(value, message) {
    if (!value) {
        throw new Error(message || "Assertion failed");
    }
}

function assertEquals(actual, expected, message) {
    if (actual != expected) {
        throw new Error(message || `Expected ${expected}, but got ${actual}`);
    }
}

function assertListEquals(actual, expected, message) {
    if (!Array.isArray(actual) || !Array.isArray(expected)) {
        throw new Error(message || `Expected both arguments to be arrays`);
    }
    if (actual.length !== expected.length) {
        throw new Error(
            message ||
            `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
        );
    }
    for (let i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i]) {
            throw new Error(
                message ||
                `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
            );
        }
    }
}


// Tests
assertListEquals(
    listApply([1, 2, 3], (x) => x + 1),
    [2, 3, 4],
    "listApply test failed"
);

assertEquals(cadToUsd(1), 0.73, "cadToUsd test failed");

assertListEquals(
    cadsToUsds([1, 2, 3]),
    [0.73, 1.46, 2.19],
    "cadsToUsds test failed"
);

const isOdd = (x) => x % 2 === 1;
assert(
    every([1, 3, 5], isOdd),
    "every test failed (case 1)"
);

assert(
    !every([1, 2, 3], isOdd),
    "every test failed (case 2)"
);