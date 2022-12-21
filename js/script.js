/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede e rendere la pagina gradevole (potete usare lo screen in allegato come spunto
*/

// # Array di oggetti con i dati forniti
const team = [
    {fullName: 'Wayne Barnett', role: 'Founder & CEO', image: 'wayne-barnett-founder-ceo.jpg' },
    {fullName: 'Angela Caroll', role: 'Chief Editor', image: 'angela-caroll-chief-editor.jpg' },
    {fullName: 'Walter Gordon', role: 'Office Manager', image: 'walter-gordon-office-manager.jpg' },
    {fullName: 'Angela Lopez', role: 'Social Media Manager', image: 'angela-lopez-social-media-manager.jpg' },
    {fullName: 'Scott Estrada', role: 'Developer', image: 'scott-estrada-developer.jpg' },
    {fullName: 'Barbara Ramos', role: 'Graphic Designer', image: 'barbara-ramos-graphic-designer.jpg' }
]

// # Recupero elemento dal DOM da riempire
const cardsSpace = document.getElementById('cards-space');

// Stampo in console info del team per ogni membro
for (let i = 0; i < team.length; i++){
    const currentTeammate = team[i];
    console.log(currentTeammate);

    cardsSpace.innerHTML += `
    <div class="col-4">
    <div class="card">
        <img src="img/${currentTeammate.image}" class="card-img-top" alt="${currentTeammate.fullName}">
        <div class="card-body text-center">
          <h5 class="card-title">${currentTeammate.fullName}</h5>
          <sub class="card-text">${currentTeammate.role}</sub>
        </div>
    </div>
    </div>
    `;
}