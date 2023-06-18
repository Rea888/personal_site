(function() {
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
            const interval = Math.random() * 3000 + 500; // Random interval between 0.5 and 3.5 seconds
            dot.style.transitionDuration = interval + 'ms'; // Set the transition duration for each dot

            setInterval(() => {
                dot.style.opacity = 1; // Show the dot
                setTimeout(() => {
                    dot.style.opacity = 0; // Hide the dot after a delay
                }, interval - 1000); // Start hiding the dot 1 second before the next interval
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

        // Check if the bottom of the triggerElement is at or above the bottom of the viewport
        // and the moonElement is in the viewport
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
    document.addEventListener('DOMContentLoaded', function() {
        // Detect if the device is touch-capable
        if ('ontouchstart' in window) {
            // Add touch event listeners
            document.querySelectorAll('.glow-on-hover').forEach(function(button) {
                button.addEventListener('touchstart', function() {
                    this.classList.add('touch-device');
                });
                button.addEventListener('touchend', function() {
                    this.classList.remove('touch-device');
                });
            });
        }
    });



    /**
     * spaceX game
     */
    document.addEventListener('DOMContentLoaded', function() {
        var startButton = document.getElementById('startGameButton');
        var restartButton = document.getElementById('restartGameButton');
        var canvas = document.getElementById('game');
        var ctx = canvas.getContext('2d');

        var stars = [];

        function generateStars() {
            const starCount = 200;
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
                star.y -= star.speed;
                if (star.y < 0) {
                    star.y = canvas.height;
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
            var player = {
                x: 300,
                y: 550,
                width: 40,
                height: 30,
                bullets: []
            };

            var invaders = [];
            for (var i = 0; i < 6; i++) {
                for (var j = 0; j < 15; j++) {
                    invaders.push({ x: 40 * j + 10, y: 30 * i + 10, width: 30, height: 20 });
                }
            }

            var invaderSpeed = 1;
            var invaderDirection = 1;

            // For touch controls on mobile devices
            canvas.addEventListener('touchmove', function(e) {
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

            // For mouse controls on desktop
            canvas.addEventListener('mousemove', function(e) {
                var nextX = e.clientX - canvas.offsetLeft - player.width / 2;
                // Constrain the player's x position
                if (nextX < 0) {
                    nextX = 0;
                } else if (nextX > canvas.width - player.width) {
                    nextX = canvas.width - player.width;
                }
                player.x = nextX;
            });

            canvas.addEventListener('click', function(e) {
                player.bullets.push({ x: player.x + player.width / 2, y: player.y, speed: 5 });
            });

            function update() {
                var hitWall = false;

                for (var i = 0; i < invaders.length; i++) {
                    invaders[i].x += invaderSpeed * invaderDirection;
                    if (invaders[i].x <= 0 || invaders[i].x + invaders[i].width >= canvas.width) {
                        hitWall = true;
                    }
                    if (invaders[i].y + invaders[i].height >= player.y) {
                        renderGameOver();
                        return;
                    }
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
                        if (b.x > invader.x && b.x < invader.x + invader.width &&
                            b.y > invader.y && b.y < invader.y + invader.height) {
                            invaders.splice(j, 1);
                            player.bullets.splice(i, 1);
                            break;
                        }
                    }

                    if (b.y < 0) player.bullets.splice(i, 1);
                }

                // Update the stars position
                updateStars();

                render();
                requestAnimationFrame(update);
            }

            function render() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Render stars
                renderStars();

                // Render player
                var playerImage = new Image();
                playerImage.src = 'import/assets/img/starShip.png';

                // Render player using the image
                    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);


                // Render invaders
                var invaderImage = new Image();
                invaderImage.src = 'import/assets/img/invader1.png';

                // Render invaders using the image
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

                // Check for win condition
                if (invaders.length === 0) {
                    ctx.fillStyle = '#602a70';
                    ctx.font = '80px Arial';
                    ctx.textAlign = 'center';
                    ctx.fillText('You won!', canvas.width / 2, canvas.height / 2);
                }
            }

            function renderGameOver() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = '#602a70';
                ctx.font = '80px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2);
            }

            update();
        }

        startButton.addEventListener('click', function() {
            generateStars();
            canvas.style.display = 'block';
            startButton.style.display = 'none';
            restartButton.style.display = 'block';
            initializeGame();
        });

        restartButton.addEventListener('click', function() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            generateStars();
            initializeGame();
        });
    });




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
     * Download PDF file
     */
    document.addEventListener('DOMContentLoaded', (event) => {
        document.getElementById('download-link').addEventListener('click', function(e) {
            e.preventDefault();
            var url = this.getAttribute('href');
            window.open(url, '_blank');
        });
    });

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
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
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

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
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
