// script.js

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});

// Sample projects data
const projects = [
    {
        title: 'Project 1',
        description: 'Description for project 1.',
        image: 'project1.jpg'
    },
    {
        title: 'Project 2',
        description: 'Description for project 2.',
        image: 'project2.jpg'
    },
    {
        title: 'Project 3',
        description: 'Description for project 3.',
        image: 'project3.jpg'
    }
];

const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});
