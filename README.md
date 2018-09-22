# JS-Calculator

https://dupreesi.github.io/JS-Calculator/

Pre-req for Founders and Coders in London. 

## User stories

- I can add, subtract, multiply and divide two numbers.
- I can clear the input field with a clear button.
- I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output.

## Coding Procedure: 

### Layout:

- An HTML form was added as a basic layout of the calculator
- display (input text field with disabled input)
- 3 rows with buttons (input buttons with id = keys and id = equals)

### JavaScript: 

in total 4 functions were set up enabling dynamics which can be seen on the display 

display activation: var box = document.getElementById('display');

#### function 1 (toScreen): 
- enables the user to chain numbers 1-9 and operators +*-/* forming strings that can be seen on the display (e.g. "9+8/2*2)
- if user presses the "C" button an empty string acts as input hence "deleting" former operations

#### function 2 (answer):
- if user presses the = operator the function runs using the string formerly generated within function 1 and applies the eval(string) method. 
- eval() can be seen as a mathematical function for string inputs
	
#### function 3 (power):
- if user presses x^2 function 3 runs and uses x=eval(x*x) to square the string input

#### function 4 (backspace):
- if user presses CE function 4 uses the .length property firstly assessing the length of the input string (e.g. 12345 => length = 5). It then stores a new variable that subtracts one of the sting´s length (5 - 1 = 4)
- it then uses the substring method to create a new string starting with postion 0 and ending with position length-1 of the original input string (when pressing CE 12345 becomes 1234). 
