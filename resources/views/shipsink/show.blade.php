<x-app-layout><!-- um lokalen server zu starten sodass man mit localhost die seite sieht schreibt "php artisan serve" in das terminal(ohne semicolons)-->
       @vite('resources/css/Table.css')

        <button id="SmallShipButton" onclick="PlaceSmallShip()">3 small Ships left</button><!-- buttons um auszuwählen welches schiff platziert wird( benötigt verbesserungen) -->
        <button id="MediumShipButton" onclick="PlaceMediumShip()">2 Medium Ships available</button>
        <button id="BigShipButton" onclick="PlaceBigShip()">1 Big Ship available</button>
        <label for="horizontal">Horizontal</label><!-- labels und radiobuttons um auszuwählen ob schiff horizontal oder vertical platziert wird-->
        <input type="radio" name="horizontal" id="h" onclick="ChangeAlignment('h')"/>
        <label for="vertical">Vertical</label>
        <input type="radio" name="vertical" id="v" onclick="ChangeAlignment('v')"/>
        
        <table id="table">

        </table>
        <script src="/JavaScript/table.js"></script>
        <script src="/JavaScript/ships.js"></script><!-- die gesamte tabbele ist das spielfeld (muss aufgeräumt werden (vlt mit js), und möglicherweis durch flexboxen ersetzt(geringe priorität))-->
</x-app-layout>