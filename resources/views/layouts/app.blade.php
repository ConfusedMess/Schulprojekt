<!DOCTYPE html>
<html>

<head>
    <title>hehe Website go brrrrr</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        .dropdown {
            display: inline-block;
            position: relative;
            text-align: center;
            background: #FDFDFD;
            border-radius: 14px;
            font-size: 32px;
            padding-left: 20px;
            padding-right: 40px;
            left: 20%;
            width: 71%;
            height: 60px;
            padding-top: 10px;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            width: 100%;
            border-radius: 14px;
            right: 0.1%;
            margin: 10px;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown-options {
            display: flex;
            flex-flow: wrap;
            flex-shrink: 2;
            max-width: 140%;
            background-color: #212121;
            border-radius: 16px;
            padding: 5px;
        }

        .desc {
            position: relative;
            padding-top: 20px;
            text-align: center;
            font-size: 20px;
            padding-left: 15px;
            color: #FFFFFF;

        }

        td,
        th {
            border: 1px solid black;
            text-align: left;
            padding: 8px;
        }

        a {
            color: black;
            background-color: transparent;
            text-decoration: none;
        }



        * {
            box-sizing: border-box;
        }

        /* Style the body */
        body {
            font-family: Arial;
            font-size: 15px;
            margin: 0;
            /* background-image: url("/image/background_main.svg"); */
            background-color: #212121;

        }

        .TextWithouthBckgrd {
            color: #FFFFFF;
        }


        /* Style the navigation bar links */
        .navbar a {
            color: white;
            padding: 15px 15px;
            text-decoration: none;
            text-align: center;
        }

        .navbar b {
            color: white;
            padding: 15px 20px;
            text-decoration: none;
            text-align: center;
        }

        /* Change color on hover */
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }

        /* Column container */
        .row {
            display: flex;
            flex-direction: row;
        }

        .Quizsubmit {
            margin-top: 15px;
            background-color: olive;
            border-color: black;
            border-style: solid;
            padding: 5px;
            border-radius: 14px;
            visibility: hidden;
        }

        /* Create two unequal columns that sits next to each other */
        /* Sidebar/left column */
        #side_l {
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

        /* Main column */
        #main {
            flex: 82%;
            height: 1000px;
            /* Standardvalue will probably be changed by js function SetHeight()*/
            overflow: auto;
            padding: 20px;
            justify-content: flex-start;
        }

        .HiddenBox {
            border-radius: 16px;
            width: 100%;
            padding: 20px;
            margin-top: 10px;
            height: 105px;
            align-content: flex-start;
            position: relative;
        }

        .QuestionButton {
            margin-top: 15px;
            background-color: olive;
            border-color: black;
            border-style: solid;
            padding: 5px;
            border-radius: 14px;
        }

        .QuestionButton:hover {
            background-color: olivedrab;
        }

        .StandardBox {
            border-radius: 16px;
            background-color: #F8BC5C;
            width: 100%;
            padding: 20px;
            margin-top: 10px;
            align-content: flex-start;
        }

        .MenuBox {
            border-radius: 16px;
            background-color: #F8BC5C;
            width: 20%;
            padding: 20px;
            margin-top: 5px;
            align-content: flex-start;
        }

        .LeftBox {
            border-radius: 8px;
            background-color: #F8BC5C;
            margin-top: 30px;
            margin-left: 4%;
            max-height: 1000px;
            max-width: 90%;
            text-align: center;
            font-size: 20pt;
            padding: 20px;


        }

        .search {
            border-radius: 50px;
            width: 30%;
            height: 40px;
            position: relative;
            left: 70%;
            font-size: 15pt;
        }


        .select_side {
            width: 70%;
            height: 60px;
            position: relative;
            background: #FDFDFD;
            border-radius: 14px;
            font-size: 32px;
            padding-left: 20px;
            padding-right: 40px;
            left: 20%;

        }

        .option_side {
            top: 100px;
        }

        .submenu {
            list-style-type: none;
            display: none;
            padding: 0;
            bottom: 20px;
            margin: 0;

        }

        .LeftBox:hover .submenu {
            display: block;
        }

        .LeftBox:hover {
            text-align: left;
        }

        li {
            padding-top: 5px;
            font-size: 15pt;
        }

        li:hover {
            background-color: gray;
        }

        .Mark:hover {
            background-color: gray;
        }


        /* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 700px) {
            .row {
                flex-direction: column;
            }
        }

        #searchsubmit {
            visibility: hidden;
        }
    </style>
    <script>
        function SiteSetup(){
            SetHeight();
            BackgroundLoad()
        }
        function SetHeight() {
            let hohe = window.innerHeight;
            document.getElementById("main").style.height = hohe + "px";
            document.getElementById("side_l").style.height = hohe + "px";
            console.log("hab was gemacht");
        }



        function Dropdown_click_H() {
            var x = document.getElementById("Dropdown_click");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else {
                x.className = x.className.replace(" w3-show", "");
            }
        }

        function BackgroundLoad() {
            document.body.style.backgroundImage = "url('/Images/TemporaryBackground.png')";
        }

        function Submenus() {
            const html = [
                '<li>hm</li>',
                '<li>hmm</li>',
                '<li>hmmm</li>',
            ];
            for (let x = 0; x < html.length; x++) {
                document.getElementById("SubMenuOnboarding").insertAdjacentHTML("afterbegin", html[x]);
            }

        }

        function HideSubMenuOnboarding() {
            document.getElementById("SubMenuOnboarding").innerHTML = "";
        }
    </script>
</head>

<body onload="SiteSetup()">
    <!-- The flexible grid (content) -->
    <div class="row">
       <!-- <div id="side_l"><a href="/dashboard">
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

                <!-- Authentication -->
                <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <x-dropdown-link :href="route('logout')"
                        onclick="event.preventDefault();
                                        this.closest('form').submit();">
                        {{ __('Log Out') }}
                    </x-dropdown-link>
                </form>

            </div>
        </div>




        <div id="main">
            {{ $slot }}
        </div>

    </div>
    </div>
    </div>


</body>

</html>
