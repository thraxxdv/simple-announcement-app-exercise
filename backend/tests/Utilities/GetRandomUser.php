<?php

namespace Tests\Utilities;

use App\Models\User;

class GetRandomUser {
    public function handle(){
        return User::inRandomOrder()->first();
    }
}