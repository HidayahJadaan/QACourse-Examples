const { summ, greeting, isEven, Animals } = require('./utils');


test('summ- should return 2+3 = 5', () => {

    // Testing Numbers
    const result = summ(2, 3);
    expect(result).toBe(5);

    // Floating Numbers
    // expect(summ(2.4,1.02)).toBe(6);

    expect(summ(2.4, 1.02)).not.toBe(6);
    // expect(summ(2.4,1.02)).toBeGreaterThanOrEqual(6);
    expect(summ(2.4, 1.02)).toBeLessThanOrEqual(6);
    expect(summ(0.102, 0.3)).toBeCloseTo(0.4);


})
// ========================================
// Testing Strings
test('greeting - should return Hello Hedaia', () => {

    const result = greeting('Hedaia');

    expect(result).toBe('Hello Hedaia')
    // Regular Expression
    expect(result).toMatch('Hello Hedaia')

})

// ========================================
// Testing Truthnes

test('isEven - shoulde return true for 4', () => {
    result = isEven(4);
    expect(result).toBeTruthy();
    expect(isEven(5)).toBeFalsy();
})

// ========================================
// Testing Arrays

test('Animals - shoulde return true for cat', () => {

    expect(Animals).toContain('cat');


})

// ================================

// describe('summ', ()=>{

//     it('should return 2+3 = 5', ()=>{

//     // Testing Numbers
//     const  result = summ(2,3);
//     expect(result).toBe(5);

//     // Floating Numbers
//     // expect(summ(2.4,1.02)).toBe(6);

//     expect(summ(2.4,1.02)).not.toBe(6);
//     // expect(summ(2.4,1.02)).toBeGreaterThanOrEqual(6);
//     expect(summ(2.4,1.02)).toBeLessThanOrEqual(6);
//     expect(summ(0.102, 0.3)).toBeCloseTo(0.4);


// })

// });

// ==============================================
