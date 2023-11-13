function task1() {
    let str = '';
    for (let i = 1; i <= 9; i++) {
        str += i;
    }
    document.getElementById('console1').innerText = 'Результат: ' + str;
}

function task2() {
    let str = 'ahb acb aeb aeeb adcb axeb';
    let regex = /a.b/g;
    let matches = str.match(regex);
    document.getElementById('console1').innerText = 'Исходная строка: ' + str + '\nРезультат: ' + matches.join(', ');
}

function task3() {
    let str = '23 2+3 2++3 2+++3 345 567';
    let regex = /2\++3/g;
    let matches = str.match(regex);
    document.getElementById('console2').innerText = 'Исходная строка: ' + str + '\nРезультат: ' + matches.join(', ');
}

function task4() {
    let str = 'ahb acb aeb aeeb adcb axeb';
    let regex = /a[a-g]b/g;
    let matches = str.match(regex);
    document.getElementById('console2').innerText = 'Исходная строка: ' + str + '\nРезультат: ' + matches.join(', ');
}

function task5() {
    let str = '23 2+3 2++3 2+++3 345 567';
    let regex = /2\++3/g;
    let matches = str.match(regex);
    document.getElementById('console2').innerText = 'Исходная строка: ' + str + '\nРезультат: ' + matches.join(', ');
}