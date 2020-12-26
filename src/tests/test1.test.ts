import CCalculator from '../CCalculator';

test('adds 1 + 2 to equal 3', () => {
    expect(CCalculator.getResultCal(1, '+', 2)).toBe(3);
});
test('1', () => {
    expect(CCalculator.getResultCal(10, '-', 2.5)).toBe(7.5);
});
test('2', () => {
    expect(CCalculator.getResultCal(1, '*', 2.5)).toBe(2.5);
});
test('3', () => {
    expect(CCalculator.getResultCal(5, '/', 2)).toBe(2.5);
});
test('4', () => {
    expect(CCalculator.getResultCal(3, '/', Infinity)).toBe(0);
});
test('5', () => {
    expect(CCalculator.getResultCal(0, '/', 3)).toBe(0);
});

test('test allow key 1', () => {
    expect(CCalculator.isAllowKeyInput('+')).toBe(true);
});
test('test allow key 2', () => {
    expect(CCalculator.isAllowKeyInput('?')).toBe(false);
});
test('test allow key 3', () => {
    expect(CCalculator.isAllowKeyInput('END')).toBe(false);
});
test('test allow key 4', () => {
    expect(CCalculator.isAllowKeyInput('3')).toBe(true);
});
test('test allow key 5', () => {
    expect(CCalculator.isAllowKeyInput('Back')).toBe(false);
});

test('test allow operation key 1', () => {
    expect(CCalculator.isAllowKeyInput('+')).toBe(true);
});
test('test allow operation key 2', () => {
    expect(CCalculator.isAllowKeyInput('/')).toBe(true);
});

test('test allow operation key 3', () => {
    expect(CCalculator.isAllowKeyInput('%')).toBe(false);
});
test('test allow operation key 4', () => {
    expect(CCalculator.isAllowKeyInput('_')).toBe(false);
});

export {};
