// Projekte-Daten
const projekte = [
    {
        name: "Laboratory",
        beschreibung: "Eine Webseite, um meine Projekte darzustellen.",
        link: "#",
        bild: "projekt1.jpg"
    },
    {
        name: "Blog Plattform",
        beschreibung: "Eine Plattform für Blogs mit einem minimalistischen Design.",
        link: "#",
        bild: "projekt2.jpg"
    }
];

// Projekte dynamisch hinzufügen
const projektContainer = document.getElementById("projekt-container");

projekte.forEach(projekt => {
    const projektElement = document.createElement("div");
    projektElement.classList.add("projekt");

    projektElement.innerHTML = `
      <div class="details">
        <h3>${projekt.name}</h3>
        <p>${projekt.beschreibung}</p>
        <a href="${projekt.link}" target="_blank">Mehr erfahren</a>
      </div>
      <img src="${projekt.bild}" alt="${projekt.name}">
    `;

    projektContainer.appendChild(projektElement);
});