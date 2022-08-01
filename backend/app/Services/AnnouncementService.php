<?php 

namespace App\Services;

use App\Models\Announcement;

class AnnouncementService {
    public function getAnnouncements()
    {
        return Announcement::orderByDesc('id')->get();
    }
}