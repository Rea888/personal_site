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
                echo "Create .env file"
                mv .env.example .env
                echo "Set variables in .env file"
                sed -i "s/APP_NAME=Laravel/APP_NAME=personal_site/g" ./.env
                sed -i "s|APP_KEY=|APP_KEY=$APP_KEY|g" ./.env
                sed -i "s|APP_URL=http://localhost|APP_KEY=https://viktoriarakhely.eu|g" ./.env
                sed -i "s/DB_DATABASE=laravel/DB_DATABASE=personal_site/g" ./.env
                sed -i "s/DB_USERNAME=root/DB_USERNAME=personal_site/g" ./.env
                sed -i "s/DB_PASSWORD=/DB_PASSWORD=$DB_PASSWORD/g" ./.env
                sed -i "s/MAIL_HOST=mailpit/MAIL_HOST=smtp.gmail.com/g" ./.env
                sed -i "s/MAIL_PORT=1025/MAIL_PORT=587/g" ./.env
                sed -i "s/MAIL_USERNAME=null/MAIL_USERNAME=info@viktoriarakhely.eu/g" ./.env
                sed -i "s/MAIL_PASSWORD=null/MAIL_PASSWORD=$MAIL_PASSWORD/g" ./.env
                sed -i "s/MAIL_ENCRYPTION=null/MAIL_ENCRYPTION=tls/g" ./.env
                sed -i "s|MAIL_FROM_ADDRESS=\"hello@example.com\"|MAIL_FROM_ADDRESS=|g" ./.env
                echo "Running composer install"
                composer install
                echo "Remove unnecessary files from build"
                rm -rf .git
                rm .gitattributes
                rm .gitignore
                rm README.md
                rm phpunit.xml
                rm .editorconfig
                rm composer.json
                rm composer.lock
                rm -rf tests
                echo "Copy build directory to web root"
                cp -r ./ /var/www/viktoriarakhely.eu-$GIT_COMMIT
                echo "Create symlink to build directory"
                ln -sfn /var/www/viktoriarakhely.eu-$GIT_COMMIT /var/www/viktoriarakhely.eu
                echo "Clean application cache"
                php /var/www/viktoriarakhely.eu/artisan ca:cl
                echo "Clean configuration cache"
                php /var/www/viktoriarakhely.eu/artisan co:cl
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
    }
}
