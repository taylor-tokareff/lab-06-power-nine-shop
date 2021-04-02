import { getCart } from '../local-storage-utils.js';
import { powerNine } from '../product-data.js';
//import { cart } from './cart-data.js';
import { createCartRow, createTotalRow, findByID, } from '../utils.js';

const cart = getCart();


const table = document.querySelector('.cart-table');
console.log(table);

for (let cartItem of cart) {
    const matchingPowerNine = findByID(powerNine, cartItem.id);
    const tr = createCartRow(cartItem, matchingPowerNine);

    table.append(tr);
}

const totalRow = createTotalRow(cart, powerNine);

table.append(totalRow);

const button = document.querySelector('#place-order');
console.log(button);
if (cart.length > 0) button.disabled = false;
else button.disabled = true;

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart));

    localStorage.clear();

    window.location = '/';

});