<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Viktoria Rakhely</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <link href="{{asset('import/assets/img/logo.png')}}">
    <link rel="icon" type="image/x-icon" href="import/assets/img/logo.png">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,500,500i,600,600i,700,700i,900,900i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{asset('import/assets/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('import/assets/vendor/bootstrap-icons/bootstrap-icons.css')}}" rel="stylesheet">
    <link href="{{asset('import/assets/vendor/boxicons/css/boxicons.min.css')}}" rel="stylesheet">
    <link href="{{asset('import/assets/vendor/glightbox/css/glightbox.min.css')}}" rel="stylesheet">
    <link href="{{asset('import/assets/vendor/swiper/swiper-bundle.min.css')}}" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet">


    <!-- Main CSS File -->
    <link href="{{asset('import/assets/css/style.css')}}" rel="stylesheet">

</head>

<body>

<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center justify-content-between">

        <a href="greetings.blade.php" class="logo"><img src="{{asset('import/assets/img/logo.png')}}" alt=""
                                                        class="img-fluid"></a>

        <nav id="navbar" class="navbar">
            <ul>
                <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                <li><a class="nav-link scrollto" href="#about">About</a></li>
                <li><a class="nav-link scrollto" href="#portfolio">CV</a></li>
                <li><a class="nav-link scrollto" href="#journal">Contact</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>

    </div>
</header><!-- End Header -->

<!-- ======= Hero Section ======= -->
<div id="hero" class="home">

    <div class="container">
        <div class="hero-content">
            <h1>I'm <span class="typed" data-typed-items="Viktoria Rakhely, a Developer"></span></h1>
            <p> Junior PHP developer </p>

            <ul class="list-unstyled list-social">
                <a href="https://www.linkedin.com/in/viktoriarakhely"><img src="import/assets/img/linkedIn.png"
                                                                           height="20" width="20"></a>
                <a href="https://github.com/Rea888"><img src="import/assets/img/github.png" height="20" width="20"
                                                         style="margin-left:1%"></a>
            </ul>
        </div>
    </div>
</div><!-- End Hero -->

<main id="main">

    <!-- ======= About Section ======= -->
    <div id="about" class="paddsection">
        <div class="container">
            <div class="row justify-content-between">

                <div class="col-lg-4 ">
                    <div class="div-img-bg">
                        <div class="about-img">
                            <img src="{{asset('import/assets/img/me.jpg')}}" class="img-responsive" alt="me">
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">
                    <div class="about-descr">

                        <p class="p-heading">Hi there, my name is Viki, and I am a self-taught junior PHP developer. I
                            have a strong foundation in web development, including PHP, HTML, JavaScript, CSS, Laravel,
                            and MySQL.</p>


                        <p class="separator">Before pursuing a career in web development, I worked as a business manager
                            in a restaurant. While in this role, I developed a keen eye for detail, strong
                            organizational skills, and effective communication abilities, which I believe are all
                            valuable assets in the world of web development.

                            As I transitioned into programming, I started by working on small projects in my free time,
                            which allowed me to build a solid foundation in PHP and other web development technologies.
                            These projects have given me experience in solving problems, working with databases, and
                            developing dynamic websites.

                            I am passionate about web development and excited to bring my skills to a junior PHP
                            developer role. I believe that my background in business management and self-taught
                            programming experience have prepared me well for this position, and I am eager to continue
                            learning and growing in this field.</p>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <div id="services">
        <div class="container">

            <h3><u>Skills</u></h3>
            <div class="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="services-block">

                            <span>Git</span>
                            <p class="separator">I like using Git because it helps me manage my code changes, work with
                                other developers, find bugs, and undo changes if I make a mistake. Git also makes sure
                                my code is safe by letting me save a backup copy on a remote repository, so if I
                                accidentally mess up my code, I can easily get it back and have different versions of
                                it. </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">

                            <span>AWS</span>
                            <p class="separator">AWS has lots of cloud computing services that
                                help me deploy, manage, and grow my apps. With AWS, I can use the cloud to create, test,
                                and launch my apps fast and easily. Plus, AWS has many tools and services for storing
                                data, analyzing it, and keeping it secure, so I can handle everything about my app's
                                infrastructure.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">

                            <span>CI/CD</span>
                            <p class="separator">CI/CD is an essential practice in modern software development that
                                allows me to automate my build, test, and deployment processes. By using CI/CD tools
                                like Jenkins, I can ensure that my code is always up-to-date, easily testable, and
                                deployable.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">

                            <span>Jenkins</span>
                            <p class="separator">Jenkins is a well-known open-source tool for
                                automation with lots of plugins and integrations. It lets me automate different parts of
                                my coding process, like building, testing, and even deploying my code to production.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">

                            <span>SOLID</span>
                            <p class="separator">I follow SOLID principles because they help make code better by using
                                interfaces and abstract classes in object-oriented design. This makes the code more
                                modular, easy to test, maintain, and expand later on, which means the software quality
                                and my productivity as a developer get better too. </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">

                            <span>OOP</span>
                            <p class="separator">I find Object-Oriented Programming (OOP) super useful because it allows
                                me to arrange my code, so it's clearer and can be used again. It's perfect for dealing
                                with complicated projects and makes adjusting or upgrading my work a breeze in the
                                future.</p>
                        </div>
                    </div><!-- End testimonial item -->

                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>

    </div><!-- End Services Section -->

    <!-- ======= Portfolio Section ======= -->
    <div id="portfolio" class="paddsection">

        <div class="container">
            <div class="section-title text-center">
                <h2>CV</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 d-flex justify-content-center">
                <img src="/import/assets/img/Viktoria_Rakhely.jpg" class="img-fluid img-thumbnail">
            </div>
        </div>
    </div>

    </div><!-- End Portfolio Section -->

    <!-- ======= Journal Section ======= -->
    <div id="journal" class="paddsection">

        <div class="container">
            <div class="section-title text-center">
                <h2>Contact</h2>
            </div>
        </div>

        <div class="container">
            <div class="contact-block1">
                <div class="row">

                    <div class="col-lg-6">
                        <div class="contact-contact">

                            <h2 class="mb-30">GET IN TOUCH</h2>

                            <ul class="contact-details">
                                <li><span>Rheinland-Pfalz</span></li>
                                <li><span>Germany</span></li>
                                <li><span>+36 20 3450001</span></li>
                                <li><span>m.rakhely.viktoria@gmail.com</span></li>
                            </ul>

                        </div>
                    </div>

                    <div class="col-lg-6">
                        <form action="{{ route('greetings') }}" method="post" role="form" class="php-email-form">
                            {{ csrf_field() }}

                            <div class="row gy-3">
                                <div class="col-lg-6">
                                    <div class="form-group contact-block1">
                                        <input type="text" name="name" class="form-control" id="name"
                                               placeholder="Your Name" required>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email" id="email"
                                               placeholder="Your Email" required>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject" id="subject"
                                               placeholder="Subject" required>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <textarea class="form-control" name="message" id="message" placeholder="Message"
                                                  required></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>
                                </div>

                                <div class="mt-0">
                                    <input type="submit" class="btn btn-defeault btn-send" value="Send message">
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>


</main><!-- End #main -->


<!-- Vendor JS Files -->
<script src="{{asset('import/assets/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('import/assets/vendor/glightbox/js/glightbox.min.js')}}"></script>
<script src="{{asset('import/assets/vendor/isotope-layout/isotope.pkgd.min.js')}}"></script>
<script src="{{asset('import/assets/vendor/swiper/swiper-bundle.min.js')}}"></script>
<script src="{{asset('import/assets/vendor/typed.js/typed.min.js')}}"></script>
<script src="{{asset('import/assets/vendor/php-email-form/validate.js')}}"></script>

<!-- Template Main JS File -->
<script src="{{asset('import/assets/js/main.js')}}"></script>

</body>

</html>
