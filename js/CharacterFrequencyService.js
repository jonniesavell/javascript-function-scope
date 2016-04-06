var api = (function() {

    // private stuff (not present in this example)

    return {

        characterFrequency: function(str) {
            var result = {};

            return str.split('').reduce(
                function(dictionary, currentValue) {

                    var count = 1,
                        previousEntry = dictionary[currentValue];

                    if (previousEntry !== null && previousEntry !== undefined) {
                        count = previousEntry + 1;
                    }

                    dictionary[currentValue] = count;

                    return dictionary;
                },
                result
            );
        }
    };
})();
