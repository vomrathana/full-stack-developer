# Lab 02: Responsive Portfolio Website using Flexbox

---

# Folder Structure

```plaintext
portfolio-lab/
│── css/
│   └── style.css
│── index.html
│── profile.jpg
```

---

# Step 1: Update the HTML Structure

Update and Check the basic portfolio structure:

- Header
- Navigation Menu
- Hero Section
- About Section
- Skills Section
- Contact Section
- Footer


```html
<header class="header">
    <h1 class="logo">Nova Liev</h1>

    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle" class="menu-icon">☰</label>

    <nav>
        <ul class="nav-list">
            <li><a href="#hero" class="nav-link">Home</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
    </nav>
</header>
```

---

# Step 2: Apply Global CSS Styling

Style the website body and typography.

Example:

```css
body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    color: #333333;
    background-color: #f9f9f9;
    margin: 0;
}
```

---

# Step 3: Create Flexbox Navigation

Use Flexbox to align logo and navigation links.

Example:

```css
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

Navigation menu:

```css
.nav-list {
    display: flex;
    gap: 20px;
    list-style: none;
}
```

---

# Step 4: Build Hero Section using Flexbox

Arrange text and image using Flexbox.

Example:

```css
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

---

# Step 5: Responsive Skills Layout

Use Flexbox with wrapping.

Example:

```css
.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
```

---

# Step 6: Mobile Navigation Menu

Create responsive navigation using checkbox toggle.

HTML:

```html
<input type="checkbox" id="menu-toggle">
<label for="menu-toggle" class="menu-icon">☰</label>
```

CSS:

```css
#menu-toggle {
    display: none;
}

.menu-icon {
    display: none;
}
```

---

# Step 7: Responsive Design using Media Queries

Apply responsive design for mobile devices.

Example:

```css
@media (max-width: 768px) {

    .menu-icon {
        display: block;
    }

    .nav-list {
        flex-direction: column;
    }

    .footer {
        flex-direction: column;
    }
}
```

---

# Step 8: Footer Layout

Create responsive footer with Flexbox.

Example:

```css
.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```
