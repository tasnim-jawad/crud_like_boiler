<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function home_page()
    {
        return Inertia::render('Home/Home', [
            'event' => [
                'title' => 'Home Page',
            ]
        ]);
    }
}
