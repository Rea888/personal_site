<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PDFController extends Controller
{
    public function downloadPDF()
    {
        $file = public_path("import/assets/pdf/viktoria_resume.pdf");
        $headers = array(
            'Content-Type: application/pdf',
        );

        return response()->download($file, 'viktoria_resume.pdf', $headers);
    }
}
