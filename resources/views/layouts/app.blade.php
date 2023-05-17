<!DOCTYPE html>
<html>
<!-- dies ist das haupt layout was für jede seite gleich bleibt  -->

<head>
    <title>Schiffe Versenken</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <style>
        /* Ein paar Standard einstellungen */
        body {
            font-family: Arial;
            font-size: 15px;
            padding: 0px;
            background-color: #212121;
            margin: 0px;

        }

        #side_l {
            /*für seitenleiste welche jedoch fürs erste rausgenommen wurde*/
            flex: 18%;
            height: 1000px;
            /*Standardvalue will probably be changed by js function SetHeight()*/
            background: linear-gradient(180deg, #212121 52.6%,
                    rgba(33, 33, 33, 0.81) 74.48%,
                    rgba(33, 33, 33, 0.74) 84.36%,
                    rgba(33, 33, 33, 0.78) 100%);
            padding: 20px;
            justify-content: flex-start;
        }

        /*styling für den hauptteil*/
        #main {
            padding: 20px;
        }

        .HiddenBox {
            /*unsichtbare box*/
            border-radius: 16px;
            width: 100%;
            padding: 20px;
            margin-top: 10px;
            height: 105px;
            align-content: flex-start;
            position: relative;
        }

        .StartButton {
            border: 3px solid #212121;
        }

        .StartButton:hover {
            background-color: #F8BC5C
        }

        .StandardBox {
            /* Grundlegende Box auf der alle anderen basieren*/
            border-radius: 16px;
            background-color: #F8BC5C;
            padding: 20px;
            margin-top: 10px;
            text-align: center
        }

        #Header {
            /* styling für den header (leiste wo logout ist)*/
            background-color: black;
            border-bottom: 3px solid #F2BF5E;
            padding-right: 10px;
            padding-bottom: 5px;



        }

        table {
            background: url('/Images/Hintergrund.gif');
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }

        .LogoutButton {
            border: 3px solid blue;
            float: right;
            border-radius: 16px;
            padding: 5px;
        }

        .LogoutButton:hover {
            background-color: blue
        }
    </style>
    <link rel="stylesheet" href="/CSS/Table.css">
    <link rel="stylesheet" href="/CSS/Modal.css">
    <link rel="stylesheet" href="/CSS/other.css">
    <link rel="stylesheet" href="/CSS/app.css">
    <script>
        function SiteSetup() { //mehrere funktionen werden hier zur ausführung beim laden gesammelt
            SetHeight();
            BackgroundLoad()
        }

        function SetHeight() { // ermittelt die hhöhe und breite des fesnter und passt die größe der seite an
            let hohe = window.innerHeight;
            document.getElementById("main").style.height = hohe * 0.95 + "px";
            document.getElementById("Header").style.height = hohe * 0.05 + "px";
        }

        function BackgroundLoad() { //fügt das hintergrundbild ein
            document.body.style.backgroundImage = "url('/Images/TemporaryBackground.png')";
        }
    </script>
</head>

<body onload="SiteSetup()">
    <!-- The flexible grid (content) -->
    <div id="Header">
        <!-- <div id="side_l">    (dies ist der html code für die seitenleiste welche momentan nicht implementiert ist)
            <a href="/dashboard">
                <div class="LeftBox">

                    Dashboard

                </div>
            </a>
            </a>
            <a>
                <div class="LeftBox">
                    <div class="Mark">
                        <a href="">Hover over me!</a>
                    </div>
                    <ul class="submenu">
                        <li><a href="/ship/create">Klick here to get to the important site</a></li>
                        <li onclick="SetHeight()"><a href="">This nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                    </ul>
                </div>
            </a>
            <a>
                <div class="LeftBox">
                    <div class="Mark">
                        <a href="">Nothin important here</a>
                    </div>
                    <ul class="submenu">
                        <li><a href="">this does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                    </ul>
                </div>
            </a>
            <a>
                <div class="LeftBox">
                    <div class="Mark">
                        <a href="">nothin here</a>
                    </div>
                    <ul class="submenu">
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                        <li><a href="">This does nothin</a></li>
                    </ul>
                </div>
            </a>
            <div style="top:97%; position:absolute; color:#C2C7CE; font-size:18px">-->

        <!-- Hier ist die obere leiste mit dem Logout Button  -->+
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <button type="submit" class="LogoutButton">Log Out</button>
        </form>
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
