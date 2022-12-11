const userInputDecNumber = document.querySelector("#declrationInput");
const userInputInception = document.querySelector("#masterInceptionDate");
const userInputSdd = document.querySelector("#masterSddDate");
const outputInception = document.querySelector("#newInception");
const outputSdd = document.querySelector("#newSdd");
const button = document.querySelector("#submit");

button.addEventListener("click", () => {
  const declerationNumber = Number(userInputDecNumber.value);
  const userInceptionInput = new Date(userInputInception.value);
  const userSddInput = new Date(userInputSdd.value);

  class CalculateOutputDate {
    constructor(declerationNumber, date) {
      this.dec = declerationNumber;
      this.enteredDate = date.getDate();
      this.enteredMonth = date.getMonth() + 1;
      this.enteredYear = date.getFullYear();
    }

    getNewValues = (decNumber, date, name) => {
      console.log(`Here we have the ${name} value`);
      const sumOfEntries = decNumber + this.enteredMonth;
      let newMonthValue = sumOfEntries - 1;
      let yearsToadd = 0;
      let DateObject = {};
      console.log("Values sum : " + sumOfEntries);

      if (newMonthValue <= 12) {
        newMonthValue = newMonthValue;
      } else {
        while (newMonthValue > 12) {
          yearsToadd++;
          newMonthValue = newMonthValue - 12;
        }
      }

      function fixed2Digit(input) {
        const output = input < 10 ? "0" + input : input;
        return output;
      }

      DateObject = {
        newMonth: fixed2Digit(newMonthValue),
        YearsToBeAdded: yearsToadd,
        date: fixed2Digit(this.enteredDate),
        currentYear: fixed2Digit(this.enteredYear),
      };
      return DateObject;
    };
  }
  function GenerateDate(dateObject) {
    const calculatedYear = dateObject.currentYear + dateObject.YearsToBeAdded;
    const calculatedMonth = dateObject.newMonth;
    let currentDate = dateObject.date;
    const monthAsNumber = Number(dateObject.newMonth);

    const monthWith30days = [4, 6, 9, 11];

    if (monthWith30days.includes(monthAsNumber) && currentDate > 30) {
      currentDate = 30;
    }
    if (calculatedMonth == 2 && currentDate >= 28) {
      console.log("Feb");
      currentDate = 28;
    }

    const newDateString = `${calculatedYear}-${calculatedMonth}-${currentDate}`;
    console.log(newDateString);
    return new Date(newDateString);
  }

  //////////////////////////
  // Calling and OutPut
  //////////////////////////

  // Create a new Class
  const inceptionDate = new CalculateOutputDate(
    declerationNumber,
    userInceptionInput
  );
  const newInceptionDate = inceptionDate.getNewValues(
    declerationNumber,
    inceptionDate,
    "Inception"
  );
  // console.log(GenerateDate(newInceptionDate));

  const sddDate = new CalculateOutputDate(declerationNumber, userSddInput);
  console.log(sddDate);
  const newSddDate = sddDate.getNewValues(
    declerationNumber,
    userSddInput,
    "SDD"
  );
  // console.log(GenerateDate(newSddDate));

  function displayGeneratedData(data, target) {
    console.log(data);
  }
  displayGeneratedData(GenerateDate(newInceptionDate), outputInception);
  displayGeneratedData(GenerateDate(newSddDate), outputSdd);
});
