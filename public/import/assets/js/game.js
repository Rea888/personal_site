(function () {
    "use strict";

    document.addEventListener('DOMContentLoaded', function () {
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');
        var startButton = document.getElementById('startButton');
        var stars = [];
        var player;
        var gameRunning = true;


        var playerImage = new Image();
        var invaderImage = new Image();
        var imagesLoaded = 0;

        playerImage.onload = imageLoaded;
        invaderImage.onload = imageLoaded;

        playerImage.src = 'import/assets/img/starShip.png';
        invaderImage.src = 'import/assets/img/invader1.png';

        // Load images and then initialize the game
        function imageLoaded() {
            imagesLoaded++;
            if (imagesLoaded === 2) {
                startButton.addEventListener('click', function () {
                    startButton.style.display = 'none';
                    initializeGame();
                });
            }
        }

        function adjustCanvasSize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - startButton.offsetHeight;

            if (player) {
                player.x = canvas.width / 2;
                player.y = canvas.height - 30;
            }

        }

        window.addEventListener('resize', adjustCanvasSize);


        function generateStars() {
            stars = [];
            const starCount = 100;
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2,
                    opacity: Math.random(),
                    speed: Math.random() * 0.5 + 0.5
                });
            }
        }

        function updateStars() {
            for (let star of stars) {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                    star.size = Math.random() * 2;
                    star.speed = Math.random() * 0.5 + 0.5;
                }
            }
        }

        function renderStars() {
            for (let star of stars) {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fillRect(star.x, star.y, star.size, star.size);
            }
        }

        function initializeGame() {
            // Lock screen orientation to portrait mode
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('portrait').catch(function (error) {
                    // Handle the error
                    console.error('Could not lock screen orientation:', error);
                });
            }

            gameRunning = true;
            adjustCanvasSize();
            generateStars();

            player = {
                x: canvas.width / 2, y: canvas.height - 40, width: 30, height: 30, bullets: []
            };

            var invaders = [];

            var isLandscape = window.innerWidth > window.innerHeight;

            var invaderRows = isLandscape ? 5 : 6;
            var invaderColumns = isLandscape ? 10 : 6;
            var horizontalPadding = isLandscape ? canvas.width / 20 : canvas.width / 10;
            var verticalPadding = canvas.height / 20;
            var invaderSpacingX = (canvas.width - 2 * horizontalPadding) / invaderColumns;
            var sizeModifier = isLandscape ? 0.3 : 0.6;
            var invaderSize = invaderSpacingX * sizeModifier;
            var invaderSpacingY = invaderSize * 1.2;

            // Adjust invader speed based on orientation
            var invaderSpeed = isLandscape ? 0.2 : 0.5;


            for (var i = 0; i < invaderRows; i++) {
                for (var j = 0; j < invaderColumns; j++) {
                    var xOffset = 0;

                    if (isLandscape) {
                        switch (i % 6) {
                            case 0:
                            case 2:
                            case 4:
                                // Middle
                                xOffset = invaderSpacingX / 2;
                                break;
                            case 1:
                            case 5:
                                // Left
                                xOffset = 0;
                                break;
                            case 3:
                                // Right
                                xOffset = invaderSpacingX;
                                break;
                        }
                    }

                    invaders.push({
                        x: horizontalPadding + j * invaderSpacingX + xOffset,
                        y: verticalPadding + i * invaderSpacingY,
                        width: invaderSize,
                        height: invaderSize
                    });
                }
            }

            var invaderDirection = 1;

            update();


            function update() {

                var hitWall = false;
                var maxHeight = canvas.height - player.height;

                for (var i = 0; i < invaders.length; i++) {
                    invaders[i].x += invaderDirection * invaderSpeed;

                    if (invaders[i].x <= 0 || invaders[i].x + invaders[i].width >= canvas.width) {
                        hitWall = true;
                    }

                    if (invaders[i].y + invaders[i].height >= player.y) {
                        renderGameOver();
                        return;
                    }
                }


                // Check for win condition
                if (invaders.length === 0) {
                    renderWinningMessage();

                    startButton.innerText = 'Restart';
                    startButton.style.display = 'block';
                    gameRunning = false;
                    return;
                }

                if (hitWall) {
                    invaderDirection *= -1;
                    for (var i = 0; i < invaders.length; i++) {
                        invaders[i].y += 20;
                    }
                }

                for (var i = player.bullets.length - 1; i >= 0; i--) {
                    var b = player.bullets[i];
                    b.y -= b.speed;

                    for (var j = invaders.length - 1; j >= 0; j--) {
                        var invader = invaders[j];
                        if (b.x > invader.x && b.x < invader.x + invader.width && b.y > invader.y && b.y < invader.y + invader.height) {
                            invaders.splice(j, 1);
                            player.bullets.splice(i, 1);
                            break;
                        }
                    }

                    if (b.y < 0) player.bullets.splice(i, 1);
                }
                updateStars();

                render();

                if (gameRunning) {
                    requestAnimationFrame(update);
                }
            }

            function render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                renderStars();

                ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

                for (var i = 0; i < invaders.length; i++) {
                    var invader = invaders[i];
                    ctx.drawImage(invaderImage, invader.x, invader.y, invader.width, invader.height);
                }

                // Render bullets
                ctx.fillStyle = '#e4d5f7';
                for (var i = 0; i < player.bullets.length; i++) {
                    var bullet = player.bullets[i];
                    ctx.fillRect(bullet.x, bullet.y, 2, 10);
                }
            }

            function renderGameOver() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#602a70';
                ctx.font = `${canvas.width / 10}px Arial`;
                ctx.textAlign = 'center';
                ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);

                startButton.innerText = 'Restart';
                startButton.style.display = 'block';
                gameRunning = false;
                return;
            }

            function renderWinningMessage() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#602a70';
                ctx.font = '80px Orbitron';
                ctx.textAlign = 'center';
                ctx.fillText('You won!', canvas.width / 2, canvas.height / 2);
            }

            update();
        }

        // For touch controls on mobile devices
        canvas.addEventListener('touchmove', function (e) {
            var touch = e.touches[0];
            var nextX = touch.clientX - canvas.offsetLeft - player.width / 2;
            // Constrain the player's x position
            if (nextX < 0) {
                nextX = 0;
            } else if (nextX > canvas.width - player.width) {
                nextX = canvas.width - player.width;
            }
            player.x = nextX;
            e.preventDefault();
        }, false);

        canvas.addEventListener('touchstart', function (e) {
            player.bullets.push({x: player.x + player.width / 2, y: player.y, speed: 5});
            e.preventDefault();
        }, false);


    });

})();
