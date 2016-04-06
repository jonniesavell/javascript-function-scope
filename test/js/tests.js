var api;
var QUnit;

QUnit.test(
    'trivial case: characterFrequency executed on an empty string produces an empty dictionary',
    function(assert) {

        var input = '',
            expectedResult = {},
            actualResult = api.characterFrequency(input);

        assert.deepEqual(actualResult, expectedResult);
    }
);

QUnit.test(
    'trivial case: characterFrequency executed on a one char string produces a singleton dictionary',
    function(assert) {

        var input = 'p',
            expectedResult = { p: 1 },
            actualResult = api.characterFrequency(input);

        assert.deepEqual(actualResult, expectedResult);
    }
);

QUnit.test(
    'characterFrequency executed on a three char string produces a dictionary with 3 elements',
    function(assert) {

        var input = 'pqr',
            expectedResult = { p: 1, q: 1, r: 1 },
            actualResult = api.characterFrequency(input);

        assert.deepEqual(actualResult, expectedResult);
    }
);

QUnit.test(
    'characterFrequency executed on a three char string Part II',
    function(assert) {

        var input = 'ppq',
            expectedResult = { p: 2, q: 1 },
            actualResult = api.characterFrequency(input);

        assert.deepEqual(actualResult, expectedResult);
    }
);

QUnit.test(
    'characterFrequency executed on a three char string Part III',
    function(assert) {

        var input = 'ppp',
            expectedResult = { p: 3 },
            actualResult = api.characterFrequency(input);

        assert.deepEqual(actualResult, expectedResult);
    }
);
