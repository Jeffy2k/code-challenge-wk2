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
  createForm();
  const main = document.querySelector("main");
  //creates a h2 element for each animal
  characters.forEach((animal) => {
    // individualName(animal)
    const h2 = document.createElement("h2");
    h2.addEventListener("click", () => {
      const i = animal.id;
      createAnimalCard(characters[i - 1]);
    });
    h2.innerHTML = animal.name;
    main.appendChild(h2);
});
}


//deletes the animal details from the page and then calls the fetchBooks() which renders the list of anima names on the page;
function deleteBox(e) {
  e.target.parentNode.remove();
  return fetchBooks();
}

function createForm(){
let main = document.querySelector('main');
let container = document.createElement('div');
container.id = 'container'
container.innerHTML = `
<div class="container">
<form id="submission" >
  <label for="fname">Animal Name</label>
  <input type="text" id="fname" name="animalname" placeholder="Animal Name..">

  <label for="image">Image Url</label>
  <input type="url" id="imageurl" placeholder="image url..">

  <input type="submit" id = "submit"value="Submit">
</form>
</div>
`
document.querySelector('main').appendChild(container)

document.querySelector("#submit").addEventListener("click", handleSubmission)
}



//creates an animal card
function createAnimalCard(index) {
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      const obj = index; //assigns the content of the element in the specified index the variable name obj;
      const card = document.getElementsByClassName("demo");
      let button = document.createElement("button"); //create the back button to enable one to return to the list of animal names without having to refresh the page;
      button.addEventListener("click", deleteBox);
      button.id = "back";
      button.textContent = "BACK";
      let list = document.createElement("div"); //create a div where animal's details will be shown;
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

//adds the animal votes by one when called;
function tallyingVotes(obj) {
  console.log("hello world");
  fetch(url)
    .then((resp) => resp.json())
    .then((result) => {
      let text = document.querySelector("#totalvotes");
      message = `Votes: ${obj + 1}`;
      return (document.querySelector("#totalvotes").textContent = message);
    });
}


function handleSubmission(e){
  e.preventDefault();
  let animalname = document.getElementById("fname").value;
  let imageurl = document.getElementById("imageurl").value;
 let newAnimal = {
  name: (animalname),
  image:(imageurl),
  votes:0
 }
 addAnimal(newAnimal);
 fetchBooks(characters);

}

function addAnimal(newAnimal){
fetch(url,{
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(newAnimal)
})
.then(resp => resp.json())
.then(result => console.log(result))


}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  tallyingVotes();
});
