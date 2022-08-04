<?php

namespace Tests\Feature;

use App\Models\Announcement;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;
use Tests\Utilities\GetRandomUser;

class AnnouncementTest extends TestCase
{
    use WithFaker;
    public function test_get_announcements()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();

        Sanctum::actingAs($user, ['auth_token']);
        $this->getJson("/api/v1/announcements")
        ->assertStatus(200)
        ->assertJsonStructure([['id', 'title', 'content', 'start_date', 'end_date']]);
    }

    public function test_store_announcement()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        Sanctum::actingAs($user, ['auth_token']);
        
        $startDate = $this->faker->dateTimeBetween('-15 days', '+15 days');
        $endDate   = date('Y-m-d', strtotime("+" .rand(1, 7) . ' days', $startDate->getTimestamp()));

        $this->postJson("/api/v1/announcements", [
            'title' => $this->faker->sentence(),
            'content' => $this->faker->sentence(15),
            'start_date' => date('Y-m-d', $startDate->getTimestamp()),
            'end_date' => $endDate
        ])
        ->assertStatus(201)
        ->assertJsonStructure(['id', 'title', 'content', 'start_date', 'end_date']);
    }

    public function test_get_announcement()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        Sanctum::actingAs($user, ['auth_token']);

        $announcement = Announcement::inRandomOrder()->first();

        $this->getJson("/api/v1/announcements/" . $announcement->id)
        ->assertStatus(200)
        ->assertJsonStructure(['id', 'title', 'content', 'start_date', 'end_date']);
    }

    public function test_update_announcement()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        Sanctum::actingAs($user, ['auth_token']);

        $announcement = Announcement::inRandomOrder()->first();

        $startDate = $this->faker->dateTimeBetween('-15 days', '+15 days');
        $endDate   = date('Y-m-d', strtotime("+" .rand(1, 7) . ' days', $startDate->getTimestamp()));

        $this->putJson("/api/v1/announcements/" . $announcement->id, [
            'title' => $this->faker->sentence(),
            'content' => $this->faker->sentence(15),
            'start_date' => date('Y-m-d', $startDate->getTimestamp()),
            'end_date' => $endDate
        ])->assertNoContent();
    }

    public function test_delete_announcement()
    {
        $getUser = new GetRandomUser();
        $user = $getUser->handle();
        Sanctum::actingAs($user, ['auth_token']);

        $announcement = Announcement::first();

        $this->deleteJson("/api/v1/announcements/" . $announcement->id)->assertNoContent();
    }
}
