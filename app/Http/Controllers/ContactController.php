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

            'message' => $input['message'],

        ), function ($message) use ($request) {

            $message->from($request->email);

            $message->to('m.rakhely.viktoria@gmail.com', 'Admin')->subject($request->get('subject'));

        });


    }
}
