<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Tests\Utilities\GetRandomUser;

class AnnouncementTest extends TestCase
{
    public function test_fetch_announcements()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        Sanctum::actingAs($user, ['auth_token']);
        $this->getJson("/api/v1/announcements")
        ->assertStatus(200)
        ->assertJsonStructure([['id', 'title', 'content', 'start_date', 'end_date']]);
    }
}
