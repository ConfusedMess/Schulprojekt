<x-app-layout>
    <!-- um lokalen server zu starten sodass man die seite sieht schreibt "php artisan serve" in das terminal(ohne semicolons)-->
    @vite('resources/css/Table.css')
    @vite('resources/css/other.css')
    <div class="ShipBox" >
        <div >
            <h2>Dein Feld</h2>
            <button onclick="AutoShoot(true)">Auto Shoot</button>
            <table id="table1">
            </table>
        </div>
        <div>
            <h2>Gegner Feld</h2>
            <table id="table2">
            </table>
        </div>
    </div> 
    <button onclick="MarkMyShips()"></button>
    <script src="/JavaScript/variables_etc.js"></script>   
    <script src="/JavaScript/EnemieField.js"></script>
    <script src="/JavaScript/other.js"></script>
    <script src="/JavaScript/auto.js"></script>
    <script src="/JavaScript/table.js"></script>
    <script src="/JavaScript/markings.js"></script>
    <script src="/JavaScript/Bot.js"></script>
</x-app-layout>
