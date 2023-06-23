const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player;


let bullets;
let invaders;

var playerImage = new Image();
var invaderImage = new Image();


playerImage.src = 'import/assets/img/starShip.png';
invaderImage.src = 'import/assets/img/invader1.png';

let touchY;

let hearts = 3; // Player's lives
let isGameOver = false;

let fullHeartImg = new Image();
fullHeartImg.src = 'import/assets/img/heart.png';

let emptyHeartImg = new Image();
emptyHeartImg.src = 'import/assets/img/emptyheart.png';

let score = 0;

let invaderBullets = [];

let stars;

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

function startGame() {

    player = {
        x: canvas.width / 2,
        y: canvas.height - 40,
        width: 50,
        height: 50,
        bullets: []
    };

    generateStars();

    bullets = [];
    invaders = [];

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
        player.bullets.push({x: player.x + player.width / 2, y: player.y, speed: 5, size: 5});
        e.preventDefault();
    }, false);


    startButton.style.display = 'none';  // Hide start button
    startButton.textContent = 'Restart Game';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    player.y = canvas.height - player.height - 10; // Adjust the value here to position the player properly
    isGameOver = false;
    hearts = 3; //
    update();
}

startButton.addEventListener('click', startGame);

function update() {
    if (isGameOver) return;

    // Clear the canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateStars();

    for (var i = player.bullets.length - 1; i >= 0; i--) {
        var b = player.bullets[i];
        b.y -= b.speed;

        for (var j = invaders.length - 1; j >= 0; j--) {
            var invader = invaders[j];
            if (b.x < invader.x + invader.size && b.x + b.size > invader.x &&
                b.y < invader.y + invader.size && b.y + b.size > invader.y) {
                invaders.splice(j, 1);
                player.bullets.splice(i, 1);
                score += 10;
                break;
            }
        }

        if (b.y < 0) player.bullets.splice(i, 1);
    }


    // Update invader bullets
    for (let i = 0; i < invaderBullets.length; i++) {
        invaderBullets[i].y += 5; // Add to the y-coordinate

        if (invaderBullets[i].x < player.x + player.width &&
            invaderBullets[i].x + invaderBullets[i].size > player.x &&
            invaderBullets[i].y < player.y + player.height &&
            invaderBullets[i].y + invaderBullets[i].size > player.y) {

            hearts -= 1;
            invaderBullets.splice(i, 1);
        }
    }


    // Update invaders
    if (Math.random() < 0.02) {
        invaders.push({x: Math.random() * canvas.width, y: 0, speed: 2, size: 30});
    }

    for (let i = 0; i < invaders.length; i++) {
        invaders[i].y += invaders[i].speed;
        if (Math.random() < 0.001) {
            invaderBullets.push({
                x: invaders[i].x + invaders[i].size / 2,
                y: invaders[i].y + invaders[i].size,
                size: 5
            });
        }
        if (player.x < invaders[i].x + invaders[i].size &&
            player.x + player.width > invaders[i].x &&
            player.y < invaders[i].y + invaders[i].size &&
            player.y + player.height > invaders[i].y) {

            hearts -= 1;
            invaders.splice(i, 1);
        }
    }

    if (hearts <= 0) {
        isGameOver = true;
        gameOver();
        return;
    }

    renderStars(); // Render stars here

    // Draw player
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);

    // Draw bullets

    ctx.fillStyle = '#e4d5f7';
    player.bullets.forEach(b => ctx.fillRect(b.x, b.y, b.size, b.size));


    // Draw invader bullets
    ctx.fillStyle = '#e8449c';
    invaderBullets.forEach(b => ctx.fillRect(b.x, b.y, b.size, b.size));

    // Draw invaders

    for (var i = 0; i < invaders.length; i++) {
        var invader = invaders[i];
        ctx.drawImage(invaderImage, invader.x, invader.y, invader.size, invader.size);
    }

    // Draw hearts
    for (let i = 0; i < 3; i++) {
        if (i < hearts) {
            ctx.drawImage(fullHeartImg, 10 + i * 30, 10, 20, 20);
        } else {
            ctx.drawImage(emptyHeartImg, 10 + i * 30, 10, 20, 20);
        }
    }

    // Draw score
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "right";
    ctx.fillText("Score: " + score, canvas.width - 10, 30);


    // Loop
    requestAnimationFrame(update);
}


function gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "40px Arial";
    ctx.fillStyle = "#e08400";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 40);
    ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2);
    startButton.style.display = 'block';
    score = 0;
}

function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
        window.location.href = "landscape";
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', function () {
    // Refresh the page after a delay to make sure new orientation is correctly detected
    setTimeout(checkOrientation, 200);
}, false);

