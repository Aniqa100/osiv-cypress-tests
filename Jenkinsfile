
pipeline {

    agent any 
    
     parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: "Choice the browser where you want ot execute your scrips")
     }

    stages {
        stage('Building'){
            steps{
               echo "Building the application"
            }
           
                }
        stage('Testing'){
            environment {
        // we will be recording test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('osiv-76d7db74-4a96-437c-b64c-7f8462e45c4b')
        
            }
            steps{
                bat "npm install cypress --save-dev"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }
             
        }

    }

                
}

