<?php

namespace App\Http\Controllers\api;

use App\Palindrome;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PalindromesController extends Controller
{
    public function create(Request $request)
    {
        $value = $request->value;
        $palindromes = array_keys($this->getPalindromes($value));
        $isPalin = sizeof($palindromes) > 0 ? true : false;

        $palindrome = new Palindrome([
            'value' => $value,
            'is_palindrome' => $isPalin,
            'palindromes' => $palindromes,
        ]);

        $palindrome->save();

        return ['palindromes' =>$palindromes, 'value' => $value];
    }

    public function showAll()
    {
        return Palindrome::orderBy('created_at', 'desc')->get();
    }

    private function getPalindromes($str)
    {
        $map = [];
        $size = strlen($str);

        $R = [
            [], []
        ];

        // Find all sub-string palindromes from the given input
        // string insert 'guards' to iterate easily over s

        $str = "@".$str."#";

        for ($j = 0; $j <= 1; $j++) {
            $palindromeRadius = 0;    // length of 'palindrome radius'
            $R[$j][0] = 0;
            $i = 1;

            while ($i < $size) {
                //  Attempt to expand palindrome centered at i
                while ($str[$i - $palindromeRadius - 1] == $str[$i + $j + $palindromeRadius]) {
                    $palindromeRadius++;    // Incrementing the length of palindromic
                    // radius as and when we find vaid palindrome
                }

                // Assigning the found palindromic length to odd/even
                // length array
                $R[$j][$i] = $palindromeRadius;
                $temp = 1;

                while (($R[$j][$i - $temp] != $palindromeRadius - $temp) && ($temp < $palindromeRadius)) {
                    $R[$j][$i + $temp] = min($R[$j][$i - $temp], $palindromeRadius - $temp);
                    $temp++;
                }

                $palindromeRadius = max($palindromeRadius - $temp, 0);
                $i += $temp;
            }
        }

        // remove 'guards'

        $str = trim($str, "@");
        $str = trim($str, "#");

        $map[$str[0]] = 1;

        // Put all obtained palindromes in a hash map to
        // find only distinct palindromess

        for ($i = 1; $i < $size; $i++) {
            for ($j = 0; $j <= 1; $j++) {
                for ($palRad = $R[$j][$i]; $palRad > 0; $palRad--) {
                    $map[substr($str, $i - $palRad - 1, 2 * $palRad + $j)] = 1;
                }
            }
            $map[$str[$i]] = 1;
        }

        return $map;
    }
}
