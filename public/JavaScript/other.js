// der anfangs aktive radiobutton wird festgelegt
function PlayerChange() { // hier wird der spieler geändert
  if (1 === CurrentPlayer) {
    CurrentPlayer = 2;
    if (isVsBot){TestForShip(BotMove())}  // Wenn vs Bot gespielt wird rufe Bot auf
  }
  else {
    CurrentPlayer = 1;
  }
}

function TestForShip(place) { // hier wird geschuat ob das attackierte feld ein schiff besitz und falls ja wird die nummer der felder mit aktiven schiffen reduziert
  if (NotMarked(place)) {
    document.getElementById(place).style.backgroundColor = "red";
  }
  else {
    document.getElementById(place).style.backgroundColor = "yellow";
    ShipfieldsNumber--;
    if (ShipfieldsNumber === 0) {
      alert("Verloren! Alle deine Schiffe wurden zerstört");// muss erweitert werden
    }
  }
}

function ChangeAlignment(current) { // für die radio buttons
  document.getElementById(alignment).checked = false;
  alignment = current;
  document.getElementById(current).checked = true;
}

function SelectedButton() { // hier wird ein button auf weiß zurückgesetzt wenn er nicht mehr aktiv ist (muss in zukunft verbessert werden)
  switch (Buttonpressed) {
    case 0:
      break;
    case 1:
      document.getElementById("TinyShipButton").style.backgroundColor = "white";
    case 2:
      document.getElementById("SmallShipButton").style.backgroundColor = "white";
      break;
    case 3:
      document.getElementById("MediumShipButton").style.backgroundColor = "white";
      break;
    case 4:
      document.getElementById("BigShipButton").style.backgroundColor = "white";
      break;
  }
}

function PlaceTinyShip() {
  if (Buttonpressed != 1 && Buttonpressed < 5) {
    document.getElementById("TinyShipButton").style.backgroundColor = "grey";
    SelectedButton();
    Buttonpressed = 1;
  }
  else {
    SelectedButton();
    Buttonpressed = 0;
  }
  //else if (Buttonpressed === 1)
}

function PlaceSmallShip() {
  if (Buttonpressed != 2 && Buttonpressed < 5) {
    document.getElementById("SmallShipButton").style.backgroundColor = "grey";
    SelectedButton();
    Buttonpressed = 2;
  }
  else {
    SelectedButton();
    Buttonpressed = 0;
  }
  //else if (Buttonpressed === 1)
}

function PlaceMediumShip() {
  if (Buttonpressed != 3 && Buttonpressed < 5) {
    document.getElementById("MediumShipButton").style.backgroundColor = "grey";
    SelectedButton();
    Buttonpressed = 3;
  }
  else {
    SelectedButton();
    Buttonpressed = 0;
  }
}

function PlaceBigShip() {
  if (Buttonpressed != 4 && Buttonpressed < 5) {
    document.getElementById("BigShipButton").style.backgroundColor = "grey";
    SelectedButton();
    Buttonpressed = 4;
  }
  else {
    SelectedButton();
    Buttonpressed = 0;
  }
}


function TableClick(place) { // wenn man ein feld auswählt wird hier die gewählte position gespeichert und markiert
  if (Buttonpressed === 1) {
    for (counter2 = 0; counter2 <= 3; counter2++)
    // look if a ship is unassigned if yes assign it if not give error
    {
      if (TinyShips.Assigned[counter2] === "n" && NotMarkedAdvanced(place)) {
        counter2++;
        TinyShips[`ship${counter2}`] = place;
        counter2--
        TinyShips.Assigned[counter2] = "y"

        document.getElementById("TinyShipButton").style.backgroundColor = "white";
        document.getElementById(place).style.backgroundColor = "#339933";
        Buttonpressed = 0;
        break;
      } else if (counter2 === 3) {
        if (RandomGenerated === true) {
          return "error";
        }
        else {
          alert("error");
        }
      }
      

    }
  }
  if (Buttonpressed === 2) {
    if (alignment === "h") {
      if (place.length > 2) {
        GridNumber = place.slice(0, 2);
        GridChar = place.slice(2, 3);
      }
      else {
        GridNumber = place.slice(0, 1);
        GridChar = place.slice(1, 2);
      }

      for (counter = 0; counter < AllChars.length; counter++) {// goes up the alphabet one place
        if (AllChars[counter] === GridChar) {
          counter++;
          GridChar = AllChars[counter];
          if (counter === AllChars.length) { // ends function if the rightmost field was selected to prevent error
            break;
          }
          secondplace = GridNumber + GridChar;
          for (counter2 = 0; counter2 <= 2; counter2++)
          // look if a ship is unassigned if yes assign it if not give error
          {
            if (SmallShips.Assigned[counter2] === "n" && NotMarkedAdvanced(place) && NotMarkedAdvanced(secondplace)) {
              //Because arrays begin with 0 but my objects not
              counter2++;
              SmallShips[`ship${counter2}`][0] = place;
              SmallShips[`ship${counter2}`][1] = secondplace;
              counter2--;
              SmallShips.Assigned[counter2] = "y"


              // Mark fields and return button to default state
              document.getElementById(secondplace).style.backgroundColor = "#006600";
              document.getElementById("SmallShipButton").style.backgroundColor = "white";
              document.getElementById(place).style.backgroundColor = "#006600";
              Buttonpressed = 0;
              break;

            }
            else if (counter2 === 2) {
              if (RandomGenerated === true) {
                return "error";
              }
              else {
                alert("error");
              }
            }
          }
        }
      }
    }
    if (alignment === "v") {
      if (place.length > 2) {
        GridNumber = place.slice(0, 2);
        GridChar = place.slice(2, 3);
      }
      else {
        GridNumber = place.slice(0, 1);
        GridChar = place.slice(1, 2);
      }

      if (GridNumber <= 11) {// to prevent placing ships outside of field


        GridNumber++;
        secondplace = GridNumber + GridChar;
        for (counter2 = 0; counter2 <= 2; counter2++)
        // look if a ship is unassigned if yes assign it if not give error
        {
          if (SmallShips.Assigned[counter2] === "n" && NotMarkedAdvanced(place) && NotMarkedAdvanced(secondplace)) {
            //Because arrays begin with 0 but my objects not
            counter2++;
            SmallShips[`ship${counter2}`][0] = place;
            SmallShips[`ship${counter2}`][1] = secondplace;
            counter2--;
            SmallShips.Assigned[counter2] = "y"


            // Mark fields and return button to default state
            document.getElementById(secondplace).style.backgroundColor = "#006600";
            document.getElementById("SmallShipButton").style.backgroundColor = "white";
            document.getElementById(place).style.backgroundColor = "#006600";
            Buttonpressed = 0;
            break;

          }
          else if (counter2 === 2) {
            if (RandomGenerated === true) {
              return "error";
            }
            else {
              alert("error");
            }


          }
        }
      }

    }
  }
  else if (Buttonpressed === 3) {
    if (alignment === "h") {//looks if vertical or horizontal is selected
      if (place.length > 2) {
        GridNumber = place.slice(0, 2);
        GridChar = place.slice(2, 3);
      }
      else {
        GridNumber = place.slice(0, 1);
        GridChar = place.slice(1, 2);
      }
      for (counter = 0; counter < AllChars.length; counter++) {// goes up the alphabet one place
        if (AllChars[counter] === GridChar) {
          counter++;
          GridChar = AllChars[counter];
          if (counter === AllChars.length - 1) { // ends function if the rightmost field was selected to prevent error
            break;
          }
          secondplace = GridNumber + GridChar;
          counter++;
          GridChar = AllChars[counter];
          thirdplace = GridNumber + GridChar;
          for (counter2 = 0; counter2 < 2; counter2++)
          // look if a ship is unassigned if yes assign it if not give error
          {
            if (MediumShips.Assigned[counter2] === "n" && NotMarkedAdvanced(place) && NotMarkedAdvanced(secondplace)
              && NotMarkedAdvanced(thirdplace)) {
              //Because arrays begin with 0 but my objects not
              counter2++;
              MediumShips[`ship${counter2}`][0] = place;
              MediumShips[`ship${counter2}`][1] = secondplace;
              MediumShips[`ship${counter2}`][2] = thirdplace;

              counter2--;
              MediumShips.Assigned[counter2] = "y";


              // Mark fields and return button to default state
              document.getElementById(thirdplace).style.backgroundColor = "#003300";
              document.getElementById(secondplace).style.backgroundColor = "#003300";
              document.getElementById("MediumShipButton").style.backgroundColor = "white";
              document.getElementById(place).style.backgroundColor = "#003300";
              Buttonpressed = 0;
              break;

            }
            else if (counter2 === 1) {
              if (RandomGenerated === true) {
                return "error";
              }
              else {
                alert("error");
              }
            }
          }
        }
      }
    }
    if (alignment === "v") {//looks if vertical or horizontal is selected
      if (place.length > 2) {
        GridNumber = place.slice(0, 2);
        GridChar = place.slice(2, 3);
      }
      else {
        GridNumber = place.slice(0, 1);
        GridChar = place.slice(1, 2);
      }
      if (GridNumber <= 10) {// to prevent placing ships outside of field
        GridNumber++;
        secondplace = GridNumber + GridChar;
        GridNumber++;
        thirdplace = GridNumber + GridChar;
        for (counter2 = 0; counter2 <= 2; counter2++) {
          if (MediumShips.Assigned[counter2] === "n" && NotMarkedAdvanced(place) && NotMarkedAdvanced(secondplace)
            && NotMarkedAdvanced(thirdplace)) {
            //Because arrays begin with 0 but my objects not
            counter2++;
            MediumShips[`ship${counter2}`][0] = place;
            MediumShips[`ship${counter2}`][1] = secondplace;
            MediumShips[`ship${counter2}`][2] = thirdplace;

            counter2--;
            MediumShips.Assigned[counter2] = "y";


            // Mark fields and return button to default state
            document.getElementById(thirdplace).style.backgroundColor = "#336600";
            document.getElementById(secondplace).style.backgroundColor = "#336600";
            document.getElementById("MediumShipButton").style.backgroundColor = "white";
            document.getElementById(place).style.backgroundColor = "#336600";
            Buttonpressed = 0;
            break;

          }
          else if (counter2 === 1) {
            if (RandomGenerated === true) {
              return "error";
            }
            else {
              alert("error");
            }
          }
        }
      }
    }


  } else if (Buttonpressed === 4) {
    if (alignment === "h") {//looks if vertical or horizontal is selected
      if (place.length > 2) {
        GridNumber = place.slice(0, 2);
        GridChar = place.slice(2, 3);
      }
      else {
        GridNumber = place.slice(0, 1);
        GridChar = place.slice(1, 2);
      }
      for (counter = 0; counter < AllChars.length; counter++) {// goes up the alphabet one place
        if (AllChars[counter] === GridChar) {
          counter++;
          GridChar = AllChars[counter];
          if (counter === AllChars.length - 2) { // ends function if the rightmost field was selected to prevent error
            break;
          }
          secondplace = GridNumber + GridChar;
          counter++;
          GridChar = AllChars[counter];
          thirdplace = GridNumber + GridChar;
          counter++;
          GridChar = AllChars[counter];
          fourthplace = GridNumber + GridChar;

          if (BigShips.Assigned === "n" && NotMarkedAdvanced(place) && NotMarkedAdvanced(secondplace)
            && NotMarkedAdvanced(thirdplace) && NotMarkedAdvanced(fourthplace)) {
            //Because arrays begin with 0 but my objects not
            BigShips[`ship1`][0] = place;
            BigShips[`ship1`][1] = secondplace;
            BigShips[`ship1`][2] = thirdplace;
            BigShips[`ship1`][3] = fourthplace;

            BigShips.Assigned = "y";
            // Mark fields and return button to default state
            document.getElementById(fourthplace).style.backgroundColor = "#333300";
            document.getElementById(thirdplace).style.backgroundColor = "#333300";
            document.getElementById(secondplace).style.backgroundColor = "#333300";
            document.getElementById("BigShipButton").style.backgroundColor = "white";
            document.getElementById(place).style.backgroundColor = "#333300";
            Buttonpressed = 0;
            break;

          }
          else {
            if (RandomGenerated === true) {
              return "error";
            }
            else {
              alert("error");
            }
          }
        }
      }
    }
    if (alignment === "v") {//looks if vertical or horizontal is selected
      if (place.length > 2) {
        GridNumber = place.slice(0, 2);
        GridChar = place.slice(2, 3);
      }
      else {
        GridNumber = place.slice(0, 1);
        GridChar = place.slice(1, 2);
      }
      if (GridNumber <= 9) {// to prevent placing ships outside of field
        GridNumber++;
        secondplace = GridNumber + GridChar;
        GridNumber++;
        thirdplace = GridNumber + GridChar;
        GridNumber++;
        fourthplace = GridNumber + GridChar;
        if (BigShips.Assigned === "n" && NotMarkedAdvanced(place) && NotMarkedAdvanced(secondplace)
          && NotMarkedAdvanced(thirdplace) && NotMarkedAdvanced(fourthplace)) {
          //Because arrays begin with 0 but my objects not
          BigShips[`ship1`][0] = place;
          BigShips[`ship1`][1] = secondplace;
          BigShips[`ship1`][2] = thirdplace;
          BigShips[`ship1`][3] = fourthplace;

          BigShips.Assigned = "y";
          // Mark fields and return button to default state
          document.getElementById(fourthplace).style.backgroundColor = "#006600";
          document.getElementById(thirdplace).style.backgroundColor = "#006600";
          document.getElementById(secondplace).style.backgroundColor = "#006600";
          document.getElementById("BigShipButton").style.backgroundColor = "white";
          document.getElementById(place).style.backgroundColor = "#006600";
          Buttonpressed = 0;


        }
        else {
          if (RandomGenerated === true) {
            return "error";
          }
          else {
            alert("error");
          }
        }
      }
    }


  }
}



