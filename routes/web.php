<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PDFController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('greetings');
});

Route::get('/download-pdf', [PDFController::class, 'downloadPDF']);

Route::post('/', [ContactController::class, 'storeContactForm'])->name('greetings');

Route::get('/game', function () {
    return view('game');
});

Route::get('/landscape', function () {
    return view('gameLandscape');
});
