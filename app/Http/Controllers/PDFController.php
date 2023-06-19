<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PDFController extends Controller
{
    public function downloadPDF()
    {
        $file = public_path("import/assets/pdf/Viktoria_Rakhely.pdf");
        $headers = array(
            'Content-Type: application/pdf',
        );

        return response()->download($file, 'Viktoria_Rakhely.pdf', $headers);
    }
}
