// Mobile Navigation Functions
function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    const toggleIcon = document.querySelector('.nav-toggle');
    const spans = toggleIcon.querySelectorAll('span');
    
    navMenu.classList.toggle('active');
    spans.forEach(span => span.classList.toggle('active'));
}

function closeMenu() {
    const navMenu = document.querySelector('nav ul');
    const toggleIcon = document.querySelector('.nav-toggle');
    const spans = toggleIcon.querySelectorAll('span');
    
    navMenu.classList.remove('active');
    spans.forEach(span => span.classList.remove('active'));
}

// Tab Switching Function
function opentab(tabSelector, contentSelector) {
    // Remove active-link class from previous active tab
    const activeLink = document.querySelector('.active-link');
    if (activeLink) {
        activeLink.classList.remove('active-link');
    }

    // Add active-link class to clicked tab
    document.querySelector(tabSelector).classList.add('active-link');

    // Remove active-tab class from previous active content
    const activeTab = document.querySelector('.active-tab');
    if (activeTab) {
        activeTab.classList.remove('active-tab');
    }

    // Add active-tab class to corresponding content
    document.querySelector(contentSelector).classList.add('active-tab');
}

// Projects Data
const projects = [
    {
        title: "Portfolio Website",
        image: "./images/work-1.png",
        description: "Personal portfolio website built with HTML, CSS, and JavaScript",
        
    },
    {
        title: "Simple Blog app - React",
        image: "./images/work-2.png",
        description: "A blog application built using React and modern web technologies",
        
    }
];

// Load Projects Function
function loadProjects() {
    const projectContainer = document.querySelector(".project-grid");
    
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            
        `;
        
        projectContainer.appendChild(projectCard);
    });
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
    loadProjects();

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const navMenu = document.querySelector('nav ul');
        const toggleButton = document.querySelector('.nav-toggle');
        
        if (!event.target.closest('nav') && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Handle smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});