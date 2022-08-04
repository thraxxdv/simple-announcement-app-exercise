<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Tests\Utilities\GetRandomUser;

class AuthTest extends TestCase
{
    public function test_auth_checker()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        Sanctum::actingAs($user, ['auth_token']);

        $this->postJson("/api/v1/auth/check")->assertOk();
    }

    public function test_logout()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        Sanctum::actingAs($user, ['auth_token']);

        $this->postJson("/api/v1/auth/logout")->assertStatus(204);
    }

    public function test_login()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        $this->postJson(
            "/api/v1/auth/login",
            [
                'email' => $user->email,
                'password' => 'password'
            ]
        )
        ->assertOk()
        ->assertJsonStructure(['id', 'name', 'email', 'email_verified_at', 'created_at', 'updated_at', 'token']);
    }
}
