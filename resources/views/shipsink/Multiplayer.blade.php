<x-app-layout>
    <!-- um lokalen server zu starten sodass man die seite sieht schreibt "php artisan serve" in das terminal(ohne semicolons)-->



    <div id="ButtonBox">
        <!--die Box in der die Buttons
        Die Buttons Sind alle nur für das Ausführen von JS funktionen da (onclick)-->

        <button id="TinyShipButton" onclick="PlaceTinyShip(TinyShipButton)">4 Zerstörer übrig</button>
        <button id="SmallShipButton" onclick="PlaceSmallShip(SmallShipButton)">3 Kreuzer übrig</button>
        <!-- buttons um auszuwählen welches schiff platziert wird( benötigt verbesserungen) -->
        <button id="MediumShipButton" onclick="PlaceMediumShip(MediumShipButton)">2 U-Boote übrig</button>
        <button id="BigShipButton" onclick="PlaceBigShip(BigShipButton)">1 Schlachtschiff übrig</button>
        <label id="labelh" for="horizontal">Horizontal</label>
        <!-- labels und radiobuttons um auszuwählen ob schiff horizontal oder vertical platziert wird-->
        <input type="radio" name="horizontal" id="h" onclick="ChangeAlignment('h')" />
        <label id="labelv" for="vertical">Vertikal</label>
        <input type="radio" name="vertical" id="v" onclick="ChangeAlignment('v')" />
        <button id="Autoplacement" onclick="AutoPlacement(false)">Auto Platzierung</button>
        <!-- <select id="select" size="1" onchange="SetDifficulty()">    (alter dropdown)
            <option  selected hidden>Difficulty</option>
            <option value=1 >Easy</option>
            <option value=2 >Medium</option>
            <option value=3 >Dark Souls</option>
        </select>-->
        <button id="Player1End" onclick="Player1Placementend()">Beende Platzieren</button>
    </div>

    <div id="Player1Field" class="ShipBox">
        <!--Das Eigenefeld(Player 1) und die Box in der das Feld ist-->
        <h2>Dein Feld </h2>
        <table id="table1">
        </table>
    </div>
    <div id="ButtonBoxPlayer2">
        <!--die Box in der die Buttons
        Die Buttons Sind alle nur für das Ausführen von JS funktionen da (onclick)-->
        <button id="TinyShipButton2" onclick="PlaceTinyShip(TinyShipButton2)">4 Zerstörer übrig</button>
        <button id="SmallShipButton2" onclick="PlaceSmallShip(SmallShipButton2)">3 Kreuzer übrig</button>
        <!-- buttons um auszuwählen welches schiff platziert wird( benötigt verbesserungen) -->
        <button id="MediumShipButton2" onclick="PlaceMediumShip(MediumShipButton2)">2 U-Boote übrig</button>
        <button id="BigShipButton2" onclick="PlaceBigShip(BigShipButton2)">1 Schlachtschiff übrig</button>
        <label id="labelh2" for="horizontal">Horizontal</label>
        <!-- labels und radiobuttons um auszuwählen ob schiff horizontal oder vertical platziert wird-->
        <input type="radio" name="horizontal" id="h2" onclick="ChangeAlignment2('h2')" checked />
        <label id="labelv2" for="vertical">Vertical</label>
        <input type="radio" name="vertical" id="v2" onclick="ChangeAlignment2('v2')" />
        <button id="Autoplacement" onclick="AutoPlacement(false)">Auto Placement</button>
        <!-- <select id="select" size="1" onchange="SetDifficulty()">    (alter dropdown)
            <option  selected hidden>Difficulty</option>
            <option value=1 >Easy</option>
            <option value=2 >Medium</option>
            <option value=3 >Dark Souls</option>
        </select>-->
        <button id="BeginGame" onclick="BeginMultiplayerGame()">Spiel Starten</button>
    </div>
    <div id="EnemieTable">
        <!--Das Gegnerfeld(Player 2/Bot) und die Box in der das Feld ist-->
        <button onclick="AutoShoot()">Autoshoot</button>
        <h2 id="EtableH">Gegner Feld</h2>
        <table id="table2">
        </table>
    </div>
    <div id="FehlerModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div> Es ist ein Undefinierter Fehler aufgetreten</div>
        </div>
    </div>
    <div id="ShipNotAllowedModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div> Du kannst hier kein Schiff setzen
                oder alle Schiffe dieser art wurden schon zugewiesen.
            </div>
        </div>
    </div>
    <div id="NoMoreShipsModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div>Du hast schon Alle Schiffe dieser art gesetzt</div>
        </div>
    </div>
    <div id="DoubleSelectModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div> Du kannst nicht ein Feld zweimal auswählen</div>
        </div>
    </div>
    <div id="HitModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div> Treffer</div>
        </div>
    </div>
    </div>
    <div id="DestroyedModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div> Du hast ein schiff Zerstört</div>
        </div>
    </div>
    </div>
    <div id="VictoryModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div> Sieg</div>
        </div>
    </div>
    <div id="LossModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div>Niederlage</div>
        </div>
    </div>
    <div id="NoDifficultyModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div>Bitte wähle eine schwierigkeit</div>
        </div>
    </div>
    <div id="NotAssignedModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <!-- hier wird anstatt das modal zu schließen
            das fenster neu geladen um einen fehler zu vermeiden-->
            <div onclick="location.reload()" class="close">&times;</div>
            <div>Keine Schiffe wurden Zugewiesen</div>
        </div>
    </div>
    <div id="FirstPlayerChangeModal" class="modal">
        <!-- Hier sind die Modals (Dialogfenster)-->
        <div class="modal-content">
            <div onclick="ModalClose()" class="close">&times;</div>
            <div>Spieler 2 ist nun mit dem Setzen dran</div>
        </div>
    </div>
    <!-- hier werden all die JS files aus dem public ordner geladen -->
    <script src="/JavaScript/Multiplayer.js"></script>
    <script src="/JavaScript/variables_etc.js"></script>
    <script src="/JavaScript/EnemieField.js"></script>
    <script src="/JavaScript/other.js"></script>
    <script src="/JavaScript/auto.js"></script>
    <script src="/JavaScript/table.js"></script>
    <script onload='ChangeAlignment("h")' src="/JavaScript/markings.js"></script>
    <script src="/JavaScript/autoenemie.js"></script>
    <script src="/JavaScript/Bot.js"></script>
    <script src="/JavaScript/Modal.js"></script>
</x-app-layout>
