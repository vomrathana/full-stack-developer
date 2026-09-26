# Lab 02: JavaScript Part 02 - Interactive Personal Portfolio Website

---

# Project: Interactive Personal Portfolio Website

Continue developing the Portfolio Website created in previous labs.

Folder Structure:

```plaintext
portfolio-tailwind-lab/
|-- index.html
|-- script.js
|-- images/
|   |-- profile.jpg
```

---

## Step 1: Connect JavaScript File

Before the closing body tag, add:

```html
<script src="script.js"></script>
```

Create:

```plaintext
script.js
```

---

## Step 2: Welcome Visitor Message

Display a welcome message when the page loads.

Example:

```javascript
alert("Welcome to my portfolio website!");
```

Learning Outcomes:

- JavaScript Output
- Browser Interaction

---

## Step 3: Create Profile Class

Create a Profile class.

```javascript
class Profile {

    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        return `${this.name} - ${this.role}`;
    }

}
```

Create an object:

```javascript
const profile =
    new Profile(
        "Your Name",
        "Frontend Developer"
    );

console.log(profile.introduce());
```

Learning Outcomes:

- Class
- Object
- Constructor
- Method

---

## Step 4: Getter and Setter

```javascript
class User {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}
```

Test:

```javascript
const user = new User("Nova");

console.log(user.name);

user.name = "John";

console.log(user.name);
```

Learning Outcomes:

- Getter
- Setter

---

## Step 5: Inheritance

```javascript
class Skill {

    constructor(name) {
        this.name = name;
    }

}

class ProgrammingSkill extends Skill {

    constructor(name) {
        super(name);
    }

}
```

Create:

```javascript
const skill =
    new ProgrammingSkill("JavaScript");

console.log(skill.name);
```

Learning Outcomes:

- Inheritance
- super()

---

## Step 6: Show / Hide About Me Section

Add a button:

```html
<button id="toggleAbout">
    Show / Hide About Me
</button>
```

JavaScript:

```javascript
document
    .getElementById("toggleAbout")
    .addEventListener("click", () => {

        const about =
            document.getElementById("about");

        about.classList.toggle("hidden");

    });
```

Learning Outcomes:

- DOM
- Event Handling

---

## Step 7: Add Skills Dynamically

Add:

```html
<input
    type="text"
    id="skillInput"
    placeholder="Enter Skill"
>

<button id="addSkillBtn">
    Add Skill
</button>

<ul id="skillList"></ul>
```

JavaScript:

```javascript
document
    .getElementById("addSkillBtn")
    .addEventListener("click", () => {

        const input =
            document.getElementById("skillInput");

        const skill =
            document.createElement("li");

        skill.textContent =
            input.value;

        document
            .getElementById("skillList")
            .appendChild(skill);

        input.value = "";

    });
```

Learning Outcomes:

- createElement()
- appendChild()

---

## Step 8: Load Portfolio Data Using Promise

```javascript
function loadPortfolio() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                name: "Nova Liev",
                role: "Fullstack Developer"
            });

        }, 2000);

    });

}
```

Learning Outcomes:

- Promise
- Async Operation

---

## Step 9: Async / Await

```javascript
async function getPortfolio() {

    const data =
        await loadPortfolio();

    console.log(data);

}

getPortfolio();
```

Learning Outcomes:

- async
- await

---

## Step 10: Contact Form Event

Add event listener to the Contact Form.

```javascript
document
    .querySelector("form")
    .addEventListener("submit", (event) => {

        event.preventDefault();

        alert("Message Sent Successfully");

    });
```

Learning Outcomes:

- Form Event
- Prevent Default

---

## Step 11: Browser BOM

Display browser information.

```javascript
console.log(
    screen.width
);

console.log(
    screen.height
);

console.log(
    navigator.userAgent
);
```

Learning Outcomes:

- Screen Object
- Navigator Object

---

## Step 12: Cookies

Save visitor name.

```javascript
document.cookie =
    "visitor=Student";
```

Read cookie:

```javascript
console.log(
    document.cookie
);
```

Learning Outcomes:

- Cookies

---

# Task

Enhance your Portfolio Website by adding:

1. Welcome Message
2. Profile Class
3. Getter & Setter
4. Inheritance
5. Show/Hide About Section
6. Dynamic Skill List
7. Promise
8. Async/Await
9. Contact Form Event
10. Browser Information
11. Cookie Storage

---

# Submission Requirements

Submit: Link Github

```plaintext
portfolio-tailwind-lab/
|-- index.html
|-- script.js
|-- images/
|   |-- profile.jpg
```

Screenshots:

```plaintext
1. Hero Section
2. About Me Toggle
3. Dynamic Skill List
4. Promise Result
5. Contact Form Success Message
6. Browser Information
7. Cookie Result
```

---

# Challenge Task

Add:

- Dark Mode Toggle
- Mobile Menu Toggle
- Theme Switcher
- Social Media Links
- Project Loading using Promise and Async/Await

Bonus:

Store theme preference using Cookies.
