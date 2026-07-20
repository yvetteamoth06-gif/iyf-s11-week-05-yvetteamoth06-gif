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

