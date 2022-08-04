<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

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
        $startDate = $this->faker->dateTimeBetween('-15 days', '+15 days');
        $endDate   = date('Y-m-d', strtotime("+" .rand(1, 7) . ' days', $startDate->getTimestamp()));

        return [
            'title' => $this->faker->sentence(rand(4, 6)),
            'content' => $this->faker->paragraph(rand(4, 6)),
            'start_date' => $startDate,
            'end_date' => $endDate
        ];
    }
}
