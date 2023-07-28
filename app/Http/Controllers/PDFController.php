<?php

namespace App\Http\Controllers;

use App\Services\VersioningAssetsService;
use GuzzleHttp\Client;

class PDFController extends Controller
{
    public function downloadPDF()
    {
        $client = new Client();
        $response = $client->get('https://static.viktoriarakhely.eu/80c945953a617f0f358228172c09624fcd718ebe/assets/pdf/Viktoria_Rakhely.pdf');

        // Ensure the directory exists
        if (!file_exists(public_path() . '/assets/pdf/')) {
            mkdir(public_path() . '/assets/pdf/', 0777, true);
        }

        file_put_contents(public_path() . '/assets/pdf/Viktoria_Rakhely.pdf', $response->getBody());

        $file = public_path() . '/assets/pdf/Viktoria_Rakhely.pdf';
        $headers = array('Content-Type: application/pdf');

        return response()->download($file, 'Viktoria_Rakhely.pdf', $headers);
    }
}
