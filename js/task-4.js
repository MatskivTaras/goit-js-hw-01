console.log("task-4 {");

const payAmount = prompt(
  "task-4\nВкажіть скільки дроїдів,\nВи бажаєте придбати",
  1
);

if (payAmount === null) {
  console.log("Скасовано користувачем!");
} else {
  const credits = 23580, pricePerDroid = 3000, totalPrice = payAmount * pricePerDroid;

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

console.log("} task-4");
