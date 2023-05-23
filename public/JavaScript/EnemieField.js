function BeginGame() {
  if (EnemieShipsPlaced === false){
    AutoPlacementE();
  }
  counter2 = 0;
  for (counter = 0; counter <= 4; counter++) {
    if (TinyShips.Assigned[counter2] === "n") {
      counter2++;
    }
  }
  for (counter = 0; counter <= 3; counter++) {
    if (SmallShips.Assigned[counter2] === "n") {
      counter2++;
    }
  }
  for (counter = 0; counter < 2; counter++) {
    if (MediumShips.Assigned[counter2] === "n") {
      counter2++;
    }
  }
  if (SmallShips.Assigned === "n") {
    counter2++;
  }

  if (counter2 === 0) {
    if (Initalise() === "error") {
    ShowModal('NoDifficultyModal');
    }
    else {
      document.getElementById("ButtonBox").style.visibility = "hidden";
      document.getElementById("EnemieTable").style.visibility = "visible";
      document.getElementById("Shipbox1").style.float = "left";
    }

  }
  else {
    ShowModal('NotAssignedModal');

  }
}
function InClickedArray(place) {
  let free = false;
  for (counter = 0; counter < clicked.length; counter++) {
    if (clicked[counter] === place)
      free = true;
  }
  return free;
}
function ShootAtEnemie(place) {
  let notMarked = true;
  let specialcounter;//copied from notmarked
  let specialcounter2;
  if (InClickedArray(place) === true) {
    if(auto){
      return false;
    }
    ShowModal('DoubleSelectModal');// unsicher ob richtiges Odal zugewiesen
  }
  else {
    for (specialcounter = 1; specialcounter < 5; specialcounter++) {
      if (TinyShipsE[`ship${specialcounter}`] === place) {
        TinyShipsE[`ship${specialcounter}H`] = true;
        notMarked = false
            ShowModal('DestroyedModal');
      }
    }
    for (specialcounter = 1; specialcounter < 4; specialcounter++) {
      for (specialcounter2 = 0; specialcounter2 < SmallShipsE[`ship${specialcounter}H`].length; specialcounter2++) {
        if (SmallShipsE[`ship${specialcounter}`][specialcounter2] === place) {
          SmallShipsE[`ship${specialcounter}H`][specialcounter2] = true;
          notMarked = false
          if (SmallShipsE[`ship${specialcounter}H`][0] === true && SmallShipsE[`ship${specialcounter}H`][1] === true){
                ShowModal('DestroyedModal');
          }
        }
      }
    }
    for (specialcounter = 1; specialcounter < 3; specialcounter++) {
      for (specialcounter2 = 0; specialcounter2 < MediumShipsE[`ship${specialcounter}H`].length; specialcounter2++) {
        if (MediumShipsE[`ship${specialcounter}`][specialcounter2] === place) {
          MediumShipsE[`ship${specialcounter}H`][specialcounter2] = true;
          notMarked = false
          if (MediumShipsE[`ship${specialcounter}H`][0] === true && MediumShipsE[`ship${specialcounter}H`][1] === true && MediumShipsE[`ship${specialcounter}H`][2] === true){
                ShowModal('DestroyedModal');
          }
        }
      }
    }
    for (specialcounter2 = 0; specialcounter2 < BigShipsE[`ship1H`].length; specialcounter2++) {
      if (BigShipsE[`ship1`][specialcounter2] === place) {
        BigShipsE[`ship1H`][specialcounter2] = true;
        notMarked = false
        if (BigShipsE[`ship1H`][0] === true && BigShipsE[`ship1H`][1] === true && BigShipsE[`ship1H`][2] === true && BigShipsE[`ship1H`][3] === true){
              ShowModal('DestroyedModal');
        }
      }
    }
    if (notMarked === true) {
      document.getElementById(`2${place}`).style.backgroundColor = "#cc0018";
      clicked.push(place)
      PlayerChange();
      //console.log('Nicht getroffen: '+place)
    }
    else {
      document.getElementById(`2${place}`).style.backgroundColor = "#07cc00";// save all marked places and go through them in remove shotindicator
      clicked.push(place);
      ShipfieldsNumberE--;
      if (ShipfieldsNumberE === 0){
            ShowModal('VictoryModal');
      }
      else {
      //console.log('Getroffen: '+place)
      //console.log('Noch '+ShipfieldsNumberE+' Schiffsfelder übrig')
      }
    }
  }
}
