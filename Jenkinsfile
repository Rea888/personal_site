pipeline {
    agent {
        label 'hegemone'
    }

    stages {
        stage('Preparation') {
            steps {
                // Delete workspace before build starts
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                // Checkout code from Git repository
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/master']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [],
                    submoduleCfg: [],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Rea888/personal_site.git'
                    ]]
                ])
            }
        }

        stage('Build') {
            steps {
                sh 'mv .env.example .env'
                sh 'sed -i \'s/APP_NAME=Laravel/APP_NAME=personal_site/g\' ./.env'
                sh 'sed -i "s|APP_KEY=|APP_KEY=$APP_KEY|g" ./.env'
                sh 'sed -i "s|APP_URL=http://localhost|APP_KEY=https://viktoriarakhely.eu|g" ./.env'
                sh 'sed -i \'s/DB_DATABASE=laravel/DB_DATABASE=personal_site/g\' ./.env'
                sh 'sed -i \'s/DB_USERNAME=root/DB_USERNAME=personal_site/g\' ./.env'
                sh 'sed -i "s/DB_PASSWORD=/DB_PASSWORD=$DB_PASSWORD/g" ./.env'
                sh 'sed -i \'s/MAIL_HOST=mailpit/MAIL_HOST=smtp.gmail.com/g\' ./.env'
                sh 'sed -i \'s/MAIL_PORT=1025/MAIL_PORT=587/g\' ./.env'
                sh 'sed -i \'s/MAIL_USERNAME=null/MAIL_USERNAME=info@viktoriarakhely.eu/g\' ./.env'
                sh 'sed -i "s/MAIL_PASSWORD=null/MAIL_PASSWORD=$MAIL_PASSWORD/g" ./.env'
                sh 'sed -i \'s/MAIL_ENCRYPTION=null/MAIL_ENCRYPTION=tls/g\' ./.env'
                sh 'sed -i "s|MAIL_FROM_ADDRESS=\"hello@example.com\"|MAIL_FROM_ADDRESS=|g" ./.env'
                sh 'composer install'
                sh 'rm -rf .git .gitattributes .gitignore README.md phpunit.xml .editorconfig composer.json composer.lock tests'
                sh 'cp -r ./ /var/www/viktoriarakhely.eu-$GIT_COMMIT'
                sh 'ln -sfn /var/www/viktoriarakhely.eu-$GIT_COMMIT /var/www/viktoriarakhely.eu'
                sh 'php /var/www/viktoriarakhely.eu/artisan ca:cl'
                sh 'php /var/www/viktoriarakhely.eu/artisan co:cl'
            }
        }

        stage('Clean Old Build Directories') {
            steps {
                sh '''
                    echo "Remove old build directories (keeping last 2)"
                    ls -1dt /var/www/viktoriarakhely.eu-* | tail -n +3 | xargs -d '\\n' rm -rf --
                '''
            }
        }
