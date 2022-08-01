<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = [];

    protected function title(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => strip_tags($value)
        );
    }

    protected function content(): Attribute
    {
        return Attribute::make(
            set: fn ($value) => strip_tags($value)
        );
    }
}
