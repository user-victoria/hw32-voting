/*
    Створити програму для відображення результатів голосування. З наступними умовами:
    1. Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
    2. Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
    3. При натисканні на смайл - під ним змінюється значення лічильника.
    4. Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
*/

// об'єкт для всіх "li"
const refs = {
    allLiElem: document.querySelectorAll('li'),
}

// метод для кожної "li"
refs.allLiElem.forEach(function (everyButton) {
    everyButton.addEventListener('click', countSmiles);
});

function countSmiles(event) {
    // лічильник буде працювати тільки коли користувач натискатиме на певну кнопку
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }

    // натискаємо на певний "li"
    let currentOption = event.currentTarget;

    // отримуємо "span"
    let countElement = currentOption.querySelector('span');

    // створюється змінна яка перетворює текст із "span" на число
    let count = Number(countElement.innerHTML);

    // збільшується лічильник
    count++;

    // додаються числа до "span"
    countElement.innerHTML = count;
}