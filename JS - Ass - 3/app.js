// Chapter 9 , 10 , 11 ;     /////////

// Q1 Answer ;
// var city = prompt ("Enter your gender");
// if (city === "Karachi","karachi"){
//     alert("Welcome to city of lights");
// }

// Q2 Answer ;
// var gender = prompt ("Enter your gender");
// var message = "Not match";
// if (gender === "Male"){
//     message=("Good Morning! Sir");
// }
// if (gender === "Female"){
//     message=("Good Morning! Ma'am");
// }
// alert(message);

// Q3 Answer ;
// document.write("<table border = '2' > ");
// document.write("<tr><th>Signal color</th> <th>Message</th><tr>");
// var signalColor1 = prompt("Enter Signal Color Name")
// var message1 = ("Must stop");
// var message2 = ("Ready to move");
// var message3 = ("Move now");
// if(signalColor1 === "red"){
//     document.write("<tr><td>" + signalColor1 + "</td>" + "<td>" + message1 + "</td></tr>");
// }
// else if(signalColor1 === "yellow"){
//     document.write("<tr><td>" + signalColor1 + "</td>" + "<td>" + message2 + "</td></tr>");
// }
// else if(signalColor1 === "green"){
//     document.write("<tr><td>" + signalColor1 + "</td>" + "<td>" + message3 + "</td></tr>");
// }
// else{
//     alert("Please Enter Correct Color Name");
// }
// document.write("</table>");

// Q4 Answer ;
// var fuel = prompt("Enter Remaining Fuel")
// if(fuel < 0.25){
//     document.write("Please Refill the fuel in your Car");
// }
// else if(fuel > 0.25){
//     document.write("Fuel Tank is Full");
// }
// else{
//     document.write("Please Enter Fuel correctly");
// }

// Q5 Answer ;
// var a = 4;
// if (++a === 5) {
//     alert("Given Condition for variable a is True");
// }
// var b = 82;
// if (b++ === 83) {
//     alert("Given Condition for variable b is True");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("Condition 1 is True");
// }
// if (c === 13) {
//     alert("Condition 2 is True");
// }
// if (++c < 14) {
//     alert("Condition 3 is True");
// }
// if (c === 14) {
//     alert("Condition 4 is True");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// Q6 Answer ;
// var markObtain1 = +prompt("Enter Subject-1 Obtained Marks");
// var markObtain2 = +prompt("Enter Subject-2 Obtained Marks");
// var markObtain3 = +prompt("Enter Subject-3 Obtained Marks");
// var totalMarks = +prompt("Enter Total-Marks");

// document.write("<h1>" + "Marks Sheet" + "</h1> <br>")
// document.write("Total Marks :" + " " + totalMarks + "<br>")
// document.write("Obtained Marks :" + " " + (markObtain1 + markObtain2 + markObtain3) + "<br>")
// document.write("Percentage :" + (markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks + " % " + "<br>")
// if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks >= 80){
//     document.write("Grade :" + " " + "A-one" + "<br>")
//     document.write("Remarks :" + " " + "Excellent" + "<br>")
// }
// else if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks >= 70){
//     document.write("Grade :"+" "+"A" + "<br>")
//     document.write("Remarks :"+" "+"Good" + "<br>")
// }
// else if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks >= 60){
//     document.write("Grade :" + " " + "B" + "<br>")
//     document.write("Remarks :" + " " + "You need to improve" + "<br>")
// }
// else if ((markObtain1 + markObtain2 + markObtain3) * 100 / totalMarks < 60){
//     document.write("Grade :" + " " + "Fail" + "<br>")
//     document.write("Remarks :" + " " + "Sorry" + "<br>")
// }
// else{
//     alert("Invalid Data")
// }

// Q7 Answer ;
// var secretNum = 8;
// var secretNumUser = +prompt("Guess the secret number form 1 to 10");
// if(secretNum === secretNumUser){
//     alert("Bingo!")
// }
// if(secretNum === ++secretNumUser){
//     alert("Close enough to the correct answer")
// }
// if(secretNum === secretNumUser++){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Better luck next time")
// }

// Q8 Answer ;
// var num= +prompt("Enter Your Number.");
// if(num % 3 === 0){
//     document.write("Your given number is Divisible")
// }
// else {
//     document.write("Given number is not Divisible")
// }

// Q9 Answer ;
// var num= +prompt("Enter any Number");
// if(num % 2 === 0){
//     document.write("Your given Number is Even")
// }
// else if(num % 1 === 0){
//     document.write("Your given Number is Odd")
// }
// else{
//     document.write("Please Enter Numbers!")
// }

// Q10 Answer ;
// var temperature = +prompt("Enter temperture here")
// if( temperature >= 40){
//     document.write("It is too hot outside.")
// }
// else if( temperature >= 30){
//     document.write("The Weather today is Normal.")
// }
// else if( temperature >= 20){
//     document.write("Today’s Weather is cool.")
// }
// else if( temperature >= 10){
//     document.write("OMG! Today’s weather is so Cool.")
// }

// Q11 Answer ;
// var num1 = +prompt("Enter any Number");
// var num2 = +prompt("Enter any Number");
// var opt = prompt("Expressions");
// if(opt === " * "){
//     document.write(num1 * num2)
// }
// else if (opt === " / "){
//     document.write(num1 / num2)
// }
// else if (opt === " - "){
//     document.write(num1 - num2)
// }
// else if (opt === " + "){
//     document.write(num1 + num2)
// }
// else if (opt === " % "){
//     document.write(num1 % num2)
// }
// else{
//     alert("Please enter Right Expression")
// }