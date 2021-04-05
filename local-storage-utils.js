import { findByID } from './utils.js';


const CART = 'CART';

export function getCart() {
    const stringyCart = localStorage.getItem(CART);
    const parsedCart = JSON.parse(stringyCart);

    if (parsedCart) {
        return parsedCart;
    }
    else {
        return [];
    }
}

export function setCart(parsedCart) {
    const stringyCart = JSON.stringify(parsedCart);

    localStorage.setItem(CART, stringyCart);
}

export function addItemToCart(productId) {
    const cart = getCart();

    const matchingItem = findByID(cart, productId);

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        const item = {
            id: productId,
            quantity: 1
        };

        cart.push(item);
    }

    setCart(cart);
}