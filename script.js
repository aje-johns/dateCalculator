const decNumberInput = document.querySelector("#declrationInput");

const masterInceptionDateInput = document.querySelector("#masterInceptionDate");
const masterSddInput = document.querySelector("#masterSdd");
const newInceptionDate = document.querySelector("#newInception");
const newSddDate = document.querySelector("#newSdd");

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", () => {
  const declrationNumberString = decNumberInput.value;
  const declrationNumber = Number(declrationNumberString);

  // if let declrationNumber = decNumberInput.value; is kept outside ths function() it wont return the accurate value

  // Calculating the inception %%%%%%%%%%%%%%%%%%%%%%%
  const masterInception = masterInceptionDateInput.value;

  const masterInceptionDate = new Date(masterInception);

  console.log("#################");
  let newInceptionDate = masterInceptionDate.setMonth(
    masterInceptionDate.getMonth() + declrationNumber
  );
  console.log(
    "Master Inception:: " +
      masterInceptionDate.getMonth() +
      ">>>" +
      masterInceptionDate
  );
  console.log(
    new Date(
      masterInceptionDate.setMonth(
        masterInceptionDate.getMonth() + declrationNumber
      )
    )
  );
  console.log("#################");

  const masterInceptionDay = masterInceptionDate.getDay() + 1; // mon, tue etc..
  const masterInceptionDayOfMonth = masterInceptionDate.getDate(); // 1 - 29,30,31...
  const masterInceptionMonth = masterInceptionDate.getMonth() + 1;
  const masterInceptionYear = masterInceptionDate.getFullYear();

  let newInceptionDayOfMonth = masterInceptionDayOfMonth;
  let newInceptionMonthValue = 0;
  let newInceptionYear = masterInceptionYear;

  const calculatedInceptionMonth = masterInceptionMonth + declrationNumber;

  let yearsToAdd = 0;
  if (calculatedInceptionMonth > 0) {
    if (calculatedInceptionMonth > 12) {
      newInceptionMonthValue = calculatedInceptionMonth % 13;
      //   calculatng years to add

      let tempYearsToAdd = calculatedInceptionMonth;
      while (tempYearsToAdd > 13) {
        yearsToAdd++;
        tempYearsToAdd = tempYearsToAdd - 13;
      }
      /*   if (newInceptionMonthValue == tempYearsToAdd) {
    //     console.log(true);

    */
    }
  } else if (calculatedInceptionMonth <= 12) {
    newInceptionMonthValue = calculatedInceptionMonth - 1;
  } else if (calculatedInceptionMonth == 13) {
    newInceptionMonthValue = calculatedInceptionMonth;
  }

  //   newInceptionMonthValue = inception2Digits();

  const newInceptionYearValue = newInceptionYear + yearsToAdd;
  console.log(newInceptionYearValue);
  const newInceptionDateOP = `${newInceptionDayOfMonth}/${newInceptionMonthValue}/${newInceptionYearValue}`;
  const newSddDateOP = `${newInceptionDayOfMonth}/${newInceptionMonthValue}/${newInceptionYearValue}`;

  // Finished the inception ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  const masterSdd = masterSddInput.value;
  const masterSddDate = new Date(masterSdd);

  //   const newSddDateOP = `${newSddDayOfMonth}/${newSddMonthValue}/${newSddYearValue}`;

  let newInceptionMontValue = 0;

  console.log("Inception Month " + newInceptionMontValue);

  //   The invalud date situation Handler
  // if (masterInceptionDate == false) {
  //     console.log("Yippeee");
  //   }
  function make2Digits(input) {
    return input < 10 ? "0" + input : input;
  }
  // HTML Output ##############################################
  newInceptionDate.value = newInceptionDateOP;

  newSddDate.value = newSddDateOP;
});
