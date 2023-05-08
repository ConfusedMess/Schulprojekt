<x-app-layout>
   <!-- um lokalen server zu starten sodass man die seite sieht schreibt "php artisan serve" in das terminal(ohne semicolons)-->
   @vite('resources/css/Table.css')
    @vite('resources/css/other.css')
   

    <div class="ShipBox" >
        <div>
            
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
            <button onclick="AutoPlacement(false)">Auto Placement</button>
            <button id="BeginGame" onclick="BeginGame()">Begin Game</button>
            <div >
            <h2>Dein Feld</h2>
            <table id="table1" >
            </table>
        </div class="EnemieTable">
            <div>
            <h2 id="EtableH" class="EnemieTable">Gegner Feld</h2>
            <table id="table2" class="EnemieTable">
            </table>
        </div>

        </div>
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