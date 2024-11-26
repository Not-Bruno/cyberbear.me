// Beispiel-Daten
const projects = [
    {
        title: "Projekt 1",
        description: "Dies ist eine kurze Beschreibung von Projekt 1.",
        image: "https://via.placeholder.com/300x200",
        link: "#"
    },
    {
        title: "Projekt 2",
        description: "Dies ist eine kurze Beschreibung von Projekt 2.",
        image: "https://via.placeholder.com/300x200",
        link: "#"
    },
    {
        title: "Projekt 3",
        description: "Dies ist eine kurze Beschreibung von Projekt 3.",
        image: "https://via.placeholder.com/300x200",
        link: "#"
    }
];

// Projekte dynamisch hinzufügen
const projectContainer = document.getElementById("project-container");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="content">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Zum Projekt</a>
        </div>
    `;

    projectContainer.appendChild(projectCard);
});
