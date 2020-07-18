const userCountry = prompt("task-5\n\Введіть країну для доставки");

if (userCountry === null) {
  console.log("Скасовано користувачем!");
} else { 
  switch (userCountry.toLowerCase()) {
    case "китай":
      console.log("Доставка в Китай буде коштувати 100 кредитів");
      break;

    case "чилі":
      console.log("Доставка в Чилі буде коштувати 250 кредитів");
      break;

    case "австралія":
      console.log("Доставка в Австралію буде коштувати 170 кредитів");
      break;

    case "індія":
      console.log("Доставка в Індію буде коштувати 80 кредитів");
      break;

    case "ямайка":
      console.log("Доставка в Ямайку буде коштувати 120 кредитів");
      break;

    default:
      alert("У вашій країні доставка недоступна");
  }
}