//assigns the url the variable url for easier access;
const url = "http://localhost:3000/characters";

//fetches data from the server, converts it into a json object and returns a function that will render the results
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch(url)
    .then((resp) => resp.json())
    .then((characters) => renderAnimals(characters));
  return renderAnimals;
}

//rendering animal names on the page
function renderAnimals(characters) {
  const main = document.querySelector("main"); //select the main element

  //creates a h2 element for each animal
  characters.forEach((animal) => {
    const h2 = document.createElement("h2");
    h2.className = "li";
    h2.addEventListener("click", () => {
      //adds click event to the h2 elements
      if (animal.id === 1) {
        //a specific function is called depending on the animal id;
        getMrCute();
      } else if (animal.id === 2) {
        getMxMonkey();
      } else if (animal.id === 3) {
        getMsZebra();
      } else if (animal.id === 4) {
        getDrLion();
      } else if (animal.id === 5) {
        getMmePanda();
      }
    });

    h2.innerHTML = animal.name;
    main.appendChild(h2);
  });
}

//getting Mr Cute's details
function getMrCute() {
  //fetches the data from db.json
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[0]; //assigns the content of the element in the specified index the variable name obj;
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button"); //create the back button to enable one to return to the list of animal names without having to refresh the page;
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div"); //create a div where mr cute's details will be shown;
      list.className = "card";
      //adding contents of the div that'll be displayed on the page;
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
    </div>
    </div>
    `;

      document.querySelector("#demo").appendChild(list); //add the div(list) created to the div with the id demo;
      list.appendChild(button); //adding the back button to the page;
    });
  //removes the list of animal names from the page so that only the animal details are displayed;
  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

//getting Mx Monkey's details
function getMxMonkey() {
  //fetches the data from db.json
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[1]; //assigns the content of the element in the specified index the variable name obj;
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button"); //create the back button to enable one to return to the list of animal names without having to refresh the page
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div"); //create a div where Mx Monkey's details will be shown;
      list.className = "card";
      list.className = "card";
      //adding contents of the div that'll be displayed on the page;
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
      <div class="details">
       <h2 id = "name">${obj.name}</h2>
       <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
       <div id = "votes">
       <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
      </div>
      </div>
    `;
      document.querySelector("#demo").appendChild(list); //add the div(list) created to the div with the id demo;
      list.appendChild(button); //adding the back button to the page;
    });
  //removes the list of animal names from the page so that only the animal details are displayed;

  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

//getting Ms Zebra's details
function getMsZebra() {
  //fetches the data from db.json
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[2]; //assigns the content of the element in the specified index the variable name obj;
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button"); //create the back button to enable one to return to the list of animal names without having to refresh the page;
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div"); //create a div where Mx Monkey's details will be shown;
      list.className = "card";
      //adding contents of the div that'll be displayed on the page;
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
    </div>
    </div>
    `;
      document.querySelector("#demo").appendChild(list); //add the div(list) created to the div with the id demo;
      list.appendChild(button); //adding the back button to the page;
    });
  //removes the list of animal names from the page so that only the animal details are displayed;

  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

//getting Dr Lion
function getDrLion() {
  //fetches the data from db.json
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[3]; //assigns the content of the element in the specified index the variable name obj;
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button"); //create the back button to enable one to return to the list of animal names without having to refresh the page
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div"); //create a div where Mx Monkey's details will be shown;
      list.className = "card";
      //adding contents of Mr Cute's div that'll be displayed on the page;
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
      <div class="details">
       <h2 id = "name">${obj.name}</h2>
       <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
       <div id = "votes">
       <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
      </div>
      </div>
    `;
      document.querySelector("#demo").appendChild(list); //add the div(list) created to the div with the id demo;
      list.appendChild(button); //adding the back button to the page;
    });
  //removes the list of animal names from the page so that only the animal details are displayed;

  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

//getting Mme Panda
function getMmePanda() {
  //fetches the data from db.json
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = result[4]; //assigns the content of the element in the specified index the variable name obj;
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button"); //create the back button to enable one to return to the list of animal names without having to refresh the page;
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div"); //create a div where Mme Panda's details will be shown;
      list.className = "card";
      //adding contents of the div that'll be displayed on the page;
      list.innerHTML = `
      <img id="pic" src="${obj.image}"/>
    <div class="details">
     <h2 id = "name">${obj.name}</h2>
     <h2 id= "totalvotes" >Votes:  ${obj.votes}</h2>
     <div id = "votes">
     <button onclick="tallyingVotes(${obj.votes})" id = "btn">VOTE</button>
    </div>
    </div>
    `;
      document.querySelector("#demo").appendChild(list); //add the div(list) created to the div with the id demo;
      list.appendChild(button); //adding the back button to the page;
    });
  //removes the list of animal names from the page so that only the animal details are displayed;

  let e = document.querySelector("main");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

//deletes the animal details from the page and then calls the fetchBooks() which renders the list of anima names on the page;
function deleteBox(e) {
  e.target.parentNode.remove();
  return fetchBooks();
}

//adds the animal votes by one when called;
function tallyingVotes(obj) {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      let text = document.querySelector("#totalvotes");
      text = `Votes: ${obj + 1}`;
      return (document.querySelector("#totalvotes").textContent = text);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  tallyingVotes();
});
