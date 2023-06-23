document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const borderBottomColor = '#e4d5f7';
    const borderBottomHeight = 1;

    let particlesArray;
    let lastParticleCreationTime = 0;
    const particleCreationInterval = 10;
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });


    class Particle {
        constructor(x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.size > 0.2) this.size -= 0.1;
        }

        drawBorder() {
            ctx.fillStyle = borderBottomColor;
            ctx.fillRect(0, canvas.height - borderBottomHeight, canvas.width, borderBottomHeight);
        }

        draw() {
            ctx.fillStyle = '#8C43F6';
            ctx.strokeStyle = '#8860D0';
            ctx.shadowColor = '#8860D0';
            ctx.shadowBlur = 10;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            particlesArray.push(new Particle(
                Math.random() * canvas.width,
                Math.random() * canvas.height,
                Math.random() * 5 + 1
            ));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray[0].drawBorder();

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();

            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = '#8860D0';
                    ctx.lineWidth = 0.2;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    function createParticle(x, y) {
        const currentTime = new Date().getTime();

        if (currentTime - lastParticleCreationTime > particleCreationInterval) {
            particlesArray.push(new Particle(x, y, Math.random() * 5 + 1));
            lastParticleCreationTime = currentTime;
        }
    }

    canvas.addEventListener('mousemove', (event) => {
        createParticle(event.clientX, event.clientY);
    });

    canvas.addEventListener('touchstart', (event) => {
        event.preventDefault();
        const touch = event.touches[0];
        createParticle(touch.clientX, touch.clientY);
    });

    canvas.addEventListener('touchmove', (event) => {
        event.preventDefault();
        const touch = event.touches[0];
        createParticle(touch.clientX, touch.clientY);
    });

    init();
    animate();
});
