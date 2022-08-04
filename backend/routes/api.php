<?php

use App\Http\Controllers\v1\AnnouncementController;
use App\Http\Controllers\v1\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::prefix('v1')->group(function(){

    Route::prefix('auth')->group(function(){

        Route::post('login', [AuthController::class, 'login']);

        Route::middleware(['auth:sanctum'])->group(function(){
            Route::post('check', [AuthController::class, 'authCheck']);
            Route::post('logout', [AuthController::class, 'logout']);
        });

    });

    Route::resource('announcements', AnnouncementController::class)->except(['edit', 'create'])->middleware(['auth:sanctum']);
    
});