<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Announcement\StoreAnnouncementRequest;
use App\Http\Requests\Announcement\UpdateAnnouncementRequest;
use App\Models\Announcement;
use App\Services\AnnouncementService;

class AnnouncementController extends Controller
{
    
    public function index()
    {
        return response()->json(Announcement::orderByDesc('start_date')->get());
    }
    
    public function store(StoreAnnouncementRequest $request)
    {
        $validated = $request->validated();

        return response()->json(Announcement::create($validated));
    }
    
    public function show(Announcement $announcement)
    {
        return response()->json($announcement);
    }
    
    public function update(UpdateAnnouncementRequest $request, Announcement $announcement)
    {
        //
    }

    public function destroy(Announcement $announcement)
    {
        //
    }
}
