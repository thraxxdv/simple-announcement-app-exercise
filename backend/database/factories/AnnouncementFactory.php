<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Log;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Announcement>
 */
class AnnouncementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $startDate = $this->faker->dateTimeBetween('now', '+60 days');
        $endDate   = date('Y-m-d', strtotime('+'.rand(1, 7).' days', $startDate->getTimestamp()));
        // $startDate = ();

        return [
            'user_id' => User::inRandomOrder()->first()->id,
            'title' => $this->faker->sentence(rand(4, 6)),
            'content' => $this->faker->paragraph(rand(4, 6)),
            'start_date' => $startDate,
            'end_date' => $endDate
        ];
    }
}
