# Password_Generator
Password Generator






## Overall Process

![markdownAssets/Overall_Process.png](https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/Overall_Process.PNG)


## Beginning - Event Listener

An event listener starts off the process. When the assigned buttoned is clicked the user is prompted for some guidelines as to the password complexity and length. Where inputs do not meet the stated restrictions, an alert is sent and the function is ended otherwise the next function is run.

![markdownAssets/generateBtn.addEventListener.PNG]https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/generateBtn.addEventListener.PNG


## End - writePassword

The variables created within the Event Listener are passed through to this process in the function parenthesis (writePassword (*variables*)).

![markdownAssets/writePassword.PNG]https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/writePassword.PNG

While this function technically completes the process it also contains an instruction to run a generatPassowrd process. The variables generated within the Event Listener are passed on again to this function through the function's parenthesis (generatePassword(variables)).


## Sub-function - generatePassword

The variables created within the Event Listener are passed through to this process in the function parenthesis (generatePassword (*variables*)).

![markdownAssets/generatePassword.PNG]https://github.com/rehamilton/Password_Generator/blob/master/markdownAssets/generatePassword.PNG

Where there are no character types selected, an alert is run and the function is ended.

Where the function is successfully completed the password is returned to the writePassword function for processng to the relevant text box.


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