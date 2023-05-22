function AutoShoot() {
    auto = true;
    place = RandomizePlace(12)
    answer = ShootAtEnemie(place)
    while (answer === false) {
        place = RandomizePlace(12)
        answer = "";
        ShootAtEnemie(place)
    }
}

function AutoPlacement() {
    RandomGenerated = true;
    var x;
    var answer;

    for (x = 1; x <= 1; x++) {
        Buttonpressed = 4;
        RandomizeAlignment();
        place = RandomizePlace(9);
        answer = TableClick(place);
        while (answer === "error" || OneFieldDistance(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(9);
            answer = "";
            answer = TableClick(place);
        }
        Buttonpressed = 0;
    }


    for (x = 1; x <= 2; x++) {
        Buttonpressed = 3;
        RandomizeAlignment();
        place = RandomizePlace(10);
        answer = TableClick(place);

        while (answer === "error" || OneFieldDistance(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(10);
            answer = "";
            answer = TableClick(place);
        }
        Buttonpressed = 0;
    } for (x = 1; x <= 3; x++) {
        Buttonpressed = 2;
        RandomizeAlignment();
        place = RandomizePlace(11);
        answer = TableClick(place);
        while (answer === "error" || OneFieldDistance(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(11);
            answer = "";
            answer = TableClick(place);

        }
        Buttonpressed = 0;
    }
    for (x = 1; x <= 4; x++) {
        Buttonpressed = 1;
        RandomizeAlignment();
        place = RandomizePlace(12);
        answer = TableClick(place);
        while (answer === "error" || OneFieldDistance(place) === false) {
            RandomizeAlignment();
            place = RandomizePlace(12);
            answer = "";
            answer = TableClick(place);
        }
        Buttonpressed = 0;
    }

    RandomGenerated = false;
}
function RandomizePlace(size) {
    GridNumber = Math.floor(Math.random() * size) + 1;
    GridChar = AllChars[Math.floor(Math.random() * size)];
    place = GridNumber + GridChar;
    return place;
}
function RandomizeAlignment() {
    if (Math.floor(Math.random() * 2) === 1) {
        ChangeAlignment("h");
    }
    else {
        ChangeAlignment("v");
    }
}

