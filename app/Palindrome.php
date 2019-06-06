<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Palindrome extends Model
{
    protected $fillable = [
        'value',
        'is_palindrome',
        'palindromes',
    ];

    protected $casts = [
        'palindromes' => 'array',
    ];
}
