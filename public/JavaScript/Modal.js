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

// Wenn neben das Modal gedrükt wird wird der Modal Geschlossen
window.onclick = function (event) {
  if (event.target == modal) {
    switch (modal.id) {
      case "NotAssignedModal":
        location.href = '/ship/show';
        break;
      case "VictoryModal":
        location.href = '/dashboard';
        break;
      default:
        modal.style.display = "none";
    }
  }
}
