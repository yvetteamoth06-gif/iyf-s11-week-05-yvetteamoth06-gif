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
    });
});

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
