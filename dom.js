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
const header = document.querySelector("header");
console.log(header.querySelector("nav"));

// ================================
// Practice Task 2
// Select the first nav-link, then get its parent li
// ================================
const firstNavLink = document.querySelector(".nav-link");
console.log(firstNavLink.parentElement);

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

