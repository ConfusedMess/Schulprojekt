const AllChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
var TinyShips = {
  ship1: "0",
  ship1H: false, //H for Hit
  ship2: "0",
  ship2H: false,
  ship3: "0",
  ship3H: false,
  ship4: "0",
  ship5H: false,
  Assigned: ["n", "n", "n", "n"]
};
var SmallShips = { // hier wird die shiffsposition gespeichert jedes shiff ist ein objekt (also ship1,ship2,ship3) die anzahl der objekt (also schiffe) hängt von der anzahl der platzierbaren schiffe ab.
  ship1: ["0", "0"], // Jedes Objekt ist ein array die länge der arrays hängt von der größe des schiffs ab
  ship1H: [false, false],
  ship2: ["0", "0"],
  ship2H: [false, false],
  ship3: ["0", "0"],
  ship3H: [false, false],
  Assigned: ["n", "n", "n"] // hier wird gespeichert welche schiffe schon eine position zugewiesen bekommen haben die länge dieses arrays hängt von der anzahl der anderen objekte (schiffe) ab n= unbelegt y =belegt
};
var MediumShips = { // selbe wie bei SmallShips nur weniger Objekte(weniger schiffe) und dafür längeres array(größere schiffe)
  ship1: ["0", "0", "0"],
  ship1H: [false, false, false],
  ship2: ["0", "0", "0"],
  ship2H: [false, false, false],
  Assigned: ["n", "n"]
};
var BigShips = {
  ship1: ["0", "0", "0", "0"],
  ship1H: [false, false, false, false],
  Assigned: "n"
};



var TinyShipsE = { // E for Enemie
  ship1: "0",
  ship1H: false, //H for Hit
  ship2: "0",
  ship2H: false,
  ship3: "0",
  ship3H: false,
  ship4: "0",
  ship4H: false,
  Assigned: ["n", "n", "n", "n"]
};
var SmallShipsE = {
  ship1: ["0", "0"], // Jedes Objekt ist ein array die länge der arrays hängt von der größe des schiffs ab
  ship1H: [false, false],
  ship2: ["0", "0"],
  ship2H: [false, false],
  ship3: ["0", "0"],
  ship3H: [false, false],
  Assigned: ["n", "n", "n"]
};
var MediumShipsE = {
  ship1: ["0", "0", "0"],
  ship1H: [false, false, false],
  ship2: ["0", "0", "0"],
  ship2H: [false, false, false],
  Assigned: ["n", "n"]
};
var BigShipsE = {
  ship1: ["0", "0", "0", "0"],
  ship1H: [false, false, false, false],
  Assigned: "n"
};


var alignment = "v";// h horizontal // v vertical
var Buttonpressed = 0; //1=kleines Schiff 2=Mittleres Schiff 3=großes Schiff
var counter;// für die for schleifen
var counter2;
var GridNumber; // hier wird die Nummer des ausgewählten ortes zwischengespeichert
var GridChar; // hier wird der Buchstabe des gewählten ortes zwischengespeichert
var place;
var secondplace; // hier werden die belegten felder zwischengespeichert
var thirdplace;
var fourthplace;
var ShipfieldsNumber = 20; // hier wird die anzahl der felder (des Speilers) gespeichert die noch getroffen werden müssen. Wenn 0 = verloren
let ShipfieldsNumberE = 20; // hier wird die anzahl der felder (des Gegners) gespeichert die noch getroffen werden müssen. Wenn 0 = gewonnen
var CurrentPlayer = 1; // hier wird der active spieler gespeichert
var RandomGenerated = false; // sagt ob der Randomplacemnt durchläuft
var auto = false; //sagt ob autoshoot (evtl in zukunft noch andere functionen) durchläuft
var table;
const clicked = [];
var isVsBot = true; //Ob gegen Bot oder Spieler gespielt wird Std. gegen Bot