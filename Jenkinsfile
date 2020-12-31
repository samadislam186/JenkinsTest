pipeline {
	agent any
	stages {
		stage('Checkout') {
			steps {
				echo "git fetch https://github.com/auto.git"
			}
		}
		stage('Build'){
			steps {
				echo "g++ -c class1.h class2.h dbclass.hpp -o main -std=c++17 -pthread -socketconn main.cpp"
			}
		}
		stage('Stop current test') {
			steps {
				sh "kill xargs | ps aux | grep -v grep | grep autodep"
			}
		}
		stage('copy to server'){
			steps {
				sh "ansiblep-playbook allProdSegment.yml --check"
				sh "if [stdin.out != fail]"
				sh "ansiblep-playbook allProdSegment.yml"
			}
		}
	}
}