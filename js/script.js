/*

<div class="col-4">
        <div class="card text-start">
          <img class="card-img-top" src="img/angela-caroll-chief-editor.jpg" alt="Title">
          <div class="card-body">
            <h4 class="card-title">Nome</h4>
            <p class="card-text">Ruolo</p>
          </div>
        </div>
</div>
*/

"use strict";

const teamMembers = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    picture: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    picture: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    picture: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    picture: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    picture: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    picture: "barbara-ramos-graphic-designer.jpg",
  } 
];


const rowEl = document.querySelector(".row");
console.log(rowEl);



for (let i = 0; i < teamMembers.length; i++) {
 printCol(teamMembers[i]);
}



function printCol(member) {
  const col = document.createElement("div");
  col.classList.add("col-4");
  const template = `
        <div class="card text-start my-2 text-center">
            <img class="card-img-top" src="img/${member.picture}" alt="Title">
            <div class="card-body">
                <h4 class="card-title">${member.name}</h4>
                <p class="card-text">${member.role}</p>
            </div>
        </div>
    `;
    col.innerHTML = template;

    rowEl.append(col);
}

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
  const newMember =  {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    picture: document.getElementById('picture').value,
  }

  teamMembers.push(newMember);
  printCol(newMember);
});