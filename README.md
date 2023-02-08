<h1 align="start">
  <img alt="cleartask logo" src="https://cleartask.crunchgarage.com/static/media/solid.cd8fb7c27f0c96dcced2.png" width="224px"/><br/><br/>
  Task and Project Management app
</h1>

<p align="start">
  <img src="https://img.shields.io/badge/Python-v3.7-blue?style=for-the-badge&logo=python" />
  <img src="https://img.shields.io/badge/django-v3.0-green?style=for-the-badge&logo=django" />
  <img src="https://img.shields.io/badge/react-v18.2-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/docker-v19.03.9-blue?style=for-the-badge&logo=docker" />
</p>

<p align="start">A project management app that enables people and teams get more done by effectively managing their projects and tasks.</p>

## Contents
**[PROJECT LIVE LINK](https://github.com/mutuaMkennedy/cleartask/#project-live-link)**  
**[HOW TO RUN THE APP](https://github.com/mutuaMkennedy/cleartask/#how-to-run-the-app)**   
**[TECH STACK](https://github.com/mutuaMkennedy/cleartask/#technologies-used)**  
**[SPECIAL GOTCHAS](https://github.com/mutuaMkennedy/cleartask/#special-gotchas)**  
**[CONTRIBUTING](https://github.com/mutuaMkennedy/cleartask/#contributing)**
**[SPREAD THE WORD](https://github.com/mutuaMkennedy/cleartask#spread-the-word)**  
**[AUTHOR](https://github.com/mutuaMkennedy/cleartask/#author)**  


## Project Live Link
Visit https://cleartask.crunchgarage.com/

## How to run the app
Clone this repository  
Using SSH 
```
git clone git@github.com:mutuaMkennedy/cleartask.git
```  
or   
Using HTTPS   
```
git clone https://github.com/mutuaMkennedy/cleartask.git
```  
Install docker and docker compose if you haven't done so. Installation instructions can be found [here](https://docs.docker.com/engine/install/)  

Then navigate to the base directory of the project and create .env file based on the env.sample file provided on the project directory,  
then run the following command  
```
docker compose -f docker-compose-dev.yml up --build
```

If you are want to build images from the production docker compose file, make sure you setup your ssl certificates to avoid errors.  
Or, just use the none SSL enabled nginx conf file by doing the following.  

Open  
```
docker-compose-prod.yml
```  
find the Nginx block and change   
```- ./services/nginx/production:/etc/nginx/conf.d ```  to  ```- ./services/nginx/development:/etc/nginx/conf.d ```  

then run this command

```
docker compose -f docker-compose-prod.yml up --build
```
**DOCKER IMAGES ARE ALSO AVAILLABLE**  

Don't have time to setup things? Pull the production ready docker images instead.  
Run the following commands
```
docker compose -f docker-compose-prod.yml pull
```
then run the project with  
```
docker compose -f docker-compose-prod.yml up
```

## Technologies used
Here's a brief high-level overview of the technologies used on this project:
- Python, Django and Django restframework for the backend.
- React JS for the front end.
- PostgreSQL database
- Docker and docker compose to package and run the all the services together.
- AWS EC2 for hosting.
- AWS RDS to manage the database. Its generally a bad idea to manage a database in a docker container.
- AWS ECR to host the docker images
- If it matters to someone UI designs are made in Figma. Will share attach those later when the project has advanced.

## Special Gotchas
Most of my previous work has been done with Python, Django, JQuery, and Materialize CSS as my primary stack.   
I had previously worked with react JS but had never delved deeply into it. This project allows me to experiment  
with new technologies such as React and Docker.  
I also create all of my designs, including the logos and any graphical elements you might see on this or any   
of my projects. Figma for UI/UX and Adobe Illustrator for logos and any graphical or presentation work are my   
primary design tools.  
This is an ongoing project that is not yet completed. I'm constantly designing and improving the features. Keep an eye out for new feature releases.


## Contributing
Interested in contributing to this project? Thanks so much for your interest! We are always looking for improvements to the project and contributions from open-source developers are greatly appreciated.  

Feel free to fork and contribte to this project from  
[CRUNCHGARAGE](https://github.com/Crunch-Garage/cleartask)  

## Spread the word
If you want to say thank you and/or support active development of this project:

- Add a GitHub Star to the project!
- Check out our website [Crunch Garage](https://crunchgarage.com/) and [GitHub](https://github.com/Crunch-Garage)
 

Thanks so much for your interest in growing the reach of this project!

## Author
Mutua Kennedy | [Visit my website](https://kennedymutua.crunchgarage.com/)  
Also have a look at  [Crunch Garage](http://crunchgarage.com/)
