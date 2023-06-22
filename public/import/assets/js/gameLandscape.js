const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButtonLandscape');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player;
let bullets;
let invaders;

let touchY;

let hearts = 3; // Player's lives
let isGameOver = false;

let fullHeartImg = new Image();
fullHeartImg.src = 'import/assets/img/heart.png';

let emptyHeartImg = new Image();
emptyHeartImg.src = 'import/assets/img/emptyheart.png';

let score = 0;

let invaderBullets = [];


function startGame() {
    player = {
        x: 0,
        y: canvas.height / 2,
        speed: 2,
        size: 20,
    };

    bullets = [];
    invaders = [];

    window.addEventListener('touchstart', function (e) {
        touchY = e.touches[0].clientY;
        bullets.push({x: player.x + player.size, y: player.y + player.size / 2, size: 10});
    }, false);

    window.addEventListener('touchmove', function (e) {
        let delta = e.touches[0].clientY - touchY;

        if (delta > 0 && player.y < canvas.height - player.size) {
            player.y += player.speed;
        } else if (delta < 0 && player.y > 0) {
            player.y -= player.speed;
        }

        touchY = e.touches[0].clientY;
    }, false);


    startButton.style.display = 'none';  // Hide start button
    startButton.textContent = 'Restart Game';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    player.y = canvas.height / 2;
    isGameOver = false;
    hearts = 3; //
    update();
}

startButton.addEventListener('click', startGame);

function update() {
    if (isGameOver) return;
    // Update bullets
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].x += 5;

        for (let j = 0; j < invaders.length; j++) {
            if (bullets[i].x < invaders[j].x + invaders[j].size &&
                bullets[i].x + bullets[i].size > invaders[j].x &&
                bullets[i].y < invaders[j].y + invaders[j].size &&
                bullets[i].y + bullets[i].size > invaders[j].y) {

                invaders.splice(j, 1);
                bullets.splice(i, 1);
                score += 10;
                break;
            }
        }
    }

    // Update invader bullets
    for (let i = 0; i < invaderBullets.length; i++) {
        invaderBullets[i].x -= 5;

        if (invaderBullets[i].x < player.x + player.size &&
            invaderBullets[i].x + invaderBullets[i].size > player.x &&
            invaderBullets[i].y < player.y + player.size &&
            invaderBullets[i].y + invaderBullets[i].size > player.y) {

            hearts -= 1;
            invaderBullets.splice(i, 1);
        }
    }

    // Update invaders
    if (Math.random() < 0.02) {
        invaders.push({x: canvas.width, y: Math.random() * canvas.height, speed: 2, size: 20});
    }

    for (let i = 0; i < invaders.length; i++) {
        invaders[i].x -= invaders[i].speed;
        if (Math.random() < 0.01) {
            invaderBullets.push({x: invaders[i].x, y: invaders[i].y + invaders[i].size / 2, size: 10});
        }
        if (player.x < invaders[i].x + invaders[i].size &&
            player.x + player.size > invaders[i].x &&
            player.y < invaders[i].y + invaders[i].size &&
            player.y + player.size > invaders[i].y) {

            hearts -= 1;
            invaders.splice(i, 1);
        }
    }

    if (hearts <= 0) {
        isGameOver = true;
        gameOver();
        return;
    }

    // Render
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    ctx.fillStyle = 'green';
    ctx.fillRect(player.x, player.y, player.size, player.size);

    // Draw bullets
    ctx.fillStyle = 'red';
    bullets.forEach(b => ctx.fillRect(b.x, b.y, b.size, b.size));

    // Draw invader bullets
    ctx.fillStyle = 'orange';
    invaderBullets.forEach(b => ctx.fillRect(b.x, b.y, b.size, b.size));

    // Draw invaders
    ctx.fillStyle = 'blue';
    invaders.forEach(i => ctx.fillRect(i.x, i.y, i.size, i.size));

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
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2 - 40);
    ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2);
    startButton.style.display = 'block';
}

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) { // Portrait
        window.location.href = "game";
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', function () {

    setTimeout(checkOrientation, 200);
}, false);
