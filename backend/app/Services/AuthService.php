<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthService {
    public function authenticateUser(string $email, string $password): User
    {
        $creds = [
            'email' => $email,
            'password' => $password,
        ];
        
        if (!Auth::attempt($creds)) {
            abort(401);
        } else {
            $user = User::where('email', $email)->first();
            $user->token = $user->createToken('auth_token')->plainTextToken;
            return $user;
        }
    }
}