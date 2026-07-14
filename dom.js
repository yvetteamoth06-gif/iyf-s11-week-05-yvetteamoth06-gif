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
