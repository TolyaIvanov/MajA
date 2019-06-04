<?php

namespace App\Http\Controllers\api;

use App\Polynom;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PolynomController extends Controller
{
    public function create(Request $request)
    {
        dd($request->value);
    }

    public function showAll(Polynom $polynom)
    {
        return $polynom->all();
    }
}
