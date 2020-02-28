// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, lower, upper, number, special) {
   
  var password = generatePassword(length, lower, upper, number, special);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    //console.log("written password: " +password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", () => {
  lengthEl = prompt("Please enter the length of the password. (Must be between 8 and 128 characters)");
  
  var length = parseInt(lengthEl, 10);

  if (length < 8 || length > 128) {
    alert("not within allowable character length")
    return"";
  }
   
  var lower = confirm("Would you like to include lower case characters?");
  var upper = confirm("Would you like to include upper case characters?");
  var number = confirm("Would you like to include numbers?");
  var special = confirm("Would you like to include special character?");

    //console.log("length: " + length)
    //console.log("length type: " +typeof length)
    //console.log("variables: " +lower, upper, number, special)
  
  writePassword(length, lower, upper, number, special)
  
});

// Generate Password
function generatePassword(length, lower, upper, number, special) {
   
  //Set password to blank
  
    let generatePassword = "";

    //console.log("reset password: " +generatePassword)

  //Filter out characters not wanted

    const typesCount = lower + upper + number + special;

      //console.log("typesCount: " , typesCount)

      if(typesCount===0) {
        alert("no character types selected")
        return ;
      };

    const typesArr = [{lower}, {upper}, {number}, {special}].filter
      (
        item => Object.values(item)[0]
      );

      //console.log("typesArr: ", typesArr)
   

  //loop through password length and add random selection for each character
    for ( i = 0; i < length; i+=typesCount )
      typesArr.forEach (type=> {
      const funcName = Object.keys(type)[0];
       //console.log("object type: " +Object.keys(type)[0]);
      
      generatePassword += randomFunc[funcName]();
        //console.log("end password: " +generatePassword.slice(0, length));
      
    });
  
    // remove unwanted password length created as a result of loop length

    var password = generatePassword.slice(0, length);

    //console.log("final password: " +password);

    //return final password
  
    return password
}


//Random character generator - http://www.net-comber.com/charset.html

const randomFunc = {
  lower:    randomLower,
  upper:    randomUpper,
  number:   randomNumber,
  special:  randomSpecial,
};

function randomLower () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial () {
  const special = "!@#$%^&*(){}[]+=<,>.?/"
  return special [Math.floor(Math.random()*special.length)]
}

  //console.log("randomLower: " +getRandomLower());
  //console.log("randomUpper: " +getRandomUpper());
  //console.log("randomNumber: " +getRandomNumber());
  //console.log("randomSpecial: " +getRandomSpecial());