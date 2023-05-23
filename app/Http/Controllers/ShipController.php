<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShipController extends Controller
{
    public function show()
    {
        return view("shipsink/Singleplayer");
    }
    public function showTutorial()
    {
        return view("shipsink/Tutorial");
    }
// public function show()
//{
//    return view("shipsink/show");
//}
//

}
