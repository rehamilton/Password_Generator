// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = "password";
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    console.log("passwor text?: " +passwordText.value)

}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  var lengthEl = prompt("what length");

  var lower = confirm("lower?");
  var upper = confirm("upper?");
  var number = confirm("number?");
  var symbols = confirm("symbol?");


  
  const length= +lengthEl

    //console.log("length: " + length)
    //console.log("length type: " +typeof length)
    //console.log("variables: " +lower, upper, number, symbols)
  

  password = generatePassword(
    length, 
    lower, 
    upper, 
    number, 
    symbols
    );

    console.log("password post event: " +password)
});



// Generate Password
function generatePassword(length, lower, upper, number, symbols) {
  //1. Init pw var
  
  let generatePassword = "";

    console.log("reset password: " +generatePassword)

  //Filter out false booleans

    const typesCount = lower + upper + number + symbols;

      console.log("typesCount: " , typesCount)

    const typesArr = [{lower}, {upper}, {number}, {symbols}].filter
      (
        item => Object.values(item)[0]
      );

      console.log("typesArr: ", typesArr)

    if(typesCount===0) {
      return ;
    };

  //loop through password length
    for ( i = 0; i < length; i+=typesCount )
      typesArr.forEach (type=> {
      const funcName = Object.keys(type)[0];
       //console.log("object type: " +Object.keys(type)[0]);
      
      generatePassword += randomFunc[funcName]();
        //console.log("end password: " +generatePassword.slice(0, length));
      
        

    });
  

  //add password

  const finalPassword = generatePassword.slice(0, length);

    console.log("final password: " +finalPassword)

  
  return finalPassword

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