### Scaffold and Examples for automated testing projects.

#### Setup

1. Install Node: http://nodejs.org/download/
2. Install slush: http://slushjs.github.io/
3. Java is required for selenium server to run. 
4. Install selenium chrome driver (firefox will just work):
    https://code.google.com/p/selenium/wiki/ChromeDriver

#### Creating a new test project

1. `npm install -g slush-fiveby`
2. pick a directory where you want the app setup
3. run `slush fiveby`
5. Write some tests! Check out [the docs](https://github.com/dowjones/fiveby/tree/master/docs).

#### Running w/ built in Selenium Server:

1. `npm test` or `gulp` (if you have gulp cli setup)

#### Running w/ docker based Selenium Grid:

1. edit fiveby-congfig.json hubUrl to http://localhost:4444/wd/hub
2. `docker-compose up` [install docker if needed](https://docs.docker.com/install/)
3. `npm test` or `gulp` (if you have gulp cli setup)
