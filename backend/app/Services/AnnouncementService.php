<?php 

namespace App\Services;

use App\Models\Announcement;
use Illuminate\Support\Facades\Auth;

class AnnouncementService {
    public function getAnnouncements()
    {
        return Announcement::orderByDesc('start_date')->get();
    }

    public function createAnnouncement(array $validatedData)
    {
        $validatedData['user_id'] = Auth::user()->id;
        return Announcement::create($validatedData);
    }
}