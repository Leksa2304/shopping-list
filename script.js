/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */


const input = document.querySelector('#input'); //поле ввода
const itemsСontainer = document.querySelector('.items'); //контейнер для пунктов


function newItem() {

    const inputText = input.value;

    const item = document.createElement('div');
    item.classList.add('items');
    item.textContent = inputText;
    item.addEventListener('click', function() {

        item.classList.toggle('done');
    });

    if (inputText != '') {

        itemsСontainer.prepend(item);
    }

    input.value = '';

};

function byEnter(event) {
    if (event.key == 'Enter') {
        newItem();
    }
}

input.addEventListener('keydown', byEnter);