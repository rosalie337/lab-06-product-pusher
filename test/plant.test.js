// IMPORT MODULES under test here:
import renderPlant from '../products/render-plants.js';

const test = QUnit.test;

QUnit.module('Render Plant');

test('renders a plant', assert => {
    // arrange
    const jade = {
        id: 'jade',
        name: 'Crassula ovata',
        image: 'jade.png',
        description: 'Jade—a popular houseplant that is native to South Africa—retains water in its round leaves',
        classification: 'Pigmyweeds',
        price: 20.00,
        origin: 'South Africa'
    };
    
    const expected = `<li class=\"Pigmyweeds\" title=\"Jade—a popular houseplant that is native to South Africa—retains water in its round leaves\"><img src=\"../assets/jade.png\" alt=\"Crassula ovataimage\"><p class=\"price\">$20.00<button value=\"undefined\">Add</button></p></li>`;

    // act
    const dom = renderPlant(jade);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});