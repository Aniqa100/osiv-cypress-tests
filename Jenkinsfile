pipeline {

    agent any 
    
     parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script path you want to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: "Choice the browser where you want ot execute your scrips")
        choice(name: 'BASEURL', choices:["https://osiv-frtest.ivnet.ch", "https://osiv-nrtest.ivnet.ch"], description: "Choice the URL where you want to execute you scripts")
        base64File 'THEFILE'

     }


    stages {
        stage('Building'){
            steps{
               echo "Building the application"
            }
           
                }
        stage('Testing'){
            steps{
                bat "npm install cypress --save-dev"
                bat "npm run cypress:runDefault"
                
            }
        }
        stage('Deploying'){
            steps{
                echo "Deploy the application"
            }
             
        }

    }

                
}