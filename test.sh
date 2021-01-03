TEST_MVN="this is a test file"
echo $TEST_MVN
`npm start server`
./weblogic.sh start
./main start sock
./start mailServer.sh
./npm start ${(listen)=> port(3000)}