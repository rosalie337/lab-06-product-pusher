import createRow, { newFunction, total } from '../cart/render-cart-items.js';

const test = QUnit.test;

QUnit.module('create row for items in shopping cart');

test('renders a row', assert => {
    // arrange
    const jade = {
        id: 'jade',
        quantity: 2,
        price: 10.00,
        total: 20.00 
    };
    
    const expected = `<tr><td class=\"align-left\">jade</td><td>2</td><td>10</td><td class=\"line-item-total\">$20.00</td></tr>`;

    // act
    const dom = createRow(jade);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

test('test New Function ', assert => {
    // arrange
    const jade = {
        id: 'jade',
        quantity: 2,
        price: 10.00,
        total: 20.00 
    };
    
    const expected = 20.00;

    // act
    const actual = newFunction(jade);
    
    // assert
    assert.equal(actual, expected);
});

test('test total function ', assert => { 
    const plants = [{
    // arrange
        id: 'jade',
        quantity: 2,
        price: 10.00,
        total: 20.00 
    },{
        id: 'fiddle-leaf fig',
        quantity: 1,
        price: 10.00,
        total: 10.00 
    },{
        id: 'guiana chestnut',
        quantity: 3,
        price: 10.00,
        total: 30.00 
    }];

    const expected = 60.00;

    // act
    const actual = total(plants);
    
    // assert
    assert.equal(actual, expected);
});