<?php

namespace App\Http\Controllers;

class PDFController extends Controller
{
    public function downloadPDF()
    {
        $file = public_path("https://static.viktoriarakhely.eu/assets/pdf/Viktoria_Rakhely.pdf");
        $headers = array(
            'Content-Type: application/pdf',
        );

        return response()->download($file, 'Viktoria_Rakhely.pdf', $headers);
    }
}
