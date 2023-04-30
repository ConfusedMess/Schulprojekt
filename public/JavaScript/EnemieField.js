function BeginGame() {
  AutoPlacementE();
  console.log("Efield"+BigShipsE.ship1)
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
    document.getElementById("table2").style.visibility = "visible";
    document.getElementById("EtableH").style.visibility = "visible";
    document.getElementById("TinyShipButton").style.visibility = "hidden";
    document.getElementById("SmallShipButton").style.visibility = "hidden";
    document.getElementById("MediumShipButton").style.visibility = "hidden";
    document.getElementById("BigShipButton").style.visibility = "hidden";
    document.getElementById("h").style.visibility = "hidden";
    document.getElementById("v").style.visibility = "hidden";
    document.getElementById("Autoplacement").style.visibility = "hidden";
    document.getElementById("BeginGame").style.visibility = "hidden";
    document.getElementById("label2").style.visibility = "hidden";
    document.getElementById("label1").style.visibility = "hidden";
  }
  else {
    alert("not all ships assigned");
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
  let marked = true;
  let specialcounter;//copied from notmarked
  let specialcounter2;
  if (InClickedArray(place) === true) {
    alert("error");
  }
  else {
    for (specialcounter = 1; specialcounter < 5; specialcounter++) {
      if (TinyShipsE[`shipH${specialcounter}`] === place) {
        TinyShipsE[`shipH${specialcounter}`] = true;
      }
    }
    for (specialcounter = 1; specialcounter < 4; specialcounter++) {
      for (specialcounter2 = 0; specialcounter2 < SmallShipsE[`ship${specialcounter}H`].length; specialcounter2++) {
        if (SmallShipsE[`ship${specialcounter}H`][specialcounter2] === place) {
          SmallShipsE[`ship${specialcounter}H`][specialcounter2] = true;
        }
      }
    }
    for (specialcounter = 1; specialcounter < 3; specialcounter++) {
      for (specialcounter2 = 0; specialcounter2 < MediumShipsE[`ship${specialcounter}H`].length; specialcounter2++) {
        if (MediumShipsE[`ship${specialcounter}H`][specialcounter2] === place) {
          MediumShipsE[`ship${specialcounter}H`][specialcounter2] = true;
        }
      }
    }
    for (specialcounter2 = 0; specialcounter2 < BigShipsE[`ship1H`].length; specialcounter2++) {
      if (BigShipsE[`ship1H`][specialcounter2] === place) {
        BigShipsE[`ship1H`][specialcounter2] = true;
      }
    }
    if (marked = true) {
      document.getElementById(`2${place}`).style.backgroundColor = "#cc6600";
      clicked.push(place)
    }
    else {
      document.getElementById(`2${place}`).style.backgroundColor = "orange";// save all marked places and go through them in remove shotindicator
      clicked.push(place);
    }
  }
}