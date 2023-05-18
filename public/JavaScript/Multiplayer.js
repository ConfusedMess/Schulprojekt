function Player1Placementend(){
    alignment = "h"
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
      document.getElementById("ButtonBox").style.visibility = "hidden";
      document.getElementById("Player1Field").style.visibility = "hidden";
      document.getElementById("EnemieTable").style.visibility = "visible";
      document.getElementById("ButtonBoxPlayer2").style.visibility = "visible";
      document.getElementById("labelv").remove;
      document.getElementById("h").remove;
      document.getElementById("labelh").remove;
      document.getElementById("v").remove;
      ShowModal('FirstPlayerChangeModal');
      CurrentPlayer = 2;
      isVsBot = false;
  }
  else {
    ShowModal('NotAssignedModal');
  }
}
function RemovePlayer2Indicator(place){
    RemovePlacementIndicator(place);
}
function Player2Indicator(place){
    if(CurrentPlayer === 2){
        place = 2+place;
       PlacementIndicator(place)
    }
    else{
        ShotIndicator(place)
    }
}
