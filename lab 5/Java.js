// Задание 1
document.getElementById('task1').addEventListener('click', function() {
    let array = [];
    for (let i = 1; i <= 10; i++) {
        array.push(i.toString().repeat(i));
    }
    console.log(array);
    document.getElementById('console').textContent = array;
});

// Задание 11
document.getElementById('task11').addEventListener('click', function() {
    let lang = 'ru'; // Поменяйте значение переменной lang для тестирования
    let daysOfWeek = [];
    if (lang === 'ru') {
        daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    } else if (lang === 'en') {
        daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
    console.log(daysOfWeek);
    document.getElementById('console').textContent = daysOfWeek;
});

// Задание 21
document.getElementById('task21').addEventListener('click', function() {
    var x = prompt("Введите значение x ", "0");
    var y = prompt("Введите значение y ", "0");
    var z = prompt("Введите значение z ", "0");
    var t = prompt("Введите значение t ", "0");
    const numbers = [x, y, z, t,];
    
    function descendingSort(arr) {
        return arr.sort((a, b) => b - a);
    }
    
    const sortedNumbers = descendingSort(numbers);
    console.log(sortedNumbers);
    document.getElementById('console').textContent = sortedNumbers;
});

// Задание 31
document.getElementById('task31').addEventListener('click', function() {
    var x = prompt("Введите значение x ", );
    var y = prompt("Введите значение y ", );
    var z = prompt("Введите значение z ", );

    const strings = ['x', 'y', 'z',];
    
    function caseInsensitiveSort(arr) {
        return arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    }
    
    const sortedStrings = caseInsensitiveSort(strings);
    console.log(sortedStrings);
    document.getElementById('console').textContent = sortedStrings;
});
function exercise1() {
    const lastDigit = 2; // Замените на последнюю цифру вашего номера задания
    if (lastDigit === 1) {
        // Упражнение 1
        // Добавьте код для выполнения упражнения 1 здесь
    } else if (lastDigit === 2) {
        const inputNumber = parseInt(prompt("Введите простое число:"));
        const result = findNextPrime(inputNumber);
        console.log(result);
        document.getElementById('console').textContent = result;
    }
}

// Функция для упражнения 11
function exercise11() {
    const lastDigit = 2; // Замените на последнюю цифру вашего номера задания
    if (lastDigit === 1) {
        // Упражнение 1
    
    } else if (lastDigit === 2) {
        const inputNumber = parseInt(prompt("Введите натуральное число:"));
        const result = canBeRepresentedAsSquareOfPrime(inputNumber);
        console.log(result);
        document.getElementById('console').textContent = result;
    }
}

// Функция для проверки, является ли число простым
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Функция для упражнения 2
function findNextPrime(number) {
    if (number <= 1) return 2;

    while (true) {
        number++;
        if (isPrime(number)) {
            return number;
        }
    }
}

// Функция для упражнения 11
function canBeRepresentedAsSquareOfPrime(number) {
    if (number <= 0) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % (i * i) === 0 && isPrime(i)) {
            return true;
        }
    }

    return false;
}

document.getElementById('exercise1').addEventListener('click', exercise1);
document.getElementById('exercise11').addEventListener('click', exercise11);