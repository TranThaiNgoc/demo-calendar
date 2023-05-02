<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use DateTime;
use App\Models\Event;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Calendar');
    }

    public function CreateEvent() {
        return inertia('CreateEvent');
    }

    public function List() {
        $events = Event::all();
        return response()->json($events);
    }

    public function Create(Request $request) {
        $events = Event::create($request->all());
        return;
    }
}
