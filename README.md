# A Simple Docker Container for Node.js

The boilerplate used to Dockerize users' apps in [Sandcastle](https://github.com/gracehopper-jems/sandcastle). 

It comes with Express, PostgreSQL, and the ORM Sequelize already built in.

## Instructions

1. To run the container, you must first have [Docker](https://www.docker.com/) installed and running on your machine. 

2. The command to run the container is `docker-compose up`, and the command to shut it down is `docker-compose down`.

3. With the container running, navigate to [http://localhost:3001/](http://localhost:3001/). You will see message `Welcome to your Docker container!` if everything is working correctly.

## Customizing Your Container 

In the `docker-compose.yml` file, you can change `database_name` to whatever you want your application's database to be called. 

You can define your database's models in the `models.js` file using the ORM Sequelize, and you can add routes to the `server.js` file. 