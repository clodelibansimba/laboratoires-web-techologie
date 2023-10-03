function checkConfirm() {
    var result = window.confirm("Нажмите 'OK' или 'Отмена'");
    if (result) {
        alert("Вы нажали 'OK'");
    } else {
        alert("Вы нажали 'Отмена'");
    }
}

function promptName() {
    var name = window.prompt("Введите вашу фамилию:");
    if (name) {
        alert("Привет, " + name + "!");
    }else{
        alert("Вы не указали имя");
    }
}

function promptInfo() {
    var name = window.prompt("Введите ваше имя:");
    var age = window.prompt("Введите ваш возраст:");
    var mood = window.prompt("Введите ваше настроение:");
    document.write("Здравствуй, " + name + "<br>");
    document.write("Тебе " + age + " лет<br>");
    document.write("И у тебя " + mood + "!<br>");
    document.write("Всё верно, не так ли?!<br>");
    
}

function convertAndWrite() {
    var x = prompt("Введите значение x ", "0");
    var y = prompt("Введите значение y ", "0.0");
    var integerX = parseInt(x);
    var floatY = parseFloat(y);
    var result = integerX + floatY;
    document.write("Результат: " + result);
}

function getUserData() {
    var firstName = prompt("Введите имя; сюда");
    var lastName = prompt("Введите фамилию");
    var age = prompt("Введите возраст");
    alert("В следующем году вам будет " + (parseInt(age) + 1));
}

function getParagraphText() {
    var id = prompt("Введите ID абзаца:");
    var paragraph = document.getElementById(id);
    if (paragraph) {
        alert(paragraph.innerHTML);
    } else {
        alert("Абзац с указанным ID не найден.");
    }
}

function changeParagraphText() {
    var id = prompt("Введите ID абзаца для изменения текста:");
    var newText = prompt("Введите новый текст для абзаца:");
    var paragraph = document.getElementById(id);
    if (paragraph) {
        paragraph.innerHTML = newText;
        alert("Текст абзаца успешно изменен.");
    } else {
        alert("Абзац с указанным ID не найден.");
    }
}



function exo1() {
    var min = parseInt(prompt("Введите число от 0 до 59:"));
    if (min >= 0 && min <= 59) {
        if (min >= 0 && min <= 14) {
            alert("Число попадает в первую четверть часа.");
        } else if (min >= 15 && min <= 29) {
            alert("Число попадает во вторую четверть часа.");
        } else if (min >= 30 && min <= 44) {
            alert("Число попадает в третью четверть часа.");
        } else {
            alert("Число попадает в четвертую четверть часа.");
        }
    } else {
        alert("Введено некорректное число!");
    }
}

function exo11(){
    var number = 379;
            var integerResult = Math.round(Math.sqrt(number));
            var tenthsResult = Math.round(Math.sqrt(number) * 10) / 10;
            var hundredthsResult = Math.round(Math.sqrt(number) * 100) / 100;

            alert("Квадратный корень из числа " + number + ":\n\n" +
                "До целых: " + integerResult + "\n" +
                "До десятых: " + tenthsResult + "\n" +
                "До сотых: " + hundredthsResult);
}

function exo21(){
    var rectangleWidth = 8; 
            var rectangleHeight = 5; 
            var squareCount = 1;

            while (rectangleWidth > 0 && rectangleHeight > 0) { if (rectangleWidth > rectangleHeight) {
                    squareCount += Math.floor(rectangleWidth / rectangleHeight);
                    rectangleWidth %= rectangleHeight;
                } else {
                    squareCount += Math.floor(rectangleHeight / rectangleWidth);
                    rectangleHeight %= rectangleWidth;
                }
            }

            alert("Количество квадратов, на которые можно разрезать прямоугольник:\n\n" +
                "Ширина: " + rectangleWidth + "\n" +
                "Высота: " + rectangleHeight + "\n" +
                "Количество квадратов: " + squareCount);
        }
