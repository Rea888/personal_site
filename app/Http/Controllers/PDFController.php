<?php

namespace App\Http\Controllers;

use App\Services\VersioningAssetsService;

class PDFController extends Controller
{
    public function downloadPDF()
    {
        $file = public_path(env('BASE_URL') . env('VERSION_HASH') . '/assets/pdf/Viktoria_Rakhely.pdf');
        $headers = array(
            'Content-Type: application/pdf',
        );

        return response()->download($file, 'Viktoria_Rakhely.pdf', $headers);
    }
}
