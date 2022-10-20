
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
        stage('Testing')
                   
            steps{
                bat "npm install cypress --save-dev"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC} --record --key 76d7db74-4a96-437c-b64c-7f8462e45c4b"
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }
             
        }

    }

                


