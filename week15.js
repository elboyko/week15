//Задание 1 ****
// Выведите числа от 1 до 10 в консоль
for (let i = 1; i <= 10; i++) {
   console.log(i);
}


//Задание 2 ****
// Выведите чётные числа от 1 до 20 в консоль
for (let i = 1; i <= 20; i++) {
   if (i % 2 == 0) {
      console.log(i);
   }
}

//Задание 3 ****
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i > 0; i--) {
   console.log(i);
}



//Задание 4 ****
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
   let number = 5;
   console.log(`${i}*5 = ${number * i}`);
}


//Задание 5****
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let count = 0;
for (i = 1; i <= 100; i++) {
   count = count + i;
}
console.log(count);

//Задание 6 ****
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
}

//Задание 7****
// Выведите сумму всех элементов массива используя цикл for

const numbers = [1, 2, 3, 4, 5];
let resultNum = 0;
for (let i = 0; i < numbers.length; i++) {
   resultNum = resultNum + numbers[i]
}
console.log(resultNum);



//Задание 8****
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";

let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
   let cuteAnimals = animals[i] + " - прекрасное животное";
   console.log(cuteAnimals);
}



//Задание 9 ****
// Выведите символы в строке в консоль
const str = 'Hello';
for (letter of str) {
   console.log(letter);
}

//Задание 10 ****
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (elem of array) {
   console.log(elem);
}



//Задание 11****
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
const res1 = sentences.join(' ');
console.log(res1);
const res2 = res1.split(' ');
for (let i = 0; i < res2.length; i++) {
   console.log(res2[i]);
}



//Задание 12****
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7

let resultSum = 0;
for (let num of numbers) {
   resultSum = resultSum + num;
}
console.log(resultSum);


//Задание 13****
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
for (i = 0; i < list.length; i++) {
   console.log(list[i].length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр

// какой масcив words???


//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

//Задание 16 ****
// Объедините все строки массива в одну строку с пробелами между ними

const words = ['Hello', 'world', '!'];
let newWord = words.join(' ');
console.log(newWord);



//Задание 17 ****
// Выведите числа от 1 до 10 в консоль используя цикл while
let num = 1;
while (num <= 10) {
   console.log(num);
   num++;
}



//Задание 18 ****
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
let num1 = 10;
while (num1 > 0) {
   console.log(num1);
   num1--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];

let allPositive = true;

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
// do {
//    console.log(random);
// } while (random[i] > 0)


//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
let j = 1;
do {

   console.log(j);
   j++
}
while (j < 100 && j % 3 !== 0)





//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100




//Задание 23 ****
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
let allHfour = document.querySelectorAll('h4');
console.log(allHfour);
function changeColor() {
   for (all of allHfour) {
      all.classList.add('blue');
   }
}
changeColor()



//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

