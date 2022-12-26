function flipCard(event){
    let card = document.querySelector("#card > .card-faces");
    card.classList.contains("flip") ? card.classList.remove("flip") : card.classList.add("flip");
  }