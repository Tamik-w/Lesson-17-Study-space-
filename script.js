console.log('You can ignore single and double quotes like this: \\\'\\\' \\\" \\\" ');

alert('Please enter your data');

let yourName = prompt("Enter your name: ", "Unknown");

alert(`Your name is: ${yourName}`);

let yourSurname = prompt("Enter your surname: ", "Unknown");

alert(`Your full name is: ${yourName} ${yourSurname}`);

let yourAge = prompt("How old are you: ", "Age");

alert(`Your full name is: ${yourName} ${yourSurname}, your age is: ${yourAge}`);

let yourStatus = confirm('Are you Admin?');

alert(`Your full name is: ${yourName} ${yourSurname}, your age is: ${yourAge}, admin status: ${yourStatus}.`);