<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{

    public function storeContactForm(Request $request)
    {
        $input = $request->all();

        Contact::create($input);

        Mail::send('mail', array(

            'name' => $input['name'],

            'email' => $input['email'],

            'subject' => $input['subject'],

            'user_message' => $input['message'],

        ), function ($text) use ($request) {

            $text->from($request->email);

            $text->to('m.rakhely.viktoria@gmail.com', 'Admin')->subject($request->get('subject'));
        });

    }
}

