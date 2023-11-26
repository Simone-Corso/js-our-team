//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

//Creare l’array di oggetti con le informazioni fornite.

const containerElement = document.querySelector('main > section.team');

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO'
        profile_image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor'
        profile_image: 'angela-caroll-chief-editor.jpg'

    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager'
        profile_image: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager'
        profile_image: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer'
        profile_image: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
        profile_image: 'barbara-ramos-graphic-designer.jpg'
    },
];

// creo un ciclo for

for (let index = 0; index < team.length; index++) {
    const teams = team [index];

    const teamCardEl = document.createElement('article');

    teamCardEl.innerHTML = 
        
    `<h1>
        Name surname
    </h1>
    <h4>
        role
    </h4>
    <div class="team-image">
        <img src="" alt="">
    </div>`;
   
    containerElement.appendChild(teamCardEl);
    
}


