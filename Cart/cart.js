import { getCart } from '../local-storage-utils.js';
import { powerNine } from '../product-data.js';
//import { cart } from './cart-data.js';
import { createCartRow, createTotalRow, findByID, } from '../utils.js';

const cart = getCart();


const table = document.querySelector('.cart-table');
console.log(table);

for (let cartItem of cart) {
    const matchingpowerNine = findByID(powerNine, cartItem.id);
    const tr = createCartRow(cartItem, matchingpowerNine);

    table.append(tr);
}

const totalRow = createTotalRow(cart, powerNine);

table.append(totalRow);
