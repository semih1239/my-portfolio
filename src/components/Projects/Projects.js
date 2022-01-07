import React from "react";
import './projects.css'
import { Skill } from "../Skills/Skill";

export const Projects = () => {

    return <div id="projects">
        <div className="title">
            <hr />
            <h1>Projects</h1>
            <hr />
        </div>
        <div className="container">
            <div className="card">
                <div className="image">
                    <img src={require('../../images/webshop.png')} alt="webshop" className="website" />
                </div>
                <div className="content">
                    <h2>Interior</h2>
                    <h3>Interior Design Webshop</h3>
                    <p>Part of Hack Your Future final project, an Interior Design Webshop.
                        Developed with the team over 2 months.</p>
                    <a href="https://staging-webshop-class18-fp.herokuapp.com" target='_blank'>Website</a>
                    <a href="https://github.com/HackYourFuture-CPH/fp-class18" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <Skill name='React' imageName='react' />
                        <Skill name='Storybook' imageName='storybook' />
                        <Skill name='MySQL' imageName='mysql' />
                        <Skill name='NodeJS' imageName='nodejs' />
                        <Skill name='ExpressJS' imageName='express' />
                        <Skill name='KnexJS' imageName='knexjs' />
                        <Skill name='Swagger' imageName='swagger' />
                        <Skill name='Heroku' imageName='heroku' />
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/meal-sharing.png')} alt="meal-sharing" className="website" />
                <div className="content">
                    <h2>Share</h2>
                    <h3>Meal Sharing App</h3>
                    <p>Website for sharing meals together. You can add meal and you can
                        make review or reservation for people's meals</p>
                    <a href="https://meal-share-application.herokuapp.com" target='_blank'>Website</a>
                    <a href="https://github.com/semih1239/meal-sharing" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <Skill name='React' imageName='react' />
                        <Skill name='MySQL' imageName='mysql' />
                        <Skill name='NodeJS' imageName='nodejs' />
                        <Skill name='ExpressJS' imageName='express' />
                        <Skill name='KnexJS' imageName='knexjs' />
                        <Skill name='Heroku' imageName='heroku' />
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/git-user-searcher.png')} alt="git-user-searcher" className="website" />
                <div className="content">
                    <h2>GitHub</h2>
                    <h3>GitHub User Searcher</h3>
                    <p>We can search github users and some basic informations from this project</p>
                    <a href="https://github.com/semih1239/Github-User-Searcher" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <Skill name='HTML' imageName='html' />
                        <Skill name='CSS' imageName='css' />
                        <Skill name='Javascript' imageName='js' />
                        <Skill name='React' imageName='react' />
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/weather-app.png')} alt="weather-app" className="website" />
                <div className="content">
                    <h2>Weather</h2>
                    <h3>Weather App</h3>
                    <p>With this website we can learn the weather forecast. We can save the city we are looking for in a local file,
                        automatically detect your location or can delete</p>
                    <a href="https://github.com/semih1239/Weather-app" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <Skill name='HTML' imageName='html' />
                        <Skill name='CSS' imageName='css' />
                        <Skill name='Javascript' imageName='js' />
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/fastest-presser.png')} alt="fastest-presser" className="website" />
                <div className="content">
                    <h2>Game</h2>
                    <h3>Faster Presser Game</h3>
                    <p>A game played by 2 people, the one who hits the key quickly wins</p>
                    <a href="https://github.com/semih1239/Fastest-Presser-Game" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <Skill name='HTML' imageName='html' />
                        <Skill name='CSS' imageName='css' />
                        <Skill name='Javascript' imageName='js' />
                    </p>
                </div>
            </div>

        </div>
    </div>
}