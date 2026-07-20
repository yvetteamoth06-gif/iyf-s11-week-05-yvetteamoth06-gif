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

