/////////////////////////////
//Selecting elements////////
/////////////////////////////
const userInputDecNumber = document.querySelector("#declrationInput");
const userInputInception = document.querySelector("#masterInceptionDate");
const userInputSdd = document.querySelector("#masterSddDate");
const outputInception = document.querySelector("#newInception");
const outputSdd = document.querySelector("#newSdd");
const button = document.querySelector("#submit");

function generateNewMonth(declerationNumber, inputMonth) {
  let yearsToadd = 0;
  let generatedNewMonth = 0;
  let generatedValue = {
    yearsToadd: yearsToadd,
    newMonth: generatedNewMonth,
  };
  const calculatedNewMonth = Number(declerationNumber + inputMonth);

  if (calculatedNewMonth <= 12) {
    generatedValue.newMonth = calculatedNewMonth - 1;

    return generatedValue;
  } else if (calculatedNewMonth >= 13) {
    let calculatedNewMonthTemp = calculatedNewMonth; // usually when we get 0(13-13) we just add one year no change in month
    if (calculatedNewMonthTemp == 13) {
      generatedValue.yearsToadd = 1;
      generatedValue.newMonth = inputMonth;

      return generatedValue;
    } else if (calculatedNewMonthTemp > 13) {
      while (calculatedNewMonthTemp > 13) {
        generatedValue.yearsToadd++;
        calculatedNewMonthTemp = calculatedNewMonthTemp - 13;
      }
      generatedValue.newMonth = calculatedNewMonthTemp;
      return generatedValue;
    }
  }
}

function perfect(inputMonth, inputDate) {
  const month = inputMonth;
  const date = inputDate;
  const month31 = [1, 3, 5, 7, 8, 10, 12];
  const month30 = [4, 6, 9, 11];
  if (month31.includes(month)) {
    console.log("31 days");
  }
  if (month30.includes(month)) {
    console.log("30 days");
  }
  const month2Digit = month < 10 ? "0" + month : month;
  const date2Digit = date < 10 ? "0" + date : date;

  const object = {
    month: month2Digit,
    date: date2Digit,
  };
  return object;
}
/////////////////////////////
//Event Listner////////
/////////////////////////////
button.addEventListener("click", () => {
  const declerationNumber = Number(userInputDecNumber.value);
  const userInceptionInput = new Date(userInputInception.value);
  const userSddInput = new Date(userInputSdd.value);

  const userInceptionDate = userInceptionInput.getDate();
  const userInceptionMonth = userInceptionInput.getMonth() + 1;
  const userInceptionYear = userInceptionInput.getFullYear();

  const userSddDate = userSddInput.getDate();
  const userSddMonth = userSddInput.getMonth() + 1;
  const userSddYear = userSddInput.getFullYear();

  ///////////////////
  ////Test Log///////

  ///////////////////
  ///////////////////

  ///////////////////
  ////Output values
  ///////////////////

  const inceptionYearsToAdd = generateNewMonth(
    declerationNumber,
    userInceptionMonth
  ).yearsToadd;
  const sddYearsToAdd = generateNewMonth(
    declerationNumber,
    userSddMonth
  ).yearsToadd;

  const inceptionNewMonth = generateNewMonth(
    declerationNumber,
    userInceptionMonth
  ).newMonth;
  const sddNewMonth = generateNewMonth(
    declerationNumber,
    userSddMonth
  ).newMonth;

  let newInceptionDate = perfect(inceptionNewMonth, userInceptionDate).date;
  let newInceptionMonth = perfect(inceptionNewMonth, userInceptionDate).month;
  let newInceptionYear = userInceptionYear + inceptionYearsToAdd;

  let newSddDate = perfect(sddNewMonth, userSddDate).date;
  let newSddMonth = perfect(sddNewMonth, userSddDate).month;
  let newSddYear = userSddYear + sddYearsToAdd;

  outputInception.value = `${newInceptionDate}/${newInceptionMonth}/${newInceptionYear}`;
  outputSdd.value = `${newSddDate}/${newSddMonth}/${newSddYear}`;
});
