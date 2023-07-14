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
                sh 'sed -i \'s/^APP_NAME=.*$/APP_NAME=personal_site/g\' ./.env'
                sh 'sed -i "s|^APP_KEY=.*$|APP_KEY=$APP_KEY|g" ./.env'
                sh 'sed -i "s|^APP_URL=.*$|APP_URL=https://viktoriarakhely.eu|g" ./.env'
                sh 'sed -i \'s/^DB_DATABASE=.*$/DB_DATABASE=personal_site/g\' ./.env'
                sh 'sed -i \'s/^DB_USERNAME=.*$/DB_USERNAME=personal_site/g\' ./.env'
                sh 'sed -i "s/^DB_PASSWORD=.*$/DB_PASSWORD=$DB_PASSWORD/g" ./.env'
                sh 'sed -i \'s/^MAIL_HOST=.*$/MAIL_HOST=smtp.gmail.com/g\' ./.env'
                sh 'sed -i \'s/^MAIL_PORT=.*$/MAIL_PORT=587/g\' ./.env'
                sh 'sed -i \'s/^MAIL_USERNAME=.*$/MAIL_USERNAME=info@viktoriarakhely.eu/g\' ./.env'
                sh 'sed -i "s/^MAIL_PASSWORD=.*$/MAIL_PASSWORD=$MAIL_PASSWORD/g" ./.env'
                sh 'sed -i \'s/^MAIL_ENCRYPTION=.*$/MAIL_ENCRYPTION=tls/g\' ./.env'
                sh 'sed -i "s|^MAIL_FROM_ADDRESS=.*$|MAIL_FROM_ADDRESS=|g" ./.env'
                sh 'sed -i "s|^BASE_URL=.*$|BASE_URL=https://static.viktoriarakhely.eu/|g" ./.env'
                sh 'sed -i \'s/^VERSION_HASH=.*$/VERSION_HASH=$GIT_COMMIT/g\' ./.env'
                sh 'composer install'
                sh 'rm -rf .git .gitattributes .gitignore README.md phpunit.xml .editorconfig composer.json composer.lock tests'
                sh 'cp -r ./ /var/www/viktoriarakhely.eu-$GIT_COMMIT'
                sh 'ln -sfn /var/www/viktoriarakhely.eu-$GIT_COMMIT /var/www/viktoriarakhely.eu'
                sh 'php /var/www/viktoriarakhely.eu/artisan ca:cl'
                sh 'php /var/www/viktoriarakhely.eu/artisan co:cl'
            }
        }

      stage('Upload to S3'){
          steps{
              withAWS(region:'us-east-1' ,credentials:'jenkins_access') {
                  s3Upload(bucket:'static-viktoriarakhely', path:'public/import/assets', includePathPattern:'**/*')
              }
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
