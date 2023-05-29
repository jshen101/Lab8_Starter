// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber valid', () => {
    expect(functions.isPhoneNumber('123 456-7890')).toBe(true);
});

test('isPhoneNumber invalid', () => {
    expect(functions.isPhoneNumber('12')).toBe(false);
});

test('isPhoneNumber valid', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber invalid', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('isEmail valid', () => {
    expect(functions.isEmail('jis033@ucsd.edu')).toBe(true);
});

test('isEmail invalid', () => {
    expect(functions.isEmail('.edu')).toBe(false);
});

test('isEmail valid', () => {
    expect(functions.isEmail('123@ucsd.edu')).toBe(true);
});

test('isEmail invalid', () => {
    expect(functions.isEmail('jis033@.edu')).toBe(false);
});

test('isStrongPassword valid', () => {
    expect(functions.isStrongPassword('a1234567890123')).toBe(true);
});

test('isStrongPassword invalid', () => {
    expect(functions.isStrongPassword('abc123456789012345')).toBe(false);
});

test('isStrongPassword valid', () => {
    expect(functions.isStrongPassword('a123456789012')).toBe(true);
});

test('isStrongPassword invalid', () => {
    expect(functions.isStrongPassword('1234567890')).toBe(false);
});

test('isDate valid', () => {
    expect(functions.isDate('1/1/2023')).toBe(true);
});

test('isDate invalid', () => {
    expect(functions.isDate('11/23')).toBe(false);
});

test('isDate valid', () => {
    expect(functions.isDate('11/11/2023')).toBe(true);
});

test('isDate invalid', () => {
    expect(functions.isDate('123/23')).toBe(false);
});

test('isHexColor valid', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
});

test('isHexColor invalid', () => {
    expect(functions.isHexColor('12z')).toBe(false);
});

test('isHexColor valid', () => {
    expect(functions.isHexColor('ab9')).toBe(true);
});

test('isHexColor invalid', () => {
    expect(functions.isHexColor('12345678')).toBe(false);
});