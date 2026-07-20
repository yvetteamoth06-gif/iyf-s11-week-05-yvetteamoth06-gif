console.log("DOM script successfully loaded!");

// getElementById - returns single element
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// getElementsByClassName - returns HTMLCollection (live)
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// getElementsByTagName - returns HTMLCollection (live)
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// querySelector - returns first match
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// querySelectorAll - returns NodeList (static)
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// Practice 1: The h1 element
const h1 = document.querySelector("h1");
console.log(h1);

// Practice 2: All elements with class "content"
const allContent = document.querySelectorAll(".content");
console.log(allContent);

// Practice 3: The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log(form);

// Practice 4: The email input
const email = document.getElementById("email");
console.log(email);

// Practice 5: All list items in the nav
const listItems = document.querySelectorAll("nav li");
console.log(listItems);

// Practice 6: The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink);

// Practice 7: The last paragraph
const lastParagraph = document.querySelector("article p:last-of-type");
console.log(lastParagraph);

// ================================
// Task 9.2 - Traversing the DOM
// ================================

// Exercise
const nav = document.querySelector("nav");

// Parent
console.log(nav.parentElement);

// Children
console.log(nav.children);
console.log(nav.firstElementChild);
console.log(nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log(article.nextElementSibling);
console.log(article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log(navLinks);

// ================================
// Practice Task 1
// Select the header, then navigate to the nav inside it
// ================================
const pageHeader = document.querySelector("header");
console.log(pageHeader.querySelector("nav"));

// ================================
// Practice Task 2
// Select the first nav-link, then get its parent li
// ================================
const firstNavLink2 = document.querySelector(".nav-link");
console.log(firstNavLink2.parentElement);

// ================================
// Practice Task 3
// Select the article, then get its next sibling (section)
// ================================
console.log(article.nextElementSibling);

// ================================
// Practice Task 4
// Select the ul, then get all its child li elements
// ================================
const ul = document.querySelector("ul");
console.log(ul.children);

// ================================
// Practice Task 5
// Start from the footer and navigate up to the body
// ================================
const footer = document.querySelector("footer");
console.log(footer.parentElement);

// ================================
// Task 9.3 - Modifying Content
// Exercise 1
// ================================

const heading = document.querySelector("h1");

// Reading text
console.log(heading.textContent);
console.log(heading.innerText);

// Modifying text
heading.textContent = "Welcome to My DOM Practice";
// Task 9.3 - Modifying Content


const articleElement = document.querySelector("article");

articleElement.innerHTML = `
<h2>Updated Article</h2>
<p>This article has been updated using JavaScript.</p>
`;
// ================================
// Task 9.4 - Adding & Removing Elements
// ================================

// Exercise 1: Creating Elements

const newParagraph = document.createElement("p");
newParagraph.textContent = "✨ I am a shiny new paragraph created by JavaScript!";
newParagraph.className = "content highlight";

// Add to article
article.appendChild(newParagraph);
// Remove the footer

const footer = document.querySelector("footer");
footer.remove();
// Clone the first navigation item

const navItem = document.querySelector(".nav-link").parentElement;

const clone = navItem.cloneNode(true);

clone.querySelector("a").textContent = "Blog";

document.querySelector(".nav-list").appendChild(clone);
function addNavItem(text, href) {
    const li = document.createElement("li");

    const link = document.createElement("a");

    link.textContent = text;
    link.href = href;
    link.className = "nav-link";

    li.appendChild(link);

    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Portfolio", "/portfolio");
addNavItem("Services", "/services");
function addNavItem(text, href) {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.textContent = text;
    link.href = href;
    link.className = "nav-link";

    li.appendChild(link);

    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "#");
addNavItem("Portfolio", "#");
// ================================
// Task 10 - Event Listeners
// ================================

// Create a button
const clickButton = document.createElement("button");
clickButton.textContent = "Click Me";
document.body.appendChild(clickButton);

// Adding event listeners
clickButton.addEventListener("click", function () {
    console.log("Button clicked!");
});

// Arrow function
clickButton.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

clickButton.addEventListener("click", handleClick);

// Remove the named event listener
clickButton.removeEventListener("click", handleClick);
// ================================
// Task 10 - Different Event Types
// ================================

// Mouse events
clickButton.addEventListener("dblclick", () => {
    console.log("Button double-clicked!");
});

clickButton.addEventListener("mouseenter", () => {
    console.log("Mouse entered button");
});

clickButton.addEventListener("mouseleave", () => {
    console.log("Mouse left button");
});

// Keyboard events
const input = document.getElementById("name");

input.addEventListener("keydown", () => {
    console.log("Key pressed down");
});

input.addEventListener("keyup", () => {
    console.log("Key released");
});

// Form event
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted!");
});

// Input events
input.addEventListener("focus", () => {
    console.log("Input focused");
});

input.addEventListener("blur", () => {
    console.log("Input lost focus");
});

input.addEventListener("input", () => {
    console.log("Typing:", input.value);
});

// Window event
window.addEventListener("load", () => {
    console.log("Page loaded");
});

// ================================
// Task - Counter Project
// ================================

// Create counter display
let count = 0;

const counterDisplay = document.createElement("h2");
counterDisplay.textContent = count;
document.body.appendChild(counterDisplay);

// Create + button
const increaseBtn = document.createElement("button");
increaseBtn.textContent = "+";
document.body.appendChild(increaseBtn);

// Create - button
const decreaseBtn = document.createElement("button");
decreaseBtn.textContent = "-";
document.body.appendChild(decreaseBtn);

// Create Reset button
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset";
document.body.appendChild(resetBtn);

// Increase count
increaseBtn.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = count;
});

// Decrease count (cannot go below 0)
decreaseBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        counterDisplay.textContent = count;
    }
});

// Reset count
resetBtn.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = count;
});
// ================================
// Task 10 - Event Object
// ================================

// Mouse click event
document.addEventListener("click", function (event) {
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);

    // Prevent default action only for links
    if (event.target.tagName === "A") {
        event.preventDefault();
    }
});

// Keyboard events
document.addEventListener("keydown", function (event) {
    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});
// ================================
// Keyboard Shortcuts
// ================================

document.addEventListener("keydown", function (event) {

    // Ctrl + S
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // Escape
    if (event.key === "Escape") {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    }

    // Ctrl + Enter
    if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        document.getElementById("contact-form").requestSubmit();
    }

});
// ================================
// Event Bubbling Example
// ================================

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandparent.addEventListener("click", () => {
    console.log("Grandparent clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent clicked");
});

child.addEventListener("click", () => {
    console.log("Child clicked");
});
// ================================
// Event Bubbling Example
// ================================

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// Click on Child - what order do the logs appear?
// Answer: Child → Parent → Grandparent (bubbling up)

// ================================
// Event Delegation
// ================================

// Function to handle clicks
function handleClick(event) {
    console.log("You clicked:", event.target.textContent);
}

// Delegate clicks to the parent <ul>
document.querySelector("ul").addEventListener("click", function (event) {

    // Check if a list item was clicked
    if (event.target.matches("li")) {
        handleClick(event);
    }

    // If the click was on the link inside the li,
    // handle it as well.
    if (event.target.matches("a")) {
        console.log("You clicked link:", event.target.textContent);
    }
});
// ================================
// Form Validation
// ================================

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Real-time validation
nameInput.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function (event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form data:", data);

    showSuccess("Form submitted successfully!");
    form.reset();
});

// Helper functions
function showError(input, message) {
    input.style.border = "2px solid red";
    console.log(message);
}

function clearError(input) {
    input.style.border = "";
}

function showSuccess(message) {
    alert(message);
}


