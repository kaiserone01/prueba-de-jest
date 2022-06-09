const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

///////////////////

test("One euro should be 1.206 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2; 
    
     expect(fromEuroToDollar(3.5)).toBe(expected); 
})


test("One dollar should be 127.9 yen", function(){

    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(4)

    const expected = 4 * 127.9; 

     expect(fromDollarToYen(4)).toBe(511.6);
})

test("One yen should be 0.006384 pounds", function(){

    const { fromYenToPound } = require('./app.js')

    const pounds = fromYenToPound(35)
    const expected = 35 * 0.006384

    expect(fromYenToPound(35)).toBe(expected)

})
