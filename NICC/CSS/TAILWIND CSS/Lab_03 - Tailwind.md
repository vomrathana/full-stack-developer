# Lab: Responsive Portfolio Website using HTML and Tailwind CSS

---

## Folder Structure

Create the following folder and file:

```plaintext
portfolio-tailwind-lab/
|-- index.html
|-- images/
|   |-- profile.jpg
```


---

## Step 1: Create the Basic HTML File

Create `index.html` and add the basic HTML structure.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Portfolio</title>
</head>
<body>

</body>
</html>
```

---

## Step 2: Add Tailwind CSS CDN

Inside the `<head>` tag, add the Tailwind CSS CDN script.

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Example:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Name - Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
```

---

## Step 3: Create the Header and Navigation

Create a header with your name or logo and navigation links.

Required navigation links:

- Home
- About
- Skills
- Projects
- Contact

Example:

```html
<header class="bg-white shadow sticky top-0 z-50">
  <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
    <h1 class="text-2xl font-bold text-blue-600">Your Name</h1>

    <nav>
      <ul class="flex gap-6 text-gray-700 font-medium">
        <li><a href="#home" class="hover:text-blue-600">Home</a></li>
        <li><a href="#about" class="hover:text-blue-600">About</a></li>
        <li><a href="#skills" class="hover:text-blue-600">Skills</a></li>
        <li><a href="#projects" class="hover:text-blue-600">Projects</a></li>
        <li><a href="#contact" class="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

---

## Step 4: Build the Hero Section

Create a hero section with:

- Your name
- Your role
- A short description
- A profile image
- A button linking to the contact section

Example:

```html
<section id="home" class="bg-gray-50">
  <div class="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <p class="text-blue-600 font-semibold mb-2">Hello, I am</p>
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Name</h2>
      <p class="text-xl text-gray-700 mb-6">Frontend Developer Student</p>
      <p class="text-gray-600 mb-8">
        I create responsive and modern websites using HTML, CSS, and Tailwind CSS.
      </p>
      <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Contact Me
      </a>
    </div>

    <div class="flex justify-center">
      <img src="images/profile.jpg" alt="Profile photo" class="w-72 h-72 object-cover rounded-full shadow-lg">
    </div>
  </div>
</section>
```

---

## Step 5: Create the About Section

Create an about section with a heading and one or two short paragraphs about yourself.

Example:

```html
<section id="about" class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
    <p class="text-gray-600 leading-relaxed">
      I am a web development student who enjoys building clean and responsive websites.
      I am currently learning HTML, CSS, Tailwind CSS, and JavaScript.
    </p>
  </div>
</section>
```

---

## Step 6: Create the Skills Section

Use Tailwind Grid utilities to show your skills.

Required skills:

- HTML
- CSS
- Tailwind CSS
- JavaScript

Example:

```html
<section id="skills" class="py-16 bg-gray-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">My Skills</h2>

    <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <h3 class="text-xl font-semibold text-blue-600">HTML</h3>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <h3 class="text-xl font-semibold text-blue-600">CSS</h3>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <h3 class="text-xl font-semibold text-blue-600">Tailwind CSS</h3>
      </div>
      <div class="bg-white p-6 rounded-lg shadow text-center">
        <h3 class="text-xl font-semibold text-blue-600">JavaScript</h3>
      </div>
    </div>
  </div>
</section>
```

---

## Step 7: Create the Projects Section

Create at least three project cards.

Each project card include:

- Project title
- Short description
- Technologies used
- Button or link

Example:

```html
<section id="projects" class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">Projects</h2>

    <div class="grid md:grid-cols-3 gap-6">
      <div class="border rounded-lg p-6 shadow hover:shadow-lg transition">
        <h3 class="text-xl font-bold text-gray-900 mb-3">Portfolio Website</h3>
        <p class="text-gray-600 mb-4">
          A responsive personal portfolio website built with HTML and Tailwind CSS.
        </p>
        <p class="text-sm text-blue-600 font-medium mb-4">HTML, Tailwind CSS</p>
        <a href="#" class="text-blue-600 hover:underline">View Project</a>
      </div>
    </div>
  </div>
</section>
```

Duplicate the project card until you have three projects.

---

## Step 8: Create the Contact Section

Create a contact section with a simple form.

Required form fields:

- Full name
- Email
- Message
- Submit button

Example:

```html
<section id="contact" class="py-16 bg-gray-50">
  <div class="max-w-3xl mx-auto px-4">
    <h2 class="text-3xl font-bold text-center text-gray-900 mb-10">Contact Me</h2>

    <form class="bg-white p-6 rounded-lg shadow space-y-5">
      <div>
        <label for="name" class="block text-gray-700 font-medium mb-2">Full Name</label>
        <input type="text" id="name" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
        <input type="email" id="email" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div>
        <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
        <textarea id="message" rows="5" class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
        Send Message
      </button>
    </form>
  </div>
</section>
```

---

## Step 9: Create the Footer

Add a footer at the bottom of the page.

Example:

```html
<footer class="bg-gray-900 text-white py-6">
  <div class="max-w-6xl mx-auto px-4 text-center">
    <p>&copy; 2026 Your Name. All rights reserved.</p>
  </div>
</footer>
```

---

## Step 10: Make the Website Responsive

Use Tailwind responsive prefixes to make the layout work on different screen sizes.

Examples:

```html
class="grid md:grid-cols-2"
class="grid sm:grid-cols-2 md:grid-cols-4"
class="text-4xl md:text-5xl"
class="px-4 md:px-8"
```

Check your website using:

- Mobile screen
- Tablet screen
- Desktop screen

---

## Task

Customize the portfolio website with your own information follow your Wireframe Day01.

Required customization:

- Replace `Your Name` with the student's real name
- Add a personal role, such as `Frontend Developer`, `Web Design Student`, or `IT Student`
- Add a real or placeholder profile image
- Write a short About Me paragraph
- Add at least four skills
- Add at least three project cards
- Add a contact form
- Use Tailwind CSS for all styling
- Make the website responsive

---

## Submission Requirements

Submit the project folder containing:

```plaintext
portfolio-tailwind-lab/
|-- index.html
|-- images/
|   |-- profile.jpg

portfolio-tailwind-task/
|-- index.html
|-- images/
|   |-- profile.jpg
```

Screenshots of:

- Desktop view
- Mobile view

---

## Challenge Task

For extra practice, add:

- Dark mode design
- Social media links
- Download CV button
- Mobile hamburger menu
- Project images
- Smooth scrolling