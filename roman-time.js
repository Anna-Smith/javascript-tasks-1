"use strict";

var hours = process.argv[2];
var minutes = process.argv[3];

var numbers = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    0: '-'
};

var ascii = {
    'I': [' _  ',
        '(_) ',
        '(_) ',
        '(_) ',
        '(_) ',
        '(_) ',
        '(_) ',
        '(_) '],

    'V': [' _           _  ',
        '(_)         (_) ',
        '(_)         (_) ',
        '(_)_       _(_) ',
        '  (_)     (_)   ',
        '   (_)   (_)    ',
        '    (_)_(_)     ',
        '      (_)       '],

    'X': [' _           _  ',
        '(_)_       _(_) ',
        '  (_)_   _(_)   ',
        '    (_)_(_)     ',
        '     _(_)_      ',
        '   _(_) (_)_    ',
        ' _(_)     (_)_  ',
        '(_)         (_) '],

    'L': ['_              ',
        '(_)             ',
        '(_)             ',
        '(_)             ',
        '(_)             ',
        '(_)             ',
        '(_) _  _  _  _  ',
        '(_)(_)(_)(_)(_) '],

    ':': ['               ',
        '     _  _     ',
        '    (_)(_)    ',
        '    (_)(_)    ',
        '     _  _     ',
        '    (_)(_)    ',
        '    (_)(_)    ',
        '              '],

    '-': ['              ',
        '              ',
        '              ',
        ' (_)(_)(_)(_) ',
        '              ',
        '              ',
        '              ',
        '              ']
};

function convertTime(number) {
    if (number in numbers) {
        return numbers[number];
    }
    return numbers[number[0]*10]+numbers[number[1]];
}

function isInteger(number) {
    return (number ^ 0) == number;
}

if (process.argv.length !== 4 || !isInteger(hours) || !isInteger(minutes) ||  hours > 23 || hours < 0 ||
    minutes > 59 || minutes < 0) {
    console.log("Incorrect input");
}
else {
    var result = convertTime(hours) + ':' + convertTime(minutes);
    console.log(result);
    for (var i = 0; i < 8; i++) {
        var line = '';
        for (var j = 0; j < result.length; j++) {
            line += ascii[result[j]][i];
        }
        console.log(line)
    }
}
