const payAmount = prompt(
  "task-4\nВкажіть скільки дроїдів,\nВи бажаєте придбати", 1
);

if ( isNaN(payAmount) ) {
  console.log("Введено некорректне значення кількості!");
} else {
  if (payAmount === null) {
    console.log("Скасовано користувачем!");
  } else {
    const credits = 23580,
      pricePerDroid = 3000,
      totalPrice = payAmount * pricePerDroid;

    if (totalPrice > credits) {
      console.log("Недостатньо коштів на рахунку!");
    } else {
      const creditsRest = credits - totalPrice;
      console.log(
        "Ви купили " +
          payAmount +
          " дроїдів(-а), на рахунку залишилося " +
          creditsRest +
          " кредитів(-а)."
      );
    }
  }
}