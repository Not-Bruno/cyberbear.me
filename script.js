// Projekte-Daten
const projekte = [
    {
        name: "Laboratory",
        beschreibung: "This project provides a fully Docker-based penetration testing lab.<br>It offers a flexible and modular solution for security and penetration testing in an isolated and controlled environment.<br>With the Setup file, users can quickly and easily configure and deploy the lab by selecting and launching the necessary containers. The configuration is modular, allowing various security tools, exploit servers, and target machines to be added or removed depending on the specific needs of each test. This makes the lab highly customizable for different penetration testing scenarios. The pentest lab runs on Docker, enabling easy deployment and management of containers. The entire infrastructure is automatically set up through the setup script, eliminating the need for complex manual configuration. After the initial setup, the lab can be quickly started again using the Startup file to continue working.",
        link: "https://github.com/Not-Bruno/laboratory",
        bild: "images/projekt1.png"
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