<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Announcement\AnnouncementRequest;
use App\Models\Announcement;
use App\Services\AnnouncementService;

class AnnouncementController extends Controller
{
    
    public function index()
    {
        return response()->json(Announcement::orderByDesc('start_date')->get());
    }
    
    public function store(AnnouncementRequest $request)
    {
        $validated = $request->validated();

        return response()->json(Announcement::create($validated), 201);
    }
    
    public function show(Announcement $announcement)
    {
        return response()->json($announcement);
    }
    
    public function update(AnnouncementRequest $request, Announcement $announcement)
    {
        $validated = $request->validated();
        $announcement->title = $validated['title'];
        $announcement->content = $validated['content'];
        $announcement->start_date = $validated['start_date'];
        $announcement->end_date = $validated['end_date'];
        $announcement->save();

        return response('', 204);
    }

    public function destroy(Announcement $announcement)
    {
        $announcement->delete();

        return response('', 204);
    }
}
