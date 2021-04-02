import { powerNine } from './product-data.js';
import { addItemToCart } from './local-storage-utils.js';


export function createCardsLi(powerNine) {

    const li = document.createElement('li');

    li.classList.add('powerNine');
    li.style.backgroundColor = powerNine.color;

    const name = document.createElement('p');

    name.classList.add('name');
    name.textContent = powerNine.name;

    const type = document.createElement('p');

    type.classList.add('type');
    type.textContent = powerNine.type;

    const color = document.createElement('p');

    color.classList.add('color');
    color.textContent = powerNine.color;

    const cmc = document.createElement('p');

    cmc.classList.add('CMC');
    cmc.textContent = powerNine.cmc;

    const edition = document.createElement('p');

    edition.classList.add('Edition');
    edition.textContent = powerNine.edition;

    const image = document.createElement('img');

    image.src = powerNine.image;

    const price = document.createElement('p');

    price.textContent = powerNine.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const button = document.createElement('button');

    button.textContent = 'Add to cart';

    button.addEventListener('click', () => {
        addItemToCart(powerNine.id);

    });



    li.append(name, type, color, cmc, edition, image, price, button);

    return li;


}

export function findByID(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(price, quantity) {
    return price * quantity;
}

// export function calcOrderTotal(cart, powerNine) {
//     let counter = 0;

//     for (let card of cart) {
//         const itemPrice = findByID(powerNine, card.id).price;
//         const cardTotal = calcItemTotal(itemPrice, card.quantity);
//         counter += cardTotal;
//     }
//     return counter;

// }

export function createCartRow(cartItem, card) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = card.name;
    const tdQuantity = document.createElement('td');
    tdQuantity.textContent = cartItem.quantity;
    const tdPrice = document.createElement('td');
    tdPrice.textContent = card.price;

    tr.append(tdName, tdQuantity, tdPrice);
    return tr;
}

export function createTotalRow(cartArray, powerNineArray) {
    let sum = 0;
    for (let cartItem of cartArray) {
        const matchingpowerNine = findByID(powerNineArray, cartItem.id);
        const lineItem = matchingpowerNine.price * cartItem.quantity;
        sum = sum + lineItem;
    }

    return sum;

}