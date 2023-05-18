function AutoPlacementE() {
    RandomGenerated = true;
    var x;
    var answer;

    for (x = 1; x <= 1; x++) {
        Buttonpressed = 4;
        RandomizeAlignment();
        place = RandomizePlace(9);
        answer = TableClickE(place);
        while (answer === "error" || OneFieldDistanceE(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(9);
            answer = "";
            answer = TableClickE(place);
        }
        Buttonpressed = 0;
    }


    for (x = 1; x <= 2; x++) {
        Buttonpressed = 3;
        RandomizeAlignment();
        place = RandomizePlace(10);
        answer = TableClick(place);
         while (answer === "error" || OneFieldDistanceE(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(10);
            answer = "";
            answer = TableClickE(place);
        }
        Buttonpressed = 0;
    } for (x = 1; x <= 3; x++) {
        Buttonpressed = 2;
        RandomizeAlignment();
        place = RandomizePlace(11);
        answer = TableClickE(place);
        while (answer === "error" || OneFieldDistanceE(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(11);
            answer = "";
            answer = TableClickE(place);

        }
        Buttonpressed = 0;
    }
    for (x = 1; x <= 4; x++) {
        Buttonpressed = 1;
        RandomizeAlignment();
        place = RandomizePlace(12);
        answer = TableClickE(place);
        while (answer === "error" || OneFieldDistanceE(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(12);
            answer = "";
            answer = TableClickE(place);
        }
        Buttonpressed = 0;
    }

    RandomGenerated = false;

}
function TableClickE(place) { // wenn man ein feld auswählt wird hier die gewählte position gespeichert und markiert
    if (Buttonpressed === 1) {
      for (counter2 = 0; counter2 <= 3; counter2++)
      // look if a ship is unassigned if yes assign it if not give error
      {
        if (TinyShipsE.Assigned[counter2] === "n" && NotMarkedAdvancedE(place)) {
          counter2++;
          TinyShipsE[`ship${counter2}`] = place;
          counter2--
          TinyShipsE.Assigned[counter2] = "y"

          Buttonpressed = 0;
          break;
        } else if (counter2 === 3) {
          if (RandomGenerated === true) {
            return "error";
          }
          else {
                ShowModal('FehlerModal');
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
              if (SmallShipsE.Assigned[counter2] === "n" && NotMarkedAdvancedE(place) && NotMarkedAdvancedE(secondplace)) {
                //Because arrays begin with 0 but my objects not
                counter2++;
                SmallShipsE[`ship${counter2}`][0] = place;
                SmallShipsE[`ship${counter2}`][1] = secondplace;
                counter2--;
                SmallShipsE.Assigned[counter2] = "y"


                Buttonpressed = 0;
                break;

              }
              else if (counter2 === 2) {
                if (RandomGenerated === true) {
                  return "error";
                }
                else {
                    ShowModal('ShipNotAllowedModal');
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
            if (SmallShipsE.Assigned[counter2] === "n" && NotMarkedAdvancedE(place) && NotMarkedAdvancedE(secondplace)) {
              //Because arrays begin with 0 but my objects not
              counter2++;
              SmallShipsE[`ship${counter2}`][0] = place;
              SmallShipsE[`ship${counter2}`][1] = secondplace;
              counter2--;
              SmallShipsE.Assigned[counter2] = "y"

              Buttonpressed = 0;
              break;

            }
            else if (counter2 === 2) {
              if (RandomGenerated === true) {
                return "error";
              }
              else {
                ShowModal('ShipNotAllowedModal');
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
              if (MediumShipsE.Assigned[counter2] === "n" && NotMarkedAdvancedE(place) && NotMarkedAdvancedE(secondplace)
                && NotMarkedAdvancedE(thirdplace)) {
                //Because arrays begin with 0 but my objects not
                counter2++;
                MediumShipsE[`ship${counter2}`][0] = place;
                MediumShipsE[`ship${counter2}`][1] = secondplace;
                MediumShipsE[`ship${counter2}`][2] = thirdplace;

                counter2--;
                MediumShipsE.Assigned[counter2] = "y";


                Buttonpressed = 0;
                break;


              }
              else if (counter2 === 1) {
                if (RandomGenerated === true) {
                  return "error";
                }
                else {
                  ShowModal('ShipNotAllowedModal');
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
            if (MediumShipsE.Assigned[counter2] === "n" && NotMarkedAdvancedE(place) && NotMarkedAdvancedE(secondplace)
              && NotMarkedAdvancedE(thirdplace)) {
              //Because arrays begin with 0 but my objects not
              counter2++;
              MediumShipsE[`ship${counter2}`][0] = place;
              MediumShipsE[`ship${counter2}`][1] = secondplace;
              MediumShipsE[`ship${counter2}`][2] = thirdplace;

              counter2--;
              MediumShipsE.Assigned[counter2] = "y";


              Buttonpressed = 0;console.log("Assigned Medium Ship" +counter2);
              break;

            }
            else if (counter2 === 1) {
              if (RandomGenerated === true) {
                return "error";
              }
              else {
                ShowModal('ShipNotAllowedModal');
              }
            }
          }
        }
      }

    }
     else if (Buttonpressed === 4) {
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

            if (BigShipsE.Assigned === "n" && NotMarkedAdvancedE(place) && NotMarkedAdvancedE(secondplace)
              && NotMarkedAdvancedE(thirdplace) && NotMarkedAdvancedE(fourthplace)) {
              //Because arrays begin with 0 but my objects not
              BigShipsE[`ship1`][0] = place;
              BigShipsE[`ship1`][1] = secondplace;
              BigShipsE[`ship1`][2] = thirdplace;
              BigShipsE[`ship1`][3] = fourthplace;

              BigShipsE.Assigned = "y";
              Buttonpressed = 0;
              break;

            }
            else {
              if (RandomGenerated === true) {
                return "error";
              }
              else {
                ShowModal('ShipNotAllowedModal');
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
          if (BigShipsE.Assigned === "n" && NotMarkedAdvancedE(place) && NotMarkedAdvancedE(secondplace)
            && NotMarkedAdvancedE(thirdplace) && NotMarkedAdvancedE(fourthplace)) {
            //Because arrays begin with 0 but my objects not
            BigShipsE[`ship1`][0] = place;
            BigShipsE[`ship1`][1] = secondplace;
            BigShipsE[`ship1`][2] = thirdplace;
            BigShipsE[`ship1`][3] = fourthplace;

            BigShipsE.Assigned = "y";
            Buttonpressed = 0;


          }
          else {
            if (RandomGenerated === true) {
              return "error";

            }
            else {
              ShowModal('ShipNotAllowedModal');
            }
          }
        }
      }


    }
}
  function NotMarkedE(place) { // hier wird getestet ob ein feld belegt ist false = belegt  true = nicht belegt
    let marked = true;
    let specialcounter;//so it does not interfere with the oother counters
    let specialcounter2;
    for (specialcounter = 1; specialcounter < 5; specialcounter++) {
      if (TinyShipsE[`ship${specialcounter}`] === place) {
        marked = false;
      }
    }
    for (specialcounter = 1; specialcounter < 4; specialcounter++) {
      for (specialcounter2 = 0; specialcounter2 < SmallShipsE[`ship${specialcounter}`].length; specialcounter2++) {
        if (SmallShipsE[`ship${specialcounter}`][specialcounter2] === place) {
          marked = false;
        }
      }
    }
    for (specialcounter = 1; specialcounter < 3; specialcounter++) {
      for (specialcounter2 = 0; specialcounter2 < MediumShipsE[`ship${specialcounter}`].length; specialcounter2++) {
        if (MediumShipsE[`ship${specialcounter}`][specialcounter2] === place) {
          marked = false;
        }
      }
    }
    for (specialcounter2 = 0; specialcounter2 < BigShipsE[`ship1`].length; specialcounter2++) {
      if (BigShipsE[`ship1`][specialcounter2] === place) {
        marked = false;
      }
    }
    console.log(marked);
    return marked;
  }
  function OneFieldDistanceE(place) {  //Schut ob feld in 1 feld umkreis belegt true = umliegende felder frei false= min 1 umliegenes feld belegt
    let IntNumber;
    if (place.length > 2) { // standard slice also zb. place=B6 in GridChar=B  Gridnumber=6 umwandeln
      GridNumber = place.slice(0, 2);
      GridChar = place.slice(2, 3);
    }
    else {
      GridNumber = place.slice(0, 1);
      GridChar = place.slice(1, 2);
    }
    IntNumber = parseInt(GridNumber);
    if (NotMarkedE(IntNumber + 1 + GridChar)) { // gibt alle umliegenden felder an notmarked, wenn alles true
      if (NotMarkedE(IntNumber - 1 + GridChar)) {
        for (counter = 0; AllChars.length > counter; counter++) {
          if (AllChars[counter] === GridChar) {
            if (NotMarkedE(IntNumber + AllChars[counter - 1])) {
              if (NotMarkedE(IntNumber + AllChars[counter + 1])) {
                if (NotMarkedE(IntNumber + 1 + AllChars[counter + 1])) {
                  if (NotMarkedE(IntNumber - 1 + AllChars[counter + 1])) {
                    if (NotMarkedE(IntNumber + 1 + AllChars[counter - 1])) {
                      if (NotMarkedE(IntNumber - 1 + AllChars[counter - 1])) { // wenn jemand einen hübscheren weg kennt dies zu prüfen kann er dies gern umschreiben mir fällt auf die schnelle nix ein

                        return true;
                      }
                    }

                  }
                }
              }
            }
          }



        }
      }
    }
    return false; // sollte nur dies zurückgeben wenn ein "NotMarked" false zurückgibt

  }
  function NotMarkedAdvancedE(place) {// testet umligende und angeklicktes feld true = alles frei; false= min 1 feld Belegt
    if (OneFieldDistanceE(place) && NotMarkedE(place)) {
      return true;
    }
    else {
      return false;
    }
  }
