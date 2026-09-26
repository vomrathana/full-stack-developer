// Welcome message
alert("Welcome to my portfolio website!");

// Cookie
document.cookie = "visitor=Student";

// Class
class Profile {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    introduce() {
        return `${this.name} - ${this.role}`;
    }
}

// Getter and Setter
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

// Inheritance
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

// Profile Object
const profile = new Profile("Nova Liev", "Frontend Developer Student");

document.getElementById("logoName").textContent = profile.name;
document.getElementById("heroName").textContent = profile.name;
document.getElementById("heroRole").textContent = profile.role;

console.log(profile.introduce());

// Getter and Setter Test
const user = new User("Nova");
console.log(user.name);

user.name = "Student";
console.log(user.name);

// Inheritance Test
const jsSkill = new ProgrammingSkill("JavaScript");
console.log(jsSkill.name);

// Show / Hide About
document.getElementById("toggleAbout").addEventListener("click", function () {
    document.getElementById("about").classList.toggle("hidden");
});

// Add Skill Dynamically
document.getElementById("addSkillBtn").addEventListener("click", function () {
    const input = document.getElementById("skillInput");
    const value = input.value.trim();

    if (value === "") {
        alert("Please enter a skill");
        return;
    }

    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-lg shadow text-center";

    card.innerHTML = `
        <h3 class="text-xl font-semibold text-blue-600">${value}</h3>
    `;

    document.getElementById("skillCards").appendChild(card);

    input.value = "";
});

// Promise
function loadProjects() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve([
                {
                    title: "Portfolio Website",
                    description: "A responsive portfolio website using HTML and Tailwind CSS.",
                    tech: "HTML, Tailwind CSS"
                },
                {
                    title: "Landing Page",
                    description: "A modern landing page design for a small business.",
                    tech: "HTML, CSS"
                },
                {
                    title: "JavaScript Mini App",
                    description: "A simple interactive web app using JavaScript DOM.",
                    tech: "JavaScript, DOM"
                },
                {
                    title: "JavaScript Mini App",
                    description: "A simple interactive web app using JavaScript DOM.",
                    tech: "JavaScript, DOM"
                }
            ]);
        }, 2000);
    });
}

// Async / Await
async function displayProjects() {
    const projects = await loadProjects();

    const projectList = document.getElementById("projectList");

    projectList.innerHTML = "";

    projects.forEach(function (project) {
        const card = document.createElement("div");

        card.className = "border rounded-lg p-6 shadow hover:shadow-lg transition";

        card.innerHTML = `
            <h3 class="text-xl font-bold text-gray-900 mb-3">${project.title}</h3>
            <p class="text-gray-600 mb-4">${project.description}</p>
            <p class="text-sm text-blue-600 font-medium mb-4">${project.tech}</p>
            <a href="#" class="text-blue-600 hover:underline">View Project</a>
        `;

        projectList.appendChild(card);
    });
}

displayProjects();

// Contact Form Event
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("formMessage").textContent =
        "Message Sent Successfully!";
});

// Browser BOM
document.getElementById("screenWidth").textContent = screen.width;
document.getElementById("screenHeight").textContent = screen.height;
document.getElementById("browserName").textContent = navigator.userAgent;
document.getElementById("cookieText").textContent = document.cookie;

// Mobile Menu
document.getElementById("menuBtn").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
});

// Dark Mode
document.getElementById("darkModeBtn").addEventListener("click", function () {
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
});