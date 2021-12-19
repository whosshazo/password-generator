# password-generator

    For Challenge 3 I set out to develop a password generator using only JavaScript.

    I started off by defining my variables that the user can choose from. Inside the function the user will be able to choose whether they would like to inclue upper case, lower case, numeric or special numbers. However, before they do that they need to choose the length they wish their password to be. I made this the first prompt that the user will see after they click the "generate password" button. As a quick check, if the user chooses a number lower than 8 or higher than 128, they will receive an alert to choose within the correct margin, and be prompted back to the begining. Next, the user will cycle through a series of confirm windows. This is where the user will decide what they would like their password to contain. This is where the global variables come into context. As a final check, if the user decides not to use any of the listed variables in their password, then they will receive an alert and be prompted back through the confirmation windows. Once the user has chosen how to set up their password we will jump into the for loop. The floor loop is written to iterate through the multiple arrays and pick out random characters to be used within the password. This is done with the use of the Math.floor and Math.random methods. After the for loop is completed, we get the answer by using the return. This will give the viewer their password in the designated box. 

    Thank you,

    Ryan DeShazo
    Challenge 3 - Password Generator 
    12-19-2021