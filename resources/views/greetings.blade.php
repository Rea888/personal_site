<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Viktoria Rakhely</title>
    <meta content="" name="description">
    <meta content="" name="keywords">


    <link href="{{asset('import/assets/img/favicon.png')}}">
    <link href="{{asset('import/assets/img/logo.png')}}" rel="apple-touch-icon">


    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i|Playfair+Display:400,400i,500,500i,600,600i,700,700i,900,900i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{asset('import/assets/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">

    <link href="{{asset('import/assets/vendor/boxicons/css/boxicons.min.css')}}" rel="stylesheet">
    <link href="{{asset('import/assets/vendor/glightbox/css/glightbox.min.css')}}" rel="stylesheet">
    <link href="{{asset('import/assets/vendor/swiper/swiper-bundle.min.css')}}" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="{{asset('import/assets/css/style.css')}}" rel="stylesheet">


</head>

<body>

<!-- ======= Header ======= -->
<header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center justify-content-between">

        <a href="greetings.blade.php" class="logo"><img src="{{asset('import/assets/img/logo.png')}}" alt="" class="img-fluid"></a>


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

            <h3 style="color: gray; font-family: 'Nunito', sans-serif"><u>Skills</u></h3>
            <div class="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">


                    <div class="swiper-slide">
                        <div class="services-block">
                            <i class="bi bi-briefcase"></i>
                            <span>Git</span>
                            <p class="separator">I use Git because it provides powerful version control, allowing me to
                                keep track of changes to my code over time, collaborate with other developers, track
                                down bugs, and roll back changes if something goes wrong. Additionally, Git provides an
                                excellent backup and recovery system for my code, ensuring that it is always safe and
                                recoverable. By maintaining a copy of my code on a remote repository, I can easily
                                recover it if I accidentally delete or overwrite it, and maintain multiple versions of
                                my code. </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <i class="bi bi-card-checklist"></i>
                            <span>AWS</span>
                            <p class="separator">AWS provides a wide range of cloud computing services that allow me to
                                easily deploy, manage, and scale my applications. With AWS, I can leverage the power of
                                the cloud to build, test, and deploy my applications quickly and efficiently.
                                Additionally, AWS provides a wide range of tools and services for data storage,
                                analysis, and security, making it easy to manage all aspects of my application's
                                infrastructure.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <i class="bi bi-bar-chart"></i>
                            <span>CI/CD</span>
                            <p class="separator">CI/CD is an essential practice in modern software development that
                                allows me to automate my build, test, and deployment processes. By using CI/CD tools
                                like Jenkins, I can ensure that my code is always up-to-date, easily testable, and
                                deployable.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <i class="bi bi-binoculars"></i>
                            <span>Jenkins</span>
                            <p class="separator">Jenkins is a popular open-source automation server that provides a wide
                                range of plugins and integrations, allowing me to automate various aspects of my
                                software development processes, from building and testing code to deploying it to
                                production.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <i class="bi bi-brightness-high"></i>
                            <span>SOLID</span>
                            <p class="separator">I use SOLID principles because they promote abstraction through the use
                                of interfaces and abstract classes, which are best practices in object-oriented design.
                                This results in a codebase that is modular, easier to test, maintain, and extend over
                                time, which ultimately leads to better software quality and developer productivity. </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <i class="bi bi-calendar4-week"></i>
                            <span>OOP</span>
                            <p class="separator">Object-Oriented Programming(OOP) allows me to create modular, reusable,
                                and maintainable code that can be easily extended and adapted over time.</p>
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
                        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
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
                                        <textarea class="form-control" name="message" placeholder="Message"
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
