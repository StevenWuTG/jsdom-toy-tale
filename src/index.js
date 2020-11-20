// starter code 
let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

// dom querys 
const toyCollection = document.querySelector("div#toy-collection")
const toyForm = document.querySelector("form.add-toy-form")

// debugger

// fetch
console.log("hello is this working")

function loadToys() {
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => {
    // console.log(data)
    // renderToy(data)
    data.forEach(element => {renderToy(element)})

  })
}
loadToys()


// load toys data 
function renderToy(data) {
  
    const card = document.createElement("div")
    const h2 = document.createElement("h2")
    const img = document.createElement("img")
    const p = document.createElement("p")
    const likeButton = document.createElement("button")
    // meta data 
    card.classList.add("card") 
    card.dataset.id = data.id
    // debugger
    h2.textContent = data.name
    img.src = data.image
    img.classList.add("toy-avatar")
    p.textContent = data.likes
    likeButton.classList.add("like-btn")
    likeButton.textContent = "Like"

    card.append(h2,img,p,likeButton)

    toyCollection.append(card)


}


toyForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    // const name = document.querySelector("input.input-text")
    // const image = document.querySelector("")
    // debugger
    const newToy = {
      'name': e.target.name.value,
      'image': e.target.image.value,
      'likes': 0
    }
    
     fetch("http://localhost:3000/toys", {
      method: 'POST', 
      headers: 
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      
      body: JSON.stringify(newToy) 
      })
      .then(response => response.json()
      .then(toyObj => {
        renderToy(toyObj)
      
      }))

})

