function main() {
    let input = prompt("task-6\n\Введіть число");
    let total = 0;
  
    while (input !== null) {
      if (isNaN(input)) {
        alert("Було написано не число, спробуйте ще раз");
      } else {
        total += Number(input);
      }
      input = prompt("Введіть число");
    }
  
    return total;
  }
  
alert("Загальна сума чисел дорівнює " + main());