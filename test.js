// All errors are returned as 0 to not raise exceptions
function assert(condition) {
    if (!condition) {
        console.log(new Error("The result doesn't match" || 'Assertion failed'));
        return
    }
    console.log("Test passed");
}

assert(stringToPence("5") == 5);
assert(stringToPence("5.") == 500);
assert(stringToPence("96") == 96);
assert(stringToPence("187p") == 187);
assert(stringToPence("4p") == 4);
assert(stringToPence("1.25") == 125);
assert(stringToPence("£3") == 300);
assert(stringToPence("£20") == 2000);
assert(stringToPence("£2.34") == 234);
assert(stringToPence("£2p") == 200);
assert(stringToPence("£2.p") == 200);
assert(stringToPence("002.42") == 242);
assert(stringToPence("5.789") == 579);
assert(stringToPence("£2.7524896352") == 276);