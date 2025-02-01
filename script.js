function opentab(tabSelector, contentSelector) {
    document.querySelector('.active-link')?.classList.remove('active-link');

    document.querySelector(tabSelector).classList.add('active-link');

    document.querySelector('.active-tab')?.classList.remove('active-tab');
    
    document.querySelector(contentSelector).classList.add('active-tab');
}

function removeactive(){
    const prev = document.querySelector(active-link);
    if(prev){
        prev.classList.remove(active-link)
    }
}

function removeactivetab(){
    const prev = document.querySelector(active-tab);
    if(prev){
        prev.classList.remove(active-tab)
    }
}

// Project Dynamic Content
const projects = [
    { title: "Portfolio Website", image: "./images/work-1.png", link: "#" },
    { title: "Simple Blog app - React", image: "./images/work-2.png", link: "https://traxx11.github.io/Portfolio-Website/" }
];

function loadProjects() {
    const projectContainer = document.querySelector(".project-grid");
    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        projectContainer.appendChild(projectCard);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);
