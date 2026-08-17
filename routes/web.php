<?php
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\OtpVerificationController;
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
// navigation route
Route::get('/product', function () {
    return Inertia::render('Product');
})->name('product');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/academy', function () {
    return Inertia::render('Academy');
})->name('academy');
Route::get('/banglaLiteratureHistory', function () {
    return Inertia::render('Bangla_Literature_and_History');
})->name('banglaLiteratureHistory');
//


Route::middleware('auth')->group(function () {
    Route::get('verify-otp', [OtpVerificationController::class, 'show'])->name('verification.otp');
    Route::post('verify-otp', [OtpVerificationController::class, 'verify'])->name('verification.otp.verify');
    Route::post('resend-otp', [OtpVerificationController::class, 'resend'])->name('verification.otp.resend');
});
// auth route
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
?>
