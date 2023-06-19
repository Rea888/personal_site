<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Viktoria Rakhely</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <link rel="icon" type="image/x-icon" href="{{asset('import/assets/img/logo.png')}}">

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

        <a href="/" class="logo"><img src="{{asset('import/assets/img/logo.png')}}" alt=""
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
                <a href="https://www.linkedin.com/in/viktoriarakhely"><img
                        src="{{asset('import/assets/img/linkedIn.png')}}"
                        alt="" height="20" width="20"></a>
                <a href="https://github.com/Rea888"><img src="{{asset('import/assets/img/github.png')}}" height="20"
                                                         width="20" alt=""
                                                         style="margin-left:1%"></a>
            </ul>
        </div>
    </div>
</div><!-- End Hero -->

<main id="main">


    <!-- ======= About Section ======= -->
    <div id="about" class="paddsection">

        <div class="container" id="greetings">
            <hr class="solid" id="hrUp">
            <div class="row justify-content-between">

                <div class="col-lg-4 ">
                    <div class="div-img-bg">
                        <div class="about-img">
                            <img src="{{asset('import/assets/img/me.jpg')}}" class="img-responsive" alt="me" id="me">
                        </div>
                    </div>
                </div>

                <div class="col-lg-7">

                    <div class="about-descr">


                        <p class="p-heading" id="title">Greetings, I am Viki, a spirited Junior PHP Developer
                            specializing in
                            backend
                            development. I am thrilled to introduce myself to you.</p>


                        <p class="separator" id="first">Briefly highlighting my technical toolkit, I am skilled in PHP,
                            Laravel,
                            HTML, CSS, and JavaScript, which are fundamental for building comprehensive web
                            applications. Moreover, I am proficient in MySQL for database management, and Git for
                            version control. My coding practices adhere to SOLID principles through Object-Oriented
                            Programming, ensuring maintainable and scalable code. Additionally, I am in the process
                            of
                            familiarizing myself with Docker, CI/CD processes, and Jenkins to stay aligned with the
                            evolving standards of backend development practices.</p>

                        <p class="separator" id="second">Before delving into programming, my background as a business
                            manager in
                            a
                            restaurant honed key soft skills - attention to detail, organization, and communication,
                            which complement my technical proficiencies in backend development.</p>

                        <p class="separator" id="third">My foray into programming is rooted in passion. Through
                            self-study and
                            small-scale projects, I have built a strong foundation in backend technologies and
                            developed
                            keen problem-solving skills.</p>

                        <p class="separator" id="fourth">As an aspiring Junior PHP Developer, I am eager to bring my
                            combination
                            of
                            technical skills and background to a creative and collaborative setting. My relentless
                            dedication to learning and adaptability makes me a resourceful addition to any team.</p>

                        <p class="separator" id="fifth">Feel free to explore, connect, and reach out if you’re keen to
                            discuss
                            technology, collaboration, or if you're just curious to know more about my journey. I’m
                            here
                            and excited to engage.</p>
                    </div>
                </div>
            </div>
            <hr class="solid" id="hrDown">
        </div>


    </div><!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <div class="skillStart" id="services">

        <div class="container-fluid" id="bottomSkills">


            <h3><u>Skills</u></h3>
            <div class="services-slider swiper" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="services-block" id="skills">
                            <a href="https://github.com/Rea888"><img src="{{asset('import/assets/img/git.png')}}" alt=""
                                                                     class="img-fluid" height="50" width="50"></a>

                            <a href="https://github.com/Rea888"><span id="skills">Git</span></a>
                            <p class="separator" id="skills2">Git helps manage my code changes, work with
                                other developers, find bugs, and undo changes if I make a mistake. Git also makes sure
                                my code is safe by letting me save a backup copy on a remote repository, so if I
                                accidentally mess up my code, I can easily get it back and have different versions of
                                it.I invite you to browse through my <a href="https://github.com/Rea888" id="glow">GitHub</a>
                                repositories to get a glimpse of my work and contributions.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <a href="https://github.com/Rea888/Articles"><img
                                    src="{{asset('import/assets/img/php.png')}}" alt=""
                                    class="img-fluid" height="80" width="80"></a>
                            <a href="https://github.com/Rea888/Articles"><span id="skills">PHP</span></a>
                            <p class="separator" id="skills2">I built a foundation in PHP with this <a
                                    href="https://github.com/Rea888/Articles" class="sk" id="glow">project</a> by
                                focusing on the core
                                concepts, without incorporating any frameworks. This approach helped me to thoroughly
                                comprehend the basics of PHP, which is essential for sound web development
                                practices.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <img src="{{asset('import/assets/img/docker.png')}}" alt=""
                                 class="img-fluid" height="58" width="58">
                            <span id="skills">Docker</span>
                            <p class="separator" id="skills2">Docker is an amazing open-source tool. It creates a
                                special environment
                                called a container, which lets me
                                package my applications along with everything they need to run smoothly. This means I
                                can ensure that my code works consistently across different systems, without worrying
                                about compatibility issues.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <a href="https://github.com/Rea888/personal_site/blob/master/Jenkinsfile"><img
                                    src="{{asset('import/assets/img/jenkins.png')}}" alt=""
                                    class="img-fluid" height="45" width="45"></a>
                            <a href="https://github.com/Rea888/personal_site/blob/master/Jenkinsfile"><span id="skills">Jenkins</span></a>
                            <p class="separator" id="skills2">Jenkins is a well-known open-source tool for
                                automation with lots of plugins and integrations. It lets me automate different parts of
                                my coding process, like building, testing, and even deploying my code to production.
                                In this specific <a
                                    href="https://github.com/Rea888/personal_site/blob/master/Jenkinsfile"
                                    id="glow">pipeline</a> whenever any changes are merged into the master branch of the
                                project, an automatic self-build and deployment to the server is triggered.</p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <a href="https://github.com/Rea888/planetSeeker/blob/master/app/ApiClient/Meteo/AbstractMeteoDataMapper.php"><img
                                    src="{{asset('import/assets/img/solid.png')}}" alt=""
                                    class="img-fluid" height="150" width="150"></a>
                            <a href="https://github.com/Rea888/planetSeeker/blob/master/app/ApiClient/Meteo/AbstractMeteoDataMapper.php"><span
                                    id="skills">SOLID</span></a>
                            <p class="separator" id="skills2">I follow SOLID principles because they help make code
                                better by using
                                interfaces and <a
                                    href="https://github.com/Rea888/planetSeeker/blob/master/app/ApiClient/Meteo/AbstractMeteoDataMapper.php"
                                    id="glow">abstract
                                    classes</a> in object-oriented design. This makes the code more
                                modular, easy to test, maintain, and expand later on, which means the software quality
                                and my productivity as a developer get better too. </p>
                        </div>
                    </div><!-- End testimonial item -->

                    <div class="swiper-slide">
                        <div class="services-block">
                            <a href="https://github.com/Rea888/planetSeeker/tree/master/app/Service"><img
                                    src="{{asset('import/assets/img/oop.PNG')}}" alt=""
                                    class="img-fluid" height="85" width="85"></a>
                            <a href="https://github.com/Rea888/planetSeeker/tree/master/app/Service"><span id="skills">OOP</span></a>
                            <p class="separator" id="skills2">I find Object-Oriented Programming (OOP) super useful
                                because it allows
                                me to arrange my code, so it's clearer and can be used again. It's perfect for dealing
                                with complicated <a
                                    href="https://github.com/Rea888/planetSeeker/tree/master/app/Service" id="glow">projects</a>
                                and makes
                                adjusting or upgrading my work a breeze in the
                                future.</p>
                        </div>
                    </div><!-- End testimonial item -->

                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>

    </div><!-- End Services Section -->

    <!-- ======= Portfolio Section ======= -->
    <div id="portfolio" class="paddsection" style="display:block;">
        <div class="container-fluid">
            <div class="col-lg-12 text-center">
                <div class="descr">

                    <p id="quote"><span id="spanQuote">Give me the command line and I shall move the world</span></p>

                </div>
            </div>
        </div>


        <div class="container" id="cvTitle">
            <div class="section-title text-center">
                <h2 style="color: white">CV</h2>
            </div>
        </div>
        <div class="container-fluid" id="planetSide">
            <div class="background-planetSide" id="planet"
                 style="background-image: url({{asset('import/assets/img/planetSide.png')}})"></div>
            <div class="container" id="whole">
                <div id="intro">
                    <h2 style="color: white">Viktoria Rakhely</h2>
                    <h3 style="color: #602a70"><b>PHP Developer</b></h3>
                    <p style="color: white"><font size="+2">I am passionate about software development and have a
                            genuine interest in learning and developing my skills in this field. My goal is to put this
                            knowledge to good use by actively contributing to the software development industry. I am
                            eager to employ my abilities to create innovative solutions and make a positive impact
                            within the technology community.</font></p>
                </div>

                <div class="section-title text-center" id="contactl">
                    <h2 style="color: white">Contacts</h2></div>

                <div class="contact-block1" id="cont">

                    <video autoplay muted loop id="background-video">
                        <source src="{{asset('import/assets/video/contacto_AdobeExpress(3).mp4')}}" type="video/mp4">
                    </video>
                    <div class="content-wrapper">
                        <div class="row gx-6">

                            <div class="col-lg-6">
                                <div class="about-descr" id="cont1">

                                    <h4 style="color: black"><a href="mailto:info@viktoriarakhely.eu"
                                                                class="contact"><img
                                                src="{{asset('import/assets/img/envelope.svg')}}" alt="SVG Image"
                                                style="margin-right: 1%"
                                                class="contact"><b>info@viktoriarakhely.eu</b></a>
                                    </h4>
                                    <h4 style="color: black"><img src="{{asset('import/assets/img/location.svg')}}"
                                                                  alt="SVG Image"
                                                                  style="margin-right: 1%"><b>Trierweiler, Germany</b>
                                    </h4>
                                    <h4 style="color: black"><a href="https://www.linkedin.com/in/viktoriarakhely/"
                                                                class="contact"><img
                                                src="{{asset('import/assets/img/linkedin.svg')}}" alt="SVG Image"
                                                style="margin-right: 1%"><b>linkedin.com/in/viktoriarakhely</b></a></h4>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="about-descr" id="cont2">

                                    <h4 style="color: black"><img src="{{asset('import/assets/img/phone.svg')}}"
                                                                  alt="SVG Image"><b>+49 1520 9732046</b></h4>
                                    <h4 style="color: black"><a href="https://viktoriarakhely.eu/" class="contact"><img
                                                src="{{asset('import/assets/img/hand.svg')}}" alt="SVG Image"
                                                style="margin-right: 1%" class="contact"><b>viktoriarakhely.eu</b></a>
                                    </h4>
                                    <h4 style="color: black"><a href="https://github.com/Rea888" class="contact"><img
                                                src="{{asset('import/assets/img/github.svg')}}" alt="SVG Image"
                                                style="margin-right: 1%"><b>github.com/Rea888</b></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid" id="whole">


            <div class="contact-block1" id="cvBody">
                <div class="row">

                    <div class="col-lg-6">
                        <div class="about-descr" id="bod1">
                            <div id="bodyText1">
                                <h3 id="cvh" style="color: #602a70"><u><b>EDUCATION</b></u></h3>
                                <p style="color: #65507e"><b><b>Udemy Courses</b></b></p>
                                <p style="color: #65507e"><i>2022 - 2023</i></p>

                                <p style="color:  #e4d5f7"><u>Edwin Diaz: PHP with Laravel - Become a Master in
                                        Laravel</u>
                                </p>
                                <p style="color:  #e4d5f7">-Routes, Controllers<br>
                                    -Views, Blade templating engine<br>
                                    -Database-Laravel Migrations, Eloquent/ORM, Tinker<br>
                                    -Eloquent relationships: One to One, One to many, Many to Many,<br>
                                    Polymorphic relationships<br>
                                    -Uploading files, Log in, Sending email/Api <br>
                                    -Sessions, Git, Data seeding, Bootstrap <br></p>

                                <p style="color: #e4d5f7"><u>Dave Hollingworth: PHP for Beginners</u></p>
                                <p style="color: #e4d5f7">-HTML, HTML Forms, Mixing PHP and HTML<br>
                                    -Multiple pages in PHP, Validation, OOP, Class Autoloading<br>
                                    -Databases, PDO, Authentication, Database Relationships<br>
                                    -Sessions to Log in and Restrict Access, Site Administration<br>
                                    -Pagination, Uploading Files<br>
                                    -CSS, Javascript, Sending email<br>

                                <p style="color: #65507e"><b><b>Udemy Courses</b></b></p>
                                <p style="color: #65507e"><i>2020 - 2021</i></p>
                                <p style="color:  #e4d5f7"><u>The Complete Java Certification Course</u></p>
                                <p style="color:  #e4d5f7">-Understanding Object Orientation: Class, Object,<br>
                                    Inheritance, Interface, Abstract class<br>
                                    -Variables, Loops, Arrays, Methods<br>
                                    -File processing,Exception Handling<br>
                                    -Threads, Collections, Inheritance</p>


                                <p style="color: #65507e"><b><b>Semmelweis University</b></b></p>
                                <p id="cv" style="color: #65507e"><i>2009 - 2011</i></p>
                                <p id="cv" style="color:  #e4d5f7">Faculty of Conductive Education</p>

                                <h3 id="cvh" style="color: #602a70"><u><b>SKILLS</b></u></h3>
                                <p id="glowSkill"><a href="https://github.com/Rea888/Articles"
                                                     class="glow-on-hover">PHP</a>
                                    <a href="https://github.com/Rea888/xmas_project/blob/master/README.md"
                                       class="glow-on-hover">Laravel</a>
                                    <a href="https://github.com/Rea888/Articles/blob/main/classes/Database.php"
                                       class="glow-on-hover">MYSQL</a>
                                    <a href="https://github.com/Rea888/planetSeeker/tree/master/app/Service"
                                       class="glow-on-hover">OOP</a>
                                    <a href="https://github.com/Rea888/planetSeeker/blob/master/app/ApiClient/Meteo/AbstractMeteoDataMapper.php"
                                       class="glow-on-hover">SOLID</a>
                                    <a href="https://github.com/Rea888/" class="glow-on-hover">Git</a></p>
                                <p id="glowSkill"><a href="https://github.com/Rea888/myfirstproject/tree/master"
                                                     class="glow-on-hover">Java</a>
                                    <a href="https://github.com/Rea888/personal_site" class="glow-on-hover">Docker</a>
                                    <a href="https://github.com/Rea888/personal_site" class="glow-on-hover">Jenkins</a>
                                </p>
                                <p id="glowSkill"><a
                                        href="https://github.com/Rea888/personal_site/tree/master/public/import/assets/css"
                                        class="glow-on-hover">CSS</a>
                                    <a href="https://github.com/Rea888/personal_site/tree/master/public/import/assets/js"
                                       class="glow-on-hover">JavaScript</a>
                                    <a href="https://github.com/Rea888/personal_site/blob/master/resources/views/greetings.blade.php"
                                       class="glow-on-hover">Bootstrap</a>
                                    <a href="https://github.com/Rea888/personal_site" class="glow-on-hover">AWS</a>
                                    <a href="https://github.com/Rea888/personal_site" class="glow-on-hover">CI/CD</a>
                                </p>

                                <h3 id="cvh" style="color: #602a70"><u>LANGUAGES</u></h3>
                                <p style="color:  #e4d5f7">English<br>
                                    Full Professional Proficiency</p>
                                <p style="color:  #e4d5f7">Hungarian<br>
                                    Native or Bilingual Proficiency</p>
                                <p style="color:  #e4d5f7">German<br>
                                    Limited Working Proficiency</p>

                                <h3 id="cvh" style="color: #602a70"><u><b>PROJECTS</b></u></h3>
                                <p style="color: #65507e"><b><b>Weather Data Analysis System</b></b></p>
                                <p style="color:  #e4d5f7">The Weather Data Analysis System is a PHP project developed
                                    using
                                    Laravel 9 and PHP 8.1.
                                    It
                                    collects and analyzes weather data from the past 10 years until the present, on an
                                    hourly
                                    basis, for 5 different cities. The system utilizes Laravel jobs for efficient data
                                    processing and storage. It leverages the power of MySQL as the database with a
                                    database
                                    queue driver to handle data operations. The project uses APIs, including the
                                    Illuminate\Support\Facades\Http component from Laravel, to fetch weather data from
                                    external
                                    sources. The system is designed with a focus on object-oriented programming (OOP)
                                    principles, ensuring clean and maintainable code. Additionally, it demonstrates its
                                    ability
                                    to handle large volumes of data, making it suitable for analyzing and visualizing
                                    weather
                                    patterns and trends.<br>
                                    <a href="https://github.com/Rea888/planetSeeker"><u>Link:
                                            https://github.com/Rea888/planetSeeker</u></a>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-descr" id="bod2">
                            <div id="bodyText2">
                                <p style="color: #65507e"><b><b>Personal Site</b></b></p>
                                <p style="color: #e4d5f7">The Personal Site project is a dynamic website built using PHP
                                    and
                                    the Laravel
                                    framework. It incorporates Bootstrap for responsive and visually appealing design.
                                    The
                                    project is integrated with Jenkins, utilizing a Jenkins pipeline. Whenever changes
                                    are
                                    merged into the master branch, the pipeline triggers an automated process to rebuild
                                    the
                                    project and deploy it onto the server. This ensures a seamless and efficient
                                    workflow,
                                    allowing for continuous deployment of updates to the personal site.<br>
                                    <a href="https://github.com/Rea888/personal_site"><u>Link:
                                            https://github.com/Rea888/personal_site</u></a></p>

                                <p style="color: #65507e"><b><b>Christmas escape room</b></b></p>
                                <p style="color: #65507e">The Christmas-themed activity, inspired by the renowned
                                    Cicada3301
                                    event, offers
                                    participants
                                    an engaging experience filled with puzzles. From cryptography and steganography to
                                    reverse
                                    engineering, a variety of challenges await. The project utilizes PHP and Laravel
                                    frameworks,
                                    along with Bootstrap for an appealing user interface. It incorporates email sending
                                    functionality and leverages MySQL for storing user data. <br>
                                    <a href="https://github.com/Rea888/xmas_project"><u>Link:
                                            https://github.com/Rea888/xmas_project</u></a></p>

                                <p style="color: #65507e"><b><b>Android Game</b></b></p>
                                <p style="color: #e4d5f7"> As a former restaurant manager, I took the opportunity to
                                    create
                                    an
                                    android game,
                                    utilizing
                                    Java and Android Studio. Designed to entertain our visitors while they wait for
                                    their
                                    meals,
                                    this unique game puts players in control of a waitress. The objective is to
                                    skillfully
                                    catch
                                    dishes and earn points, offering an enjoyable and interactive experience tailored
                                    specifically to our restaurant. This game showcases my passion for combining
                                    technology and hospitality to enhance the dining experience.<br>
                                    <a href="https://github.com/Rea888/TheWAITerGame"><u>Link:
                                            https://github.com/Rea888/TheWAITerGame</u></a></p>

                                <p style="color: #65507e"><b><b>Discord Bot</b></b></p>
                                <p style="color: #e4d5f7">In my very first project, I developed a memo/planner bot for
                                    Discord
                                    using Java. This bot
                                    is
                                    equipped with calendar functions and reminder capabilities, allowing users to
                                    manage their tasks and schedules within the Discord platform. <br>
                                    <a href="https://github.com/Rea888/TheWAITerGame"><u>Link:
                                            https://github.com/Rea888/myfirstproject</u></a></p>

                                <h3 id="cvh" style="color: #602a70"><u><b>WORK EXPERIENCE</b></u></h3>
                                <p style="color: #65507e"><b><b>PHP Developer</b></b></p>
                                <p style="color: #e4d5f7">Private Entrepreneurship · FreelancePrivate<br>
                                    Feb 2022 - Present</p>
                                <p style="color: #e4d5f7">As a freelance PHP developer on online platforms , I have
                                    successfully handled bug
                                    fixing,
                                    feature enhancements, and code refactoring tasks. I am experienced in database
                                    management
                                    and documentation.</p>

                                <p style="color: #65507e"><b><b>Business Manager</b></b></p>
                                <p style="color: #e4d5f7">Mokka Cukka Brunch and Lounge<br>
                                    2018 - 2022</p>
                                <p style="color: #e4d5f7">As a business manager, my responsibilities included creating
                                    and
                                    managing financial
                                    statements to ensure accuracy and compliance with regulatory requirements. I also
                                    directed
                                    and managed employee shift schedules, optimizing coverage and operational
                                    efficiency.
                                    Additionally, I tracked stock levels and managed orders to ensure timely delivery
                                    and
                                    enhance customer satisfaction.</p>

                                <p style="color: #65507e"><b><b>Account Manager</b></b></p>
                                <p style="color: #e4d5f7">KÖZÖS POZITÍV ÉRDEK KFT./COMMON POSITIVE INTERESTS LTD./<br>
                                    2013 - 2016</p>
                                <p style="color: #e4d5f7">As part of my role, I was responsible for managing the
                                    financial
                                    database using MYSQL,
                                    ensuring data integrity and accuracy.I actively engaged with funders, establishing
                                    and
                                    maintaining strong communication channels to secure financial support.Additionally,
                                    I
                                    collaborated closely with developers, contributing to the overall development and
                                    improvement of the website.</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="background-moon" id="moon"
                 style="background-image: url({{asset('import/assets/img/moon.png')}});">
            </div>

            <div class=" section-title text-center" id="downloadPDF">
                <a id="download-link" href="{{ url('/download-pdf') }}"
                   target="_blank">
                    <button class="glow-on-hover" type="button">Download PDF</button>
                </a>
            </div>
        </div>
    </div>


    <!-- End Portfolio Section -->

    <div class="container-fluid" id="spaceGame">
        <div class="section-title text-center">
            <div id="game-container">
                <canvas id="game" width="800" height="600" style="display: none;"></canvas>
            </div>
            <div id="buttons-container">
                <button id="startGameButton">Start Game</button>
                <button id="restartGameButton" style="display: none;">Restart Game</button>
            </div>
        </div>
    </div>


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
                                <li><span>+49 1520 9732046</span></li>
                                <li><span>info@viktoriarakhely.eu</span></li>
                            </ul>

                        </div>
                    </div>

                    <div class="col-lg-6">
                        <form action="{{ route('greetings') }}" method="post" role="form"
                              class="php-email-form">
                            {{ csrf_field() }}

                            <div class="row gy-3">
                                <div class="col-lg-6">
                                    <div class="form-group contact-block1">
                                        <input type="text" name="name" class="form-control"
                                               id="name"
                                               placeholder="Your Name" required>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" name="email"
                                               id="email"
                                               placeholder="Your Email" required>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="subject"
                                               id="subject"
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
                                    <div class="sent-message">Your message has been sent. Thank you!
                                    </div>
                                </div>

                                <div class="mt-0">
                                    <input type="submit" class="btn btn-defeault btn-send"
                                           value="Send message">
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
