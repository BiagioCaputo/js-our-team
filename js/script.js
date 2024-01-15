
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

//stampo in console i vari elementi dell'array di oggetti separati

//Giro tutti gli oggetti dell'array con un ciclo for e li salvo singolarmente in una variabile 
for(let i = 0; i < teamMembers.length; i++){
    const member = teamMembers[i];
    //Giro tutti gli elementi in ogni oggetto stampandoli singolarmente
    for(let key in member) {
        console.log(`${key} : ${member[key]}`)
    }
}

