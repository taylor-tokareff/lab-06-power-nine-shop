import { powerNine } from '../product-data.js';
import { createCardsLi } from '../utils.js';

const ul = document.querySelector('#product-list');

for (let card of powerNine) {
    console.log(card.name);

    const li = createCardsLi(card);
    ul.append(li);
}

