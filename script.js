// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword(length, lower, upper, number, symbols) {
   
  var password = generatePassword(length, lower, upper, number, symbols);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
    console.log("password text?: " +password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  var lengthEl = prompt("Please enter the length of the password. (Should be between 8 and 128 characters)");
  
  const length= +lengthEl

  if (length < 8 || length > 128) {
    alert("not within allowable character length")
    return"";
  }
   
  var lower = confirm("lower?");
  var upper = confirm("upper?");
  var number = confirm("number?");
  var symbols = confirm("symbol?");

    //console.log("length: " + length)
    //console.log("length type: " +typeof length)
    //console.log("variables: " +lower, upper, number, symbols)
  
  writePassword(length, lower, upper, number, symbols)
  
});

// Generate Password
function generatePassword(length, lower, upper, number, symbols) {
   
  //Set password to blank
  
  let generatePassword = "";

    console.log("reset password: " +generatePassword)

  //Filter out characters not wanted

    const typesCount = lower + upper + number + symbols;

      console.log("typesCount: " , typesCount)

    const typesArr = [{lower}, {upper}, {number}, {symbols}].filter
      (
        item => Object.values(item)[0]
      );

      console.log("typesArr: ", typesArr)

    if(typesCount===0) {
      alert("no character types selected")
      return ;
    };

  //loop through password length and add random selection for each character
    for ( i = 0; i < length; i+=typesCount )
      typesArr.forEach (type=> {
      const funcName = Object.keys(type)[0];
       //console.log("object type: " +Object.keys(type)[0]);
      
      generatePassword += randomFunc[funcName]();
        //console.log("end password: " +generatePassword.slice(0, length));
      
    });
  
  //return final password

  var password = generatePassword.slice(0, length);

    console.log("final password: " +password)
  
  return password
}

//Random character generator - http://www.net-comber.com/charset.html

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbols,
};

function getRandomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols () {
  const symbols = "!@#$%^&*(){}[]+=<,>.?/"
  return symbols [Math.floor(Math.random()*symbols.length)]
}

  //console.log("randomLower: " +getRandomLower());
  //console.log("randomUpper: " +getRandomUpper());
  //console.log("randomNumber: " +getRandomNumber());
  //console.log("randomSymbol: " +getRandomSymbols());