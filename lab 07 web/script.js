function task() {
    const countries = {
      'Минск': 'Беларусь',
      'Москва': 'Россия',
      'Киев': 'Украина'
    };
    console.log('Keys:', Object.keys(countries));
    console.log('Values:', Object.values(countries));
    for (const city in countries) {
      console.log(`${city} - это ${countries[city]}`);
    }
  }
  
    
  
let salaries = {
      'Петров': 5000,
      'Иванов': 7000
  }
  
  function showSalaries() {
      if ('Петров' in salaries) {
          console.log(`Зарплата Петрова: ${salaries['Петров']}`);
      } else {
          console.log('Зарплата Петрова не найдена');
      }
  if ('Иванов' in salaries) {
          console.log(`Зарплата Иванова: ${salaries['Иванов']}`);
      } else {
          console.log('Зарплата Иванова не найдена');
      }
  }
  
  
  
  
  
  
    function  task3() {
      alert('Ура!!!');
  }
  
  
  let colors = ['red', 'green', 'blue', 'white', 'green', 'pink','purple',];
   let currentColorIndex = 0;
  
  function changeColor() {
  let button = document.querySelector('.button');
  button.style.backgroundColor = colors[currentColorIndex];
   currentColorIndex = (currentColorIndex + 1) % colors.length;
   }