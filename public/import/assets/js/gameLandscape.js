const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButtonLandscape');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let player;
let bullets;
let invaders;

var playerImage = new Image();
var invaderImage = new Image();

playerImage.src = 'import/assets/img/starShipSide.png';
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
            size: Math.random() * 2,
            opacity: Math.random(),
            speed: Math.random() * 5 + 1
        });
    }
}

function updateStars() {
    for (let star of stars) {
        star.x -= star.speed;
        if (star.x < 0) {
            star.x = canvas.width;
            star.y = Math.random() * canvas.height;
            star.size = Math.random() * 2;
            star.speed = Math.random() * 5 + 1;
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
        x: 0,
        y: canvas.height / 2,
        speed: 3,
        size: 50,
    };
    generateStars();

    bullets = [];
    invaders = [];

    window.addEventListener('touchstart', function (e) {
        touchY = e.touches[0].clientY;
        bullets.push({x: player.x + player.size, y: player.y + player.size / 2, size: 4});
    }, false);

    window.addEventListener('touchmove', function (e) {
        let delta = e.touches[0].clientY - touchY;

        if (delta > 0 && player.y < canvas.height - player.size) {
            player.y += player.speed;
        } else if (delta < 0 && player.y > 0) {
            player.y -= player.speed;
        }
        // Ensure player doesn't move off the bottom of the screen
        if (player.y > canvas.height - player.size) {
            player.y = canvas.height - player.size;
        }
        // Ensure player doesn't move off the top of the screen
        else if (player.y < 0) {
            player.y = 0;
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

    // Clear the canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updateStars();

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
        invaderBullets[i].x -= 11;

        if (invaderBullets[i].x < player.x + player.size &&
            invaderBullets[i].x + invaderBullets[i].size > player.x &&
            invaderBullets[i].y < player.y + player.size &&
            invaderBullets[i].y + invaderBullets[i].size > player.y) {

            hearts -= 1;
            invaderBullets.splice(i, 1);
        }
    }


    // Update invaders
    if (Math.random() < 0.05) {
        invaders.push({x: canvas.width, y: Math.random() * canvas.height, speed: 5, size: 30});
    }

    for (let i = 0; i < invaders.length; i++) {
        invaders[i].x -= invaders[i].speed;
        if (Math.random() < 0.005) {
            invaderBullets.push({x: invaders[i].x, y: invaders[i].y + invaders[i].size / 2, size: 5});
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

    renderStars(); // Render stars here

    // Draw player
    ctx.drawImage(playerImage, player.x, player.y, player.size, player.size);

    // Draw bullets
    ctx.fillStyle = '#e4d5f7';
    bullets.forEach(b => ctx.fillRect(b.x, b.y, b.size, b.size));

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
    if (window.innerHeight > window.innerWidth) { // Portrait
        window.location.href = "game";
    }
}

window.addEventListener('load', checkOrientation);
window.addEventListener('resize', function () {

    setTimeout(checkOrientation, 200);
}, false);
