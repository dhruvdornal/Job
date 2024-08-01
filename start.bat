@echo off

REM Navigate to the backend directory and start the Spring Boot server
cd job\job
start cmd /k "mvn spring-boot:run"

REM Navigate to the frontend directory and start the React server
cd ../../frontend_react/UISpringMongodb-main
start cmd /k "npm start"
