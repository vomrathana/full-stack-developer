# Lab 01: JavaScript Part 01 

---

## Folder Structure

```plaintext
javascript-lab-01/
│── index.html
│── script.js
```

---

## Step 1: Create HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Lab 01</title>
</head>
<body>

    <h1>JavaScript Lab 01</h1>
    <p>Open Console to see the result.</p>

    <button onclick="showWelcome()">Click Me</button>

    <script src="script.js"></script>
</body>
</html>
```

## Step 2: Practice JavaScript Output

```javascript
console.log("Hello Student!");
document.write("Welcome to JavaScript Lab<br>");
alert("Welcome Student!");
```

## Step 3: Practice Input

```javascript
let name = prompt("Enter your name:");
console.log("Student Name:", name);

let confirmResult = confirm("Are you ready to learn JavaScript?");
console.log("Confirm Result:", confirmResult);
```

## Step 4: Practice Variables

```javascript
var school = "SmallLabs";
let age = 20;
const pi = 3.14;

console.log(school);
console.log(age);
console.log(pi);
```

## Step 5: Practice Data Types

```javascript
let username = "Nova";
let score = 95;
let isPassed = true;
let student = {
    name: "Dara",
    age: 18
};

console.log(typeof username);
console.log(typeof score);
console.log(typeof isPassed);
console.log(typeof student);
```

## Step 6: Practice Operators

```javascript
let a = 10;
let b = 5;

console.log("Add:", a + b);
console.log("Subtract:", a - b);
console.log("Multiply:", a * b);
console.log("Divide:", a / b);

console.log(10 > 5);
console.log(10 == "10");
console.log(10 === "10");

console.log(true && false);
console.log(true || false);
console.log(!true);
```

## Step 7: Practice Conditional Statements

```javascript
let studentAge = 18;

if (studentAge >= 18) {
    console.log("You are an adult");
}

let scoreResult = 85;

if (scoreResult >= 90) {
    console.log("Grade A");
} else if (scoreResult >= 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
```

## Step 8: Practice Switch

```javascript
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Unknown day");
}
```

## Step 9: Practice Loops

```javascript
for (let i = 0; i < 5; i++) {
    console.log("For loop:", i);
}

let x = 0;
while (x < 3) {
    console.log("While loop:", x);
    x++;
}

let y = 0;
do {
    console.log("Do while loop:", y);
    y++;
} while (y < 3);
```

## Step 10: Practice Functions

```javascript
function showWelcome() {
    alert("Welcome Student!");
}

function addNumber(a, b) {
    return a + b;
}

console.log(addNumber(10, 20));

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));
```

## Step 11: Practice Array

```javascript
let students = ["Dara", "Sokha", "Bopha"];

console.log(students);
console.log(students[0]);

students[1] = "Pisey";
console.log(students);

students.push("Vanna");
console.log(students);

students.pop();
console.log(students);

for (let student of students) {
    console.log(student);
}
```

# Final Lab Task

Create a small program that:

1. Asks student name using prompt()
2. Asks student score using prompt()
3. Converts score to number
4. Checks grade:
   - 90–100 = A
   - 80–89 = B
   - 70–79 = C
   - Below 70 = Fail
5. Shows result using alert() and console.log()

```javascript
let studentName = prompt("Enter student name:");
let studentScore = Number(prompt("Enter student score:"));

let grade;

if (studentScore >= 90) {
    grade = "A";
} else if (studentScore >= 80) {
    grade = "B";
} else if (studentScore >= 70) {
    grade = "C";
} else {
    grade = "Fail";
}

alert(studentName + " got grade " + grade);
console.log(studentName + " got grade " + grade);
```

## Submission

```plaintext
index.html
script.js
Screenshot of browser
Screenshot of console result
```
