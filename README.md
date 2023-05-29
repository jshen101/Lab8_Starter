# Lab 8 - Starter

### 1  Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

- Within a Github action that runs whenever code is pushed 

I would fit the automated tests in my Recipe project development within a Github action that runs whenever code is pushed. In this way, everytime I make some changes and push, the test will be run automatically. This prevents the errors that I didn't notice when I changed my code, so when I am planning to merge the error code to github, the test will alert me about it. 

### 2 Would you use an end to end test to check if a function is returning the correct output? (yes/no)

- No

Unit test can ensures that the functions have correct outputs that are working as required. End-to-end test ensures the complete workflows work as required. Thus, I would use unit test to check if a function is returning the correct output instead of end to end test. 

### 3 Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

- No 

I would not use a unit test to test the "message" feature of a messaging application, because unit test is good for testing whether a function could work as expected, it does not involve how individual components interact with each other on feature level. I would choose End-to-end test for the "message" feature. 

### 4 Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

- Yes 

I would use a unit test to test the "max message length" feature of a messaging application, because "max message length" is not likely to be dependent from other components and checking whether the input length has exceed a certain limit could be done by a function, and unit tests are suitable for testing functions' behaviors.