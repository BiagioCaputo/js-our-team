
//Creo l'array di oggetti 

const teamMembers = [
    { name: 'Wayne Barnett', role: 'Founder & CEO', memberImg: "wayne-barnett-founder-ceo.jpg"},
    { name: 'Angela Caroll', role: 'Chief Editor', memberImg: "angela-caroll-chief-editor.jpg"},
    { name: 'Walter Gordon', role: 'Office Manager', memberImg: "walter-gordon-office-manager.jpg"},
    { name: 'Angela Lopez', role: 'Social Media Manager', memberImg: "angela-lopez-social-media-manager.jpg"},
    { name: 'Scott Estrada', role: 'Developer', memberImg: "scott-estrada-developer.jpg"},
    { name: 'Barbara Ramos', role: 'Graphic Designer ', memberImg: "barbara-ramos-graphic-designer.jpg"}
]

console.log(teamMembers);


const membersLabel = document.getElementById("members-label");
/**************** Stampo in console i vari elementi dell'array di oggetti separati ****************/

//Giro tutti gli oggetti dell'array con un ciclo for e li salvo singolarmente in una variabile 
for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    //Giro tutti gli elementi in ogni oggetto stampandoli singolarmente
    for(let key in member) {
        console.log(`${key} : ${member[key]}`)
    }
}

/**************** Preparo la stampa degli oggetti dell'array nelle card del DOM ****************/

let membersCard ='';

//inizializzo il sistema row-col
membersCard += `<div class="row row-gap-5">`;

//creo un ciclo che persiste fino a quando non ho raggiunto la fine dell'array di elementi 
for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    //creo le card che si riempiranno con i paramentri forniti dagli oggetti nell'array
    membersCard += `
    <div class="col col-4">
        <div class="card">
            <img src="img/${member.memberImg}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${member.name}</h5>
                <p class="card-text text-center">${member.role}</p>
            </div>
        </div>
    </div>
    `;
}

membersCard += `</div>`;

//inserisco nell'html
membersLabel.innerHTML = membersCard;
