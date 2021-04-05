// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { calcItemTotal, findByID, createCartRow, createTotalRow } from '../utils.js';
//import { cart } from '../Cart/cart-data.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('take in an array and an id and return an item by that id', (expect) => {

    const array = [
        {
            id: 1,
            name: 'whatever'
        },

        {
            id: 2,
            name: 'wrong'
        }
    ];

    const id = 1;

    const expected = {
        id: 1,
        name: 'whatever'
    };

    const actual = findByID(array, id);

    expect.deepEqual(actual, expected);
});


test('calculate items sub-total', (expect) => {

    const expected = 420;

    const actual = calcItemTotal(42, 10);

    expect.equal(actual, expected);

});

test('add together all subtotals', (expect) => {
    const testCartItems = [{
        id: 1,
        quantity: 3
    },

    {
        id: 2,
        quantity: 1
    },
    ];

    const allItemInfo = [
        {
            id: 1,
            name: 'Mox Pearl',
            type: 'Artifact',
            color: 'Colorless',
            cmc: 0,
            edition: 'Alpha',
            image: '../Img/mox-pearl.jpg',
            price: 25000
        },

        {
            id: 2,
            name: 'Mox Ruby',
            type: 'Artifact',
            color: 'Colorless',
            cmc: 0,
            edition: 'Alpha',
            image: '../Img/mox-ruby.jpg',
            price: 30000
        }];

    const expected = 105000;
    const actual = createTotalRow(testCartItems, allItemInfo);

    expect.equal(actual, expected);
});

test('inject data to create rows', (expect) => {
    const expected = `<tr><td>Mox Pearl</td><td>3</td><td>25000</td></tr>`;
    const actual = createCartRow(
        {
            id: 1,
            quantity: 3
        },
        {
            id: 1,
            name: 'Mox Pearl',
            type: 'Artifact',
            color: 'Colorless',
            cmc: 0,
            edition: 'Alpha',
            image: '../Img/mox-pearl.jpg',
            price: 25000
        }
    );



    expect.equal(actual.outerHTML, expected);
});

// test('adding all subtotals in cart'), (expect) => {

//     const expected = 160000;

//     const actual = calcOrderTotal(cart);

//     expect.equal(actual, expected);

// };