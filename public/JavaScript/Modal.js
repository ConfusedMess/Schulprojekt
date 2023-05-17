var modal;


// Wenn die Funktion aufgrufen wird wird der Genannte modal Gezeigt
function ShowModal(ID) {
    modal = document.getElementById(`${ID}`);
  modal.style.display = "block";
}

// wenn aufr x gedrückt wird wird der Modal geschlossen
function ModalClose() {
  modal.style.display = "none";
}

// Wenn neben das Modal gedrückt wird wird der Modal Geschlossen
window.onclick = function(event) {
  if (event.target == modal && modal.id === "NotAssignedModal") {
    location.reload()
  }
  else if(event.target == modal){
    modal.style.display = "none";
  }
}
