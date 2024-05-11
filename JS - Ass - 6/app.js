// Chapter 21 TO 25 ;     /////////

// Q1 Answer ;
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + " Welcome.");

// Q2 Answer ;
// var userInput = prompt("Please enter Mobile Name and Model");
// document.write("My Favorite phone is " + userInput);
// document.write("<br>Lenght of string " + userInput.length);

// Q3 Answer ;
// var string = "Pakistani";
// document.write("String: " + string);
// document.write("<br>Index of word 'N': " + string.indexOf("n"));

// Q4 Answer ;
// var string2 = "Hello world";
// document.write("String: " + string2);
// document.write("<br>Last Index of word 'L': " + string2.lastIndexOf("l"));

// Q5 Answer ;
// var string3 = "Pakistani";
// document.write("String: " + string3);
// document.write("<br>Character at index 3: " + string3.charAt(3));

// Q6 Answer ;
// var firstName = prompt("Please Enter Your First Name");
// var lastName = prompt("Please Enter Your Last Name");
// document.write("Welcome! " + firstName.concat(" " + lastName));

// Q7 Answer ;
// var city = "Hyderabad";
// document.write("City " + city)
// document.write("<br>After replacement: " + city.replace("Hyder" , "Islam"))

// Q8 Answer ;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message.replaceAll("and" , "&"))

// Q9 Answer ;
// var val = "472";
// document.write("Value: " + val);
// document.write("<br> Type: " + typeof val);
// document.write("<br> Value: " + val);
// document.write("<br> Type: " + typeof parseInt(val));

// Q10 Answer ;
// var user = prompt("Enter any Word")
// document.write("User input: " + user)
// document.write("<br> Upper case: " + user.toUpperCase());

// Q11 Answer ;
// var user = prompt("Enter any Word");
// document.write("User input: " + user);
// document.write("<br> Title case: " + user.charAt(0).toUpperCase() + user.slice(1));

// Q12 Answer ;
// var number = 35.36;
// document.write("Number: " + number);
// document.write("<br> Result: " + number.toString().replace('.' , ''));

// Q13 Answer ;

// Q14 Answer ;
// var userSearch = prompt("Welcome to abc Bakery whats your order Ma'am / Sir");
// var item = ["Cake", "IceCream", "Chocolates", "Chips", "Cookies"];
// var firstAlpha = userSearch.slice(0,1).toUpperCase();
// var remainAlpha = userSearch.slice(1).toLowerCase();
// var convert = firstAlpha + remainAlpha
// var flag = false
// for (var x = 0; x < item.length; x++) {
//     if (convert == item[x]) {
//     flag = true
//         document.write(convert + " is available at index " + item.indexOf(convert) + " in our bakery");
//     }
// }
// if(flag == false){
//     document.write("We are sorry " + convert + "is not available in our bakery");
// }

// Q15 Answer ;
// var password = prompt("Enter a password");
// if(password.length < 6 || !isNaN(password.charCodeAt(0))) {
//     alert("Enter a valid password. It must contain at least 6 characters .Password can not begin with a number");
// }
// else{
//     alert("Password accepted!");
// }

// Q16 Answer ;
// var univer = "University of Karachi";
// var wordsBreak = univer.split("").join("<br>");
// document.write(wordsBreak);

// Q17 Answer ;
// var country = prompt("Enter any word", "pakistan");
// var cont = country.charAt(country.length-1);
// document.write("User input: " + country + "<br>");
// document.write("Last character of input: " + cont);

// Q18 Answer ;
// var sentence = "The quick brown fox jumps over the lazy dog";
// var wordToFind = "the";
// var words = sentence.split(" ");
// var count = 0;
// for (var i = 0; i < words.length; i++) {
//     if (words[i].toLowerCase() === wordToFind) {
//         count++;
//     }
// }
// document.write("Text: " + sentence + "<br>" + "There are " + count + " occurance(s) of word " + "'" + wordToFind + "'");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Chapter 26 TO 30 ;     /////////

// Q1 Answer ;
// var numb = 3.45214;
// document.write("Number is: " + numb +"<br>");
// var rounding = Math.round(numb);
// document.write("Round of Value: " + rounding + "<br>");
// var ceiling = Math.ceil(numb);
// document.write("Ceil Value: " + ceiling + "<br>");
// var floring = Math.floor(numb);
// document.write("Floor Value: " + floring + "<br>");

// Q2 Answer ;
// var numb = -2.673;
// document.write("Number is: " + numb + "<br>");
// var floring = Math.floor(numb);
// document.write("Floor Value: " + floring + "<br>");
// var rounding = Math.round(numb);
// document.write("Round of Value: " + rounding + "<br>");
// var ceiling = Math.ceil(numb);
// document.write("Ceil Value: " + ceiling + "<br>");

// Q3 Answer ;
// var numb = -4;
// var absolute = Math.abs(numb);
// document.write("The absolute value of " + numb + " is " + absolute);

// Q4 Answer ;
// let num ;
// let num2 ;
// let dice = Math.floor(Math.random(num) * 6)+1
// let dice2 = Math.floor(Math.random(num) * 6)+1
// document.write("Random dice value: " + dice + "<br>")
// document.write("Random dice value: " + dice2)


// Solved Q5
// let player1 = prompt("Enter player 1 name")
// let player2 = prompt("Enter player 2 name")
// let randomToss = Math.floor(Math.random(length) * 2) + 1
// if (randomToss === 1) {
//     document.write(player1 + " won the toss")
// } else {
//     document.write(player2 + " won the toss");
// }


// Solved Q6
// let randomNum = Math.random()*101;
// let num = Math.floor(randomNum)
// document.write(`Random number between 1 and 100: ${num}`)


// Solved Q7
// let text = prompt("Enter yoyr weight in kilogram")
// let userWeight = parseFloat(text);
// document.write(`The weight of user is ${userWeight} kilograms `);


// Solved Q8
// let text = prompt("Enter a number between 1 to 10");
// let userInput = parseInt(text);
// let secretNum = 7;
// let flag = false;
// for (let i = 1; i <= 10; i++) {
//     if (userInput === secretNum) {
//         flag = true;
//         alert("Congratulation you guess the secret number");
//         break;
//     }
// }
// if (flag === false) {
//     alert("Try again");
// }


// Q5 Answer ;











// Q6 Answer ;










// Q7 Answer ;










// Q8 Answer ;























//////////////////////////////////////////////////////////////////////////////////////////////////

// let text = 'this is noman pervaiz'
// let userInp = prompt('Enter your word')
// let flag = false
// for (let i = 0; i < text.length; i++) {
//       if (text.slice(i, i + userInp.length) === userInp ) {
//         flag = true
//           document.write(userInp + ' word find')
//     }
// }
// if (flag === false) {
//     document.write(userInp + ' word not find')
    
// }


