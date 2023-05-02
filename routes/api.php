<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['prefix' => 'event'], function() {
    Route::get('/', [HomeController::class, 'List']);
    Route::post('/', [HomeController::class, 'Create']);
    Route::get('/{id}', [HomeController::class, 'Detail']);
    Route::put('/{id}', [HomeController::class, 'Update']);
    Route::delete('/{id}', [HomeController::class, 'Delete']);
});
