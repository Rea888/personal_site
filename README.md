To devops:

Dependencies:

-php8.0-gd <br>
-php8.0-xml <br>
-php8.0-mbstring <br>
-php8.0-curl <br>
-php8.0-mysqli <br>


Build steps:

1.step: git clone personal_site <br>
2.step: composer install <br>
3.step: make .env file with "given" parameters <br>
4.step: make a Database, called: personal_site <br>
5.step: run php artisan migrate <br>

test2 to see hook is triggered
