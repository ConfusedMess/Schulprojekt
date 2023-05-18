<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShipController extends Controller
{
    public function showSingleplayer()
    {
        return view("shipsink/Singleplayer");
    }
    public function showMultiplayer()
    {
        return view("shipsink/Multiplayer");
    }
    // public function show()
//{
//    return view("shipsink/show");
//}
//

}
