<!DOCTYPE html>
<html>
<!-- dies ist das haupt layout was für jede seite gleich bleibt  -->

<head>
    <title>Schiffe Versenken</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/CSS/app.css">
    <link rel="stylesheet" href="/CSS/Table.css">
    <link rel="stylesheet" href="/CSS/Modal.css">
    <link rel="stylesheet" href="/CSS/other.css">
    <script>
        function SiteSetup() { //mehrere funktionen werden hier zur ausführung beim laden gesammelt
            SetHeight();
        }

        function SetHeight() { // ermittelt die hhöhe und breite des fesnter und passt die größe der seite an
            let hohe = window.innerHeight;
            document.getElementById("main").style.height = hohe * 0.95 + "px";
            document.getElementById("Header").style.height = hohe * 0.05 + "px";
        }
    </script>
</head>

<body onload="SiteSetup()">
    <!-- The flexible grid (content) -->
    <div id="Header">
        <button id="AutoshootButton" onclick="AutoShoot()">Autoshoot</button>
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="HeaderButton">Log Out</button>
        </form>
        <button id="MenuButton" onclick="location.href='/'" class="HeaderButton MoreRight">Menu</button>
    </div>
    </div>
    <!-- in den slot ist der html code welcher sich ändert -->
    <div id="main">
        {{ $slot }}
    </div>
    </div>
    </div>
    </div>
</body>

</html>
