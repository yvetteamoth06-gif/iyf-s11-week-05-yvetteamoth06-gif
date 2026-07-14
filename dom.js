console.log("DOM script successfully loaded!");

// 1. Select the elements we want to work with
const articleTitle = document.querySelector('.title');
const paragraphs = document.querySelectorAll('.content');
const form = document.getElementById('contact-form');

// 2. Change the title text when you click on it!
articleTitle.addEventListener('click', () => {
    articleTitle.textContent = "You clicked the title! 🎉";
    articleTitle.style.color = "darkblue";
});

// 3. Highlight paragraphs when your mouse hovers over them
paragraphs.forEach(paragraph => {
    paragraph.addEventListener('mouseenter', () => {
        paragraph.classList.add('highlight');
    });
    paragraph.addEventListener('mouseleave', () => {
        paragraph.classList.remove('highlight');
    }); // Added missing closing bracket here
}); // Added missing closing bracket here

// 4. Handle form submission without reloading the page
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stops the page from refreshing
    
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    
    if (nameValue && emailValue) {
        alert(`Thank you, ${nameValue}! We will email you at ${emailValue}.`);
    } else {
        alert("Please fill out both fields!");
    }
});

// 5. Create a brand new button element
const newBtn = document.createElement('button');
newBtn.textContent = "Add Paragraph";
newBtn.style.marginTop = "10px";
newBtn.style.display = "block"; // Put it on its own line

// 6. Insert this button inside the <article> element
const article = document.querySelector('article');
article.appendChild(newBtn);

// 7. Make the button actually add a paragraph when clicked
newBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.className = 'content';
    newParagraph.textContent = "✨ I am a shiny new paragraph created by JavaScript!";
    
    // Append it to the article
    article.appendChild(newParagraph);
}); 
// 8. Create a brand new "Remove" button element
const removeBtn = document.createElement('button');
removeBtn.textContent = "Remove Last Paragraph";
removeBtn.style.marginTop = "10px";
removeBtn.style.marginLeft = "10px"; // Put some space between the buttons
removeBtn.style.backgroundColor = "#ff4d4d"; // Make it red so it looks like a delete button
removeBtn.style.color = "white";
removeBtn.style.border = "none";
removeBtn.style.padding = "5px 10px";
removeBtn.style.cursor = "pointer";

// 9. Insert this button right next to the add button inside the <article>
article.appendChild(removeBtn);

// 10. Make the button actually remove the last paragraph when clicked
removeBtn.addEventListener('click', () => {
    const allParagraphs = article.querySelectorAll('.content');
    
    // Check if there are any paragraphs left to delete
    if (allParagraphs.length > 0) {
        const lastParagraph = allParagraphs[allParagraphs.length - 1];
        lastParagraph.remove(); // This deletes the element from the DOM!
    } else {
        alert("No more paragraphs left to remove!");
    }
});
// 11. Create and inject Dark Mode CSS styles dynamically
const styleTag = document.createElement('style');
styleTag.textContent = `
    .dark-mode {
        background-color: #121212 !important;
        color: #e0e0e0 !important;
    }
    .dark-mode .container {
        border-color: #333 !important;
        background-color: #1e1e1e !important;
    }
    .dark-mode input {
        background-color: #333 !important;
        color: #fff !important;
        border: 1px solid #555 !important;
    }
`;
document.head.appendChild(styleTag);

// 12. Create the toggle button
const themeBtn = document.createElement('button');
themeBtn.textContent = "🌙 Dark Mode";
themeBtn.style.position = "fixed";
themeBtn.style.top = "20px";
themeBtn.style.right = "20px";
themeBtn.style.padding = "10px 15px";
themeBtn.style.fontSize = "14px";
themeBtn.style.cursor = "pointer";
themeBtn.style.borderRadius = "20px";
themeBtn.style.border = "1px solid #ccc";
themeBtn.style.backgroundColor = "#fff";
themeBtn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";

// 13. Add the button to the page
document.body.appendChild(themeBtn);

// 14. Toggle Dark Mode when clicked
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Switch the button text & icon depending on the mode
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = "☀️ Light Mode";
        themeBtn.style.backgroundColor = "#333";
        themeBtn.style.color = "#fff";
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
        themeBtn.style.backgroundColor = "#fff";
        themeBtn.style.color = "#000";
    }
});
