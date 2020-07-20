const payAmount = prompt(
  "task-4\nВкажіть скільки дроїдів,\nВи бажаєте придбати", 1
);

if ( isNaN(payAmount) ) {
  console.log("Введено некорректне значення кількості!");
} else {
  if (payAmount === null) {
    console.log("Скасовано користувачем!");
  } else {
    const credits = 23580;
    const pricePerDroid = 3000;
    const totalPrice = payAmount * pricePerDroid;

    if (totalPrice > credits) {
      console.log("Недостатньо коштів на рахунку!");
    } else {
      console.log(`Ви купили ${payAmount} дроїдів(-а), на рахунку залишилося ${credits - totalPrice} кредитів(-а).`);
    }
  }
}