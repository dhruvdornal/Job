#!/bin/bash

# Navigate to the backend directory and start the Spring Boot server
cd job/job || exit
gnome-terminal -- bash -c "mvn spring-boot:run; exec bash"

# Navigate to the frontend directory and start the React server
cd ../../frontend_react/UISpringMongodb-main || exit
gnome-terminal -- bash -c "npm start; exec bash"
