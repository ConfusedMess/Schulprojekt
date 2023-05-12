<x-app-layout>
    <!-- um lokalen server zu starten sodass man die seite sieht schreibt "php artisan serve" in das terminal(ohne semicolons)-->
    @vite('resources/css/Table.css')
    @vite('resources/css/other.css')


    <div id="ButtonBox"><!--die Box in der die Buttons-->

        <button id="TinyShipButton" onclick="PlaceTinyShip()">4 Tiny Ships left</button>
        <button id="SmallShipButton" onclick="PlaceSmallShip()">3 small Ships left</button>
        <!-- buttons um auszuwählen welches schiff platziert wird( benötigt verbesserungen) -->
        <button id="MediumShipButton" onclick="PlaceMediumShip()">2 Medium Ships available</button>
        <button id="BigShipButton" onclick="PlaceBigShip()">1 Big Ship available</button>
        <label id="label1" for="horizontal">Horizontal</label>
        <!-- labels und radiobuttons um auszuwählen ob schiff horizontal oder vertical platziert wird-->
        <input type="radio" name="horizontal" id="h" onclick="ChangeAlignment('h')" />
        <label id="label2" for="vertical">Vertical</label>
        <input type="radio" name="vertical" id="v" onclick="ChangeAlignment('v')" />
        <button id="Autoplacement" onclick="AutoPlacement(false)">Auto Placement</button>
        <select id="select" size="1" onchange="SetDifficulty()">
            <option  selected hidden>Difficulty</option>
            <option value=1 >Easy</option>
            <option value=2 >Medium</option>
            <option value=3 >Dark Souls</option>
        </select>
        <button id="BeginGame" onclick="BeginGame()">Begin Game</button>
    </div>

    <div class="ShipBox"> <!--Das Eigenefeld(Player 1) und die Box in der das Feld ist-->
        <h2>Dein Feld</h2>
        <table id="table1">
        </table>
    </div>

    <div id="EnemieTable"><!--Das Gegnerfeld(Player 2/Bot) und die Box in der das Feld ist-->
        <button onclick="AutoShoot()">Autoshoot</button>
        <h2 id="EtableH">Gegner Feld</h2>
        <table id="table2">
        </table>
    </div>

    <script src="/JavaScript/variables_etc.js"></script>
    <script src="/JavaScript/EnemieField.js"></script>
    <script src="/JavaScript/other.js"></script>
    <script src="/JavaScript/auto.js"></script>
    <script src="/JavaScript/table.js"></script>
    <script onload='ChangeAlignment("h")' src="/JavaScript/markings.js"></script>
    <script src="/JavaScript/autoenemie.js"></script>
    <script src="/JavaScript/Bot.js"></script>
</x-app-layout>
