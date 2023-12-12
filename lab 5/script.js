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
            if (lang ="ru") {
                daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
            } else if (lang ="en") {
                daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            }
            console.log(daysOfWeek);
            document.getElementById('console').textContent = daysOfWeek;
        });

        // Задание 21
        document.getElementById('task21').addEventListener('click', function() {
            const numbers = [5, 2, 9, 3, 8, 1, 4];
            
            function descendingSort(arr) {
                return arr.sort((a, b) => b - a);
            }
            
            const sortedNumbers = descendingSort(numbers);
            console.log(sortedNumbers);
            document.getElementById('console').textContent = sortedNumbers;
        });

        // Задание 31
        document.getElementById('task31').addEventListener('click', function() {
            const strings = ['apple', 'Banana', 'cherry', 'date', 'Elderberry'];
            
            function caseInsensitiveSort(arr) {
                return arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
            }
            
            const sortedStrings = caseInsensitiveSort(strings);
            console.log(sortedStrings);
            document.getElementById('console').textContent = sortedStrings;
        });