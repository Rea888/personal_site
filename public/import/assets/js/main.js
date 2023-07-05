(function () {
    "use strict";

    /**
     * Picture moving
     */
    const imageElement = document.getElementById('me');

    const fromX = -80;
    const fromY = 80;

    const originalX = -20;
    const originalY = 20;

    const maxScrollDistance = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));

    const movementMultiplier = 2;

    function updateImagePosition() {
        requestAnimationFrame(() => {
            const scrollDistance = window.scrollY || window.pageYOffset;

            if (scrollDistance >= maxScrollDistance) {
                return;
            }

            const xPos = fromX + (scrollDistance / maxScrollDistance) * movementMultiplier * (originalX - fromX);
            const yPos = fromY + (scrollDistance / maxScrollDistance) * movementMultiplier * (originalY - fromY);

            imageElement.style.transform = `translate(${xPos}px, ${yPos}px)`;
            imageElement.style.webkitTransform = `translate(${xPos}px, ${yPos}px)`;
        });
    }

    window.addEventListener('scroll', updateImagePosition);
    window.addEventListener('touchmove', updateImagePosition);


    /**
     * Moving border
     */
    document.addEventListener("scroll", checkBorderAnimation);

    function checkBorderAnimation() {
        const greetings = document.getElementById("greetings");
        const rect = greetings.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            greetings.classList.add("animate-border");
            document.removeEventListener("scroll", checkBorderAnimation);
        }
    }

    checkBorderAnimation();


    /**
     * Intro title moving up-down
     */

    document.addEventListener("scroll", checkVisibility);

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        const greetings = document.getElementById("title");

        if (isElementInViewport(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkVisibility();


    /**
     * Intro first part moving left-right
     */
    document.addEventListener("scroll", checkVisibilitySlideIn);

    function isElementInViewportSlideIn(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibilitySlideIn() {
        const greetings = document.getElementById("first");

        if (isElementInViewportSlideIn(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkVisibilitySlideIn();

    document.addEventListener("scroll", checkVisibilitySlideIn2);

    function isElementInViewportSlideIn2(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibilitySlideIn2() {
        const greetings = document.getElementById("second");

        if (isElementInViewportSlideIn2(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkVisibilitySlideIn2();

    /**
     * Intro last part moving right-left
     */

    document.addEventListener("scroll", checkSlideInVisibilityRightLeft);

    function isElementInViewportRightLeft(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkSlideInVisibilityRightLeft() {
        const greetings = document.getElementById("third");

        if (isElementInViewportRightLeft(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkSlideInVisibilityRightLeft();


    document.addEventListener("scroll", checkSlideInVisibilityRightLeft2);

    function isElementInViewportRightLeft2(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkSlideInVisibilityRightLeft2() {
        const greetings = document.getElementById("fourth");

        if (isElementInViewportRightLeft2(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkSlideInVisibilityRightLeft2();


    document.addEventListener("scroll", checkSlideInVisibilityRightLeft3);

    function isElementInViewportRightLeft3(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );

    }

    function checkSlideInVisibilityRightLeft3() {

        const greetings = document.getElementById("fifth");
        if (isElementInViewportRightLeft3(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkSlideInVisibilityRightLeft3();


    /**
     * SidePlanet moving left to right
     */
    document.addEventListener("scroll", checkSlideInVisibilityRightLeftPlanet);

    function isElementInViewportRightLeftPlanet(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkSlideInVisibilityRightLeftPlanet() {

        const greetings = document.getElementById("planet");
        if (isElementInViewportRightLeftPlanet(greetings)) {
            greetings.classList.add("visible");
        }
    }


    checkSlideInVisibilityRightLeftPlanet();

    /**
     * Intro title moving up to down
     */
    document.addEventListener("scroll", checkVisibilityIntro);

    function isElementInViewportIntro(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );

    }

    function checkVisibilityIntro() {

        const greetings = document.getElementById("intro");
        if (isElementInViewportIntro(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkVisibilityIntro();

    /**
     * dots
     */
    function generateDots() {
        const dotCount = 200; // Number of dots to generate
        const container = document.getElementById('portfolio');
        const containerWidth = container.clientWidth;

        const containerHeight = container.clientHeight;
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = Math.random() * containerWidth + 'px';
            dot.style.top = Math.random() * containerHeight + 'px';
            container.appendChild(dot);
        }

    }

    function randomizeVisibility() {

        const dots = document.getElementsByClassName('dot');
        for (let dot of dots) {
            // Randomly show or hide each dot independently
            const interval = Math.random() * 3000 + 500;

            dot.style.transitionDuration = interval + 'ms';
            setInterval(() => {
                dot.style.opacity = 1;
                setTimeout(() => {
                    dot.style.opacity = 0;
                }, interval - 1000);
            }, interval);
        }

    }

    // Generate dots on page load
    window.addEventListener('load', () => {
        generateDots();
        randomizeVisibility();
    });

    /**
     * Moving cv part1 from bottom to top
     */

    document.addEventListener("scroll", checkVisibilityBody);

    function isElementInViewportBody(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );

    }

    function checkVisibilityBody() {

        const greetings = document.getElementById("bodyText1");
        if (isElementInViewport(greetings)) {
            greetings.classList.add("visible");
        }
    }


    checkVisibilityBody();

    /**
     * Moving cv part2 from bottom to top
     */

    document.addEventListener("scroll", checkVisibilityBody2);

    function isElementInViewportBody2(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );

    }

    function checkVisibilityBody2() {

        const greetings = document.getElementById("bodyText2");
        if (isElementInViewport(greetings)) {
            greetings.classList.add("visible");
        }
    }

    checkVisibilityBody2();

    /**
     * Moving moon right to left
     */
    document.addEventListener("scroll", checkSlideInVisibilityRightLeftMoon);

    function isElementInViewportRightLeftMoon(moonElement, triggerElement) {
        const moonRect = moonElement.getBoundingClientRect();
        const triggerRect = triggerElement.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        return (
            triggerRect.bottom <= windowHeight &&
            moonRect.bottom >= 0 &&
            moonRect.top <= windowHeight
        );
    }

    function checkSlideInVisibilityRightLeftMoon() {
        const moonElement = document.getElementById("moon");
        const triggerElement = document.getElementById("cvBody");

        if (isElementInViewportRightLeftMoon(moonElement, triggerElement)) {
            moonElement.classList.add("visible");
        }
    }

    checkSlideInVisibilityRightLeftMoon();


    /**
     * Button glowing on touch
     */
    document.addEventListener('DOMContentLoaded', function () {
        // Detect if the device is touch-capable
        if ('ontouchstart' in window) {
            // Add touch event listeners
            document.querySelectorAll('.glow-on-hover').forEach(function (button) {
                button.addEventListener('touchstart', function () {
                    this.classList.add('touch-device');
                });
                button.addEventListener('touchend', function () {
                    this.classList.remove('touch-device');
                });
            });
        }
    });


    /**
     * SpaceX game
     */

    let scaleFactor = 1;

    function adjustCanvasSize(canvas) {
        if (window.innerWidth <= 768) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.width = window.innerWidth + 'px';
            canvas.style.height = window.innerHeight + 'px';
            scaleFactor = Math.min(window.innerWidth / 800, window.innerHeight / 600);
        } else {
            canvas.width = 800;
            canvas.height = 600;
            canvas.style.width = '800px';
            canvas.style.height = '600px';
            scaleFactor = 1;
        }
    }

    let canvas = document.getElementById('game');
    adjustCanvasSize(canvas);

    document.addEventListener('DOMContentLoaded', function () {

        let canvas = document.getElementById('game');
        let ctx = canvas.getContext('2d');
        let stars = [];
        let offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = canvas.width;
        offscreenCanvas.height = canvas.height;
        let offscreenCtx = offscreenCanvas.getContext('2d');


        function generateStars() {
            const starCount = 200;
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2,
                    opacity: Math.random(),
                    speed: Math.random() * 1.5 + 1
                });
            }
            for (let star of stars) {
                offscreenCtx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                offscreenCtx.fillRect(star.x, star.y, star.size, star.size);
            }
        }

        function updateStars() {
            for (let star of stars) {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                    star.size = Math.random() * 2;
                    star.speed = Math.random() * 1.5 + 1;
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
            let player = {
                x: canvas.width / 2 - (20 * scaleFactor),
                y: canvas.height - (60 * scaleFactor),
                width: 50 * scaleFactor,
                height: 50 * scaleFactor,
                bullets: []
            };
            let score = 0;
            let hearts = 3;
            let invaderBulletSpeed = 3;
            let invaders = [];
            let invaderBullets = [];

            let playerImage = new Image();
            playerImage.src = 'import/assets/img/starShip.png';

            let invaderImage = new Image();
            invaderImage.src = 'import/assets/img/invader1.png';

            canvas.addEventListener('mousemove', debounce(function (e) {
                let nextX = e.clientX - canvas.offsetLeft - player.width / 2;

                if (nextX < 0) {
                    nextX = 0;
                } else if (nextX > canvas.width - player.width) {
                    nextX = canvas.width - player.width;
                }
                player.x = nextX;
            }, 10));

            function debounce(func, delay) {
                let debounceTimer;
                return function () {
                    const context = this;
                    const args = arguments;
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(() => func.apply(context, args), delay);
                }
            }


            canvas.addEventListener('click', function (e) {
                player.bullets.push({x: player.x + player.width / 2, y: player.y, speed: 5});
            });

            function update() {
                // Invaders and invader bullets logic
                if (Math.random() < 0.05) {
                    invaders.push({x: Math.random() * canvas.width, y: 0, speed: 2, size: 30});
                }

                for (let i = invaders.length - 1; i >= 0; i--) {
                    invaders[i].y += invaders[i].speed;

                    if (Math.random() < 0.01) {
                        invaderBullets.push({
                            x: invaders[i].x + invaders[i].size / 2,
                            y: invaders[i].y + invaders[i].size,
                            width: 3, // Bullet width
                            height: 8, // Bullet height
                            speed: invaderBulletSpeed
                        });
                    }

                    // Player and Invader collision logic
                    if (player.x < invaders[i].x + invaders[i].size &&
                        player.x + player.width > invaders[i].x &&
                        player.y < invaders[i].y + invaders[i].size &&
                        player.y + player.height > invaders[i].y) {


                        hearts -= 1;  // assuming you have a variable named hearts
                        invaders.splice(i, 1); // remove the invader

                        if (hearts <= 0) {
                            hearts = 0; //preventing hearts go below 0
                            renderGameOver();
                            return;
                        }

                        continue;
                    }
                }

                // Invader bullets collision with player
                for (let i = invaderBullets.length - 1; i >= 0; i--) {
                    let b = invaderBullets[i];
                    b.y += b.speed;

                    // If bullet hits player
                    if (player.x < b.x + b.width &&
                        player.x + player.width > b.x &&
                        player.y < b.y + b.height &&
                        player.y + player.height > b.y) {

                        hearts -= 1;
                        invaderBullets.splice(i, 1);

                        if (hearts <= 0) {
                            hearts = 0;
                            renderGameOver();
                            return;
                        }

                        continue;
                    }

                    if (b.y > canvas.height) {
                        invaderBullets.splice(i, 1);
                    }
                }

                for (let i = player.bullets.length - 1; i >= 0; i--) {
                    let b = player.bullets[i];
                    b.y -= b.speed;

                    for (let j = invaders.length - 1; j >= 0; j--) {
                        let invader = invaders[j];
                        if (b.x > invader.x && b.x < invader.x + invader.size &&
                            b.y > invader.y && b.y < invader.y + invader.size) {
                            invaders.splice(j, 1);
                            player.bullets.splice(i, 1);

                            score += 10;  // Increase the score
                            break;
                        }
                    }

                    if (b.y < 0) player.bullets.splice(i, 1);
                }


                // Update the stars position
                updateStars();

                render(update);
            }

            let fullHeartImg = new Image();
            fullHeartImg.src = 'import/assets/img/heart.png';

            let emptyHeartImg = new Image();
            emptyHeartImg.src = 'import/assets/img/emptyheart.png';

            function render(callback) {

                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Render stars
                renderStars();


                // Render player using the image
                ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);


                // Render invaders using the image
                for (let i = 0; i < invaders.length; i++) {
                    let invader = invaders[i];
                    ctx.drawImage(invaderImage, invader.x, invader.y, invader.size, invader.size);
                }

                // Render bullets
                ctx.fillStyle = '#e4d5f7';
                for (let i = 0; i < player.bullets.length; i++) {
                    let bullet = player.bullets[i];
                    ctx.fillRect(bullet.x, bullet.y, 2, 10);
                }

                // Render invader bullets
                ctx.fillStyle = '#e8449c';
                for (let i = 0; i < invaderBullets.length; i++) {
                    let bulletInvader = invaderBullets[i];
                    ctx.fillRect(bulletInvader.x, bulletInvader.y, bulletInvader.width, bulletInvader.height);
                }

                // Render score
                ctx.fillStyle = '#fff';
                ctx.font = '30px Arial';
                ctx.textAlign = 'right';
                ctx.fillText('Score: ' + score, canvas.width - 10, 30);


                // Draw hearts
                let heartSize = 30;
                let heartGap = 10;
                let heartY = 10;
                let heartX = 10;

                for (let i = 0; i < 3; i++) {
                    let heartImg = i < hearts ? fullHeartImg : emptyHeartImg;
                    ctx.drawImage(heartImg, heartX + i * (heartSize + heartGap), heartY, heartSize, heartSize);
                }
                requestAnimationFrame(callback);
            }


            function renderGameOver() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#602a70';
                ctx.font = '80px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
                ctx.font = '40px Arial';
                ctx.fillText('Final Score: ' + score, canvas.width / 2, canvas.height / 2 + 60);

                score = 0;
            }

            update();
        }

        let startButton = document.getElementById('startGameButton');
        let restartButton = document.getElementById('restartGameButton');

        startButton.addEventListener('click', function () {
            if (window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // If on mobile or tablet, redirect to the game blade
                window.location.href = '/game';
            } else {
                generateStars();
                canvas.style.display = 'block';
                startButton.style.display = 'none';
                restartButton.style.display = 'block';
                initializeGame();
            }
        });

        restartButton.addEventListener('click', function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            generateStars();
            initializeGame();
        });

    });


    /**
     * Download PDF file
     */
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('download-link').addEventListener('click', function (e) {
            e.preventDefault();
            var url = this.getAttribute('href');
            window.open(url, '_blank');
        });
    });
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }

    }
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }

    }
    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)

    }
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)

    onscroll(document, navbarlinksActive)
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')

        let offset = header.offsetHeight
        if (!header.classList.contains('header-scrolled')) {
            offset -= 16

        }
        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */

    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash)
            }
        }
    });

    /**
     * Hero type effect
     */
    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    /**
     * Testimonials slider
     */
    new Swiper('.services-slider', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },

        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });

    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });

            }, true);
        }

    });

    /**
     * Initiate portfolio lightbox
     */
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        }
    });

})()
