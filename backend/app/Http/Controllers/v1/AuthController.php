<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    private $authService;

    public function __construct() {
        $this->authService = new AuthService();
    }

    public function login(LoginRequest $request)
    {
        $validated = $request->validated();

        return response()->json($this->authService->authenticateUser($validated['email'], $validated['password']));
    }
}
