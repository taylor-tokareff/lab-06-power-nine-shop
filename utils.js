

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

    li.append(name, type, color, cmc, edition, image, price, button);
    console.log(li)
    return li;


}

export function findByID(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}