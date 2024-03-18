// Chapter 14 TO 16 ;     /////////

// Q1 Answer ;
// var studentsNames = []
// console.log(studentsNames);

// Q2 Answer ;
// var studentsNames = [" "]
// console.log(studentsNames);

// Q3 Answer ;
// var studentsNames = ["Yameen", "Ubaid", "Ahmed"];
// console.log(studentsNames);

// Q4 Answer ;
// var numbersValue = [10, 20, 30, 40];
// console.log(numbersValue);

// Q5 Answer ;
// var booleanValues = [true, false];
// console.log(booleanValues);

// Q6 Answer ;
// var values = [23, "Raza Shaikh", false, true, 16, "Yameen", "Ghanchi", 99];
// console.log(values);

// Q7 Answer ;
// document.write("<h2>" + "Qualification" + "<br>" + "</h2>");
// var Education = ['1) SSC' + "<br>" + ' 2) HSC' + "<br>" + '3) BCS' + "<br>" + '4) BS' + "<br>" + '5) BCOM' + "<br>" + '6) MS' + "<br>" + '7) M.Phil.' + "<br>" + '8) PhD'];
// document.write(Education);

// Q8 Answer ;
// var studentNames = ['Yameen', 'Raza', 'Ahmed'];
// var studentScore = ['300', '480', '250'];
// var totalMarks = 500;
// document.write("Score of" + " " + studentNames[0] + " " + "is" + " " + studentScore[0] + ". " + "Percentage:" + " " + studentScore[0] * 100 / totalMarks + "%" + "<br>");
// document.write("Score of" + " " + studentNames[1] + " " + "is" + " " + studentScore[1] + ". " + "Percentage:" + " " + studentScore[1] * 100 / totalMarks + "%" + "<br>");
// document.write("Score of" + " " + studentNames[2] + " " + "is" + " " + studentScore[2] + ". " + "Percentage:" + " " + studentScore[2] * 100 / totalMarks + "%");

// Q9 Answer ; 
// document.write("<h2>" + "Color Names." + "</h2>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// document.write(colorsNames + "<br>");
// document.write("<h2>" + "a) Adding user color name in beginning." + "</h2>" + "<br>");
// var colorsNames =["Blue", "Yellow", "Purple"];
// var userColor = prompt("Enter color you want to add at beginning");
// colorsNames.unshift(userColor);
// document.write(colorsNames);
// document.write("<h2>" + "b) Adding user color name in end" + "</h2>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// var userColor = prompt("Enter color name you want to add at end.");
// colorsNames.push(userColor);
// document.write(colorsNames);
// document.write("<h2>" + "c) Adding two color names in beginning." + "</h2>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// var userColor = prompt("Enter color-one you want to add at beginning");
// colorsNames.unshift(userColor);
// var userColor = prompt("Enter color-two you want to add at beginning");
// colorsNames.unshift(userColor);
// document.write(colorsNames);
// document.write("<h2>" + "d) Deleting the first color in Array." + "</h2>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// document.write(colorsames + "<br>");
// document.write("<b>" + "After Deleting first color in Array" + "</b>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// colorsNames.shift();
// document.write(colorsNames);
// document.write("<h2>" + "e) Deleting the last color in Array." + "</h2>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// document.write(colorsNames+"<br>");
// document.write("<b>" + "After Deleting last color" + "</b>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// colorsNames.pop();
// document.write(colorsNames);
// document.write("<h2>" + "f) Adding user index positon & color in Array." + "</h2>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple"];
// var userIndex = +prompt("Enter index position");
// var userColor = prompt("Enter color you want to add");
// colorsNames[userIndex] = userColor
// document.write(colorsNames);
// document.write("<h2>" + "g) Deleting user chosen index positon & color in Array."+ "</h2>" + "<br>");
// var colorsNames = ["Blue", "Yellow", "Purple", "Green"];
// document.write(colorsNames + "<br>");
// var userTarget = +prompt("Enter your target number in array");
// var userIndex = +prompt("Enter index numbers you want to delete");
// var colorsNames = ["Blue", "Yellow", "Purple", "Green"];
// colorsNames.splice (userTarget, userIndex)
// document.write(colorsNames);

// Q10 Answer ;
// var studentScores = [234, 456, 364, 345, 134];
// document.write("<b>" + "Scores Of Student :" + "</b>" + " " + studentScores + "<br>");
// studentScores.sort();
// document.write("<b>" + "Ordered Scores Of Student :" + "</b>" + " " + studentScores);

// Q11 Answer ;
// document.write("Cities List :" + "<br>");
// var cities= ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// document.write(cities + "<br>");
// var copy = cities.slice(2,4);
// document.write("<br>" + "Selected cities list :" + "<br>" + copy);

// Q12 Answer ; 
// document.write("Array:" + "<br>");
// var line=["This", "is", "my", "cat"];
// document.write(line + "<br>" + "<br>");
// document.write("String:" + "<br>");
// var line=["This", "is", "my", "cat"];
// var stringText = line.join(" ");
// document.write(stringText);

// Q13 Answer ;
// document.write("FIFO" + "<br>");
// document.write("Devices:" + "<br>");
// var devices=[];
// devices.push("Keyboard");
// devices.push ("Mouse");
// devices.push ("Printer");
// devices.push("Monitor");
// document.write(devices + "<br>");
// document.write("<br>");
// document.write("Out:" + "<br>");
// var returnValue = devices.shift();
// document.write(returnValue + "<br>");
// document.write("Out:" + "<br>");
// var returnValue = devices.shift();
// document.write(returnValue + "<br>");
// document.write("Out:" + "<br>");
// var returnValue = devices.shift();
// document.write(returnValue + "<br>");
// document.write("Out:" + "<br>");
// var returnValue = devices.shift();
// document.write(returnValue + "<br>");
// document.write(deviveThree + "<br>");
// var returnValue = devices.shift();
// document.write(returnValue + "<br>");

// Q14 Answer ;
// document.write("LIFO." + "<br>");
// document.write("Devices:" + "<br>");
// var devices = [ ];
// devices.unshift("Monitor");
// devices.unshift("Printer");
// devices.unshift("Mouse");
// devices.unshift("Keyboard");
// document.write(devices + "<br>");
// document.write("<br>");
// document.write("Out: " + "<br>");
// var returnValue = devices.pop();
// document.write(returnValue + "<br>");
// document.write("Out:" + "<br>");
// var returnValue = devices.pop();
// document.write(returnValue + "<br>");
// document.write("Out:" + "<br>");
// var returnValue = devices.pop();
// document.write(returnValue + "<br>");
// document.write("Out:" + "<br>");
// var returnValue = devices.pop();
// document.write(returnValue + "<br>");
// document.write(deviveThree + "<br>");
// var returnValue = devices.pop();
// document.write(returnValue + "<br>");

// Q15 Answer ;
// var companies = ["Vivo","Samsung", "iphone", "Oppo", "Redmi", "Realme"];
// document.write (
//     `<select>
//     <option> Companies </option>
//     <option> ${companies[0]} </option>
//     <option> ${companies[1]} </option>
//     <option> ${companies[2]} </option>
//     <option> ${companies[3]} </option>
//     <option> ${companies[4]} </option>
//     <option> ${companies[5]} </option>
//     </select>`
// )