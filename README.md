# Password_Generator

A password generator was created following the below acceptance criteria set out in the homework. An additional acceptance criteria was added that at least one character choice had to be selected.  

Below this I have broken down how the javascript works to achieve the acceptance criteria.

I have left console logs in the javascript but commented them out in case you want to see the results.


## Reference - Generate Password Requirements 

For reference, the following requirements were set out in the homework.

### Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```


# Solution Guide

## Overall Process

![markdownAssets/Overall_Process.png](https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/Overall_Process.PNG "Overall Process")


## Beginning - Event Listener

An event listener starts off the process. When the assigned buttoned is clicked the user is prompted for some guidelines as to the password complexity and length. Where inputs do not meet the stated restrictions, an alert is sent and the function is ended otherwise the next function is run.

![markdownAssets/generateBtn.addEventListener.png](https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/generateBtn.addEventListener.PNG "addEventListener")


## End - writePassword

The variables created within the Event Listener are passed through to this process in the function parenthesis (writePassword (*variables*)).

![markdownAssets/writePassword.png](https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/writePassword.PNG "writePassword")

While this function technically completes the process it also contains an instruction to run a generatPassowrd process. The variables generated within the Event Listener are passed on again to this function through the function's parenthesis (generatePassword(variables)).


## Sub-function - generatePassword

The variables created within the Event Listener are passed through to this process in the function parenthesis (generatePassword (*variables*)).

![markdownAssets/generatePassword.PNG](https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/generatePassword.PNG "generatePassword")

Where there are no character types selected, an alert is run and the function is ended.

Where the function is successfully completed the password is returned to the writePassword function for processng to the relevant text box.

### Random Functions

#### Lower & Upper Characters and Numbers
Math.Floor and Math.Random were used to create a number between:
    - 1 and 26 for upper and lower(the number of letters in the aplhabet a-z) 
    or 
    - 1 and 10 for number (the number of single digit numbers available 0-9)

The first character id within the browser character set (ie. the characterset number for "a" for lowers, "A" for uppers and "0" for numbers) was used to create a starting point and the result of the Math.Random (rounded) would result in a characterset number being chosen within the parameters of lowers, uppers or numbers.


#### Special Characters

As special characters span many different areas of the browser character set all of the symbols that I wanted to use were stated and the Math.Random was set to find a character within the symbols set out. 

# Issues

I would have liked the password to be a little more random. I had looked at creating an array from the password, randomising that array and changing it back to a string. It appeared that this involves some javascript imports that we have yet to look at though.