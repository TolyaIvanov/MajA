<?php

namespace App\Http\Controllers\api;

use App\Polynom;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PolynomController extends Controller
{
    public function create(Request $request)
    {
        $isPolynom = false;


        dd($request->value);
    }

    public function check(Request $request)
    {
        dd([$this->palNechet($request->str), $this->palChet($request->str)]);
    }

    public function showAll(Polynom $polynom)
    {
        return $polynom->all();
    }

    private function palNechet($string)
    {
        $d1 = [];
        $l = 0;
        $r = -1;

        for ($i = 0; $i < strlen($string); ++$i) {
            $k = (($i <= $r) ? min($r - $i, $d1[$r - $i + $l]) + 1 : 0);

            while ($i + $k < strlen($string) && $i - $k >= 0 && $string[$i + $k] == $string[$i - $k]) {
                $k++;
            }

            $d1[$i] = --$k;

            if ($i + $k > $r) {
                $l = $i - $k;
                $r = $i + $k;
            }
        }

        return $d1;
    }

    private function palChet($string)
    {
        $d1 = [];
        $l = 0;
        $r = -1;

        for ($i = 0; $i < strlen($string); ++$i) {
            $k = ($i > $r ? 0 : min($d1[$l + $r - $i + 1], $r - $i + 1)) + 1;

            while ($i + $k - 1 < strlen($string) && $i - $k >= 0 && $string[$i + $k - 1] == $string[$i - $k]) {
                ++$k;
            }

            $d1[$i] = --$k;

            if ($i + $k - 1 > $r) {
                $l = $i - $k;
                $r = $i + $k - 1;
            }
        }
        return $d1;
    }
}
