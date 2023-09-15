<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

    <title>Game</title>
    <!-- Include your CSS here -->
    <link rel="stylesheet" href="{{asset(env('BASE_URL') . env('VERSION_HASH'). '/assets/css/gameLandscape.css')}}">
</head>
<body>

<div id="container">
    <canvas id="game"></canvas>
    <div class="button" id="startButtonLandscape">
        <div class="line-container">
            <span class="text">Start Game</span>
            <div class="line line--top-left line--thick thick-line--short"></div>
            <div class="line line--top-right line--thick thick-line--short"></div>
            <div class="line line--bottom-left line--thick thick-line--long"></div>
            <div class="line line--bottom-right line--thick thick-line--long"></div>
            <div class="line line--top line--thin"></div>
            <div class="line line--bottom line--thin"></div>
        </div>

    </div>
</div>

<script src="{{asset(env('BASE_URL') . env('VERSION_HASH'). '/assets/js/gameLandscape.min.js')}}"></script>
</body>
</html>
