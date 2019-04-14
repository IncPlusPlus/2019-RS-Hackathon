# Homefront
"GitHub for houses"

## Introduction
Homefront is a data aggregator for housing information for houses, 
apartments, and even dorms. The goal was to provide a nice web-based frontend for a 
service that allows for past residents to enter information about their experience 
with a living space they rented out in the past and for potential occupants 
to get a good idea of how safe the house is (along with other details) 
based on a "safety index".

## Getting Started
To get started with this demo, you must have an installation of Node.js and you must 
have installed the MySQL plugin through npm.

### Setting up the database
Install a MySQL server. [MySQL Community Server will work fine](https://dev.mysql.com/doc/refman/8.0/en/installing.html).
Import the .sql into your server using MySQL Workbench. Create a user for your MySQL server 
and give them complete access to this database.

### Prepping the JS
Change the `user` and `password` attributes of the constant `db` 
within `Application/Site/app.js`

### Running and using the demo
Open PowerShell if you are on Windows, Terminal if on MacOS, or a new shell environment 
if on Unix or Linux. Change the working directory to `Application/Site`. 
Run `node app.js`. Open a browser and go to `localhost:3000`. You're set to start 
playing with this neat little demo. :heart: