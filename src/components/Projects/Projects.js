import React from "react";
import './projects.css'

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
                    <img src={require('../../images/webshop.png')} className="website" />
                </div>
                <div className="content">
                    <h2>Interior</h2>
                    <h3>Interior Design Webshop</h3>
                    <p>Part of Hack Your Future final project, an Interior Design Webshop.
                        Developed with the team over 2 months.
                    </p>
                    <a href="https://staging-webshop-class18-fp.herokuapp.com" target='_blank'>Website</a>
                    <a href="https://github.com/HackYourFuture-CPH/fp-class18" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <div className="skill">
                            <img src={require('../../images/react.png')} alt="react-icon" />
                            <p>React</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/storybook.png')} alt="storybook-icon" />
                            <p>Storybook</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/mysql.png')} alt="mysql-icon" />
                            <p>MySQL</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/nodejs.png')} alt="nodejs-icon" />
                            <p>NodeJS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/express.png')} alt="express-icon" />
                            <p>ExpressJS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/knexjs.png')} alt="knex-icon" />
                            <p>KnexJS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/swagger.png')} alt="swagger-icon" />
                            <p>Swagger</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/heroku.png')} alt="heroku-icon" />
                            <p>Heroku</p>
                        </div>
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/meal-sharing.png')} className="website" />
                <div className="content">
                    <h2>Share</h2>
                    <h3>Meal Sharing App</h3>
                    <p>Website for sharing meals together. You can add meal and you can
                        make review or reservation for people's meals</p>
                    <a href="https://meal-share-application.herokuapp.com" target='_blank'>Website</a>
                    <a href="https://github.com/semih1239/meal-sharing" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <div className="skill">
                            <img src={require('../../images/react.png')} alt="react-icon" />
                            <p>React</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/mysql.png')} alt="mysql-icon" />
                            <p>MySQL</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/nodejs.png')} alt="nodejs-icon" />
                            <p>NodeJS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/express.png')} alt="express-icon" />
                            <p>ExpressJS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/knexjs.png')} alt="knex-icon" />
                            <p>KnexJS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/heroku.png')} alt="heroku-icon" />
                            <p>Heroku</p>
                        </div>
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/git-user-searcher.png')} className="website" />
                <div className="content">
                    <h2>GitHub</h2>
                    <h3>GitHub User Searcher</h3>
                    <p>We can search github users and some basic informations from this project</p>
                    <a href="https://github.com/semih1239/Github-User-Searcher" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <div className="skill">
                            <img src={require('../../images/html.png')} alt="html-icon" />
                            <p>HTML</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/css.png')} alt="css-icon" />
                            <p>CSS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/js.png')} alt="javascript-icon" />
                            <p>Javascript</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/react.png')} alt="react-icon" />
                            <p>React</p>
                        </div>
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/weather-app.png')} className="website" />
                <div className="content">
                    <h2>Weather</h2>
                    <h3>Weather App</h3>
                    <p>With this website we can learn the weather forecast. We can save the city we are looking for in a local file,
                        automatically detect your location or can delete</p>
                    <a href="https://github.com/semih1239/Weather-app" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <div className="skill">
                            <img src={require('../../images/html.png')} alt="html-icon" />
                            <p>HTML</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/css.png')} alt="css-icon" />
                            <p>CSS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/js.png')} alt="javascript-icon" />
                            <p>Javascript</p>
                        </div>
                    </p>
                </div>
            </div>
            <div className="card">
                <img src={require('../../images/fastest-presser.png')} className="website" />
                <div className="content">
                    <h2>Game</h2>
                    <h3>Faster Presser Game</h3>
                    <p>A game played by 2 people, the one who hits the key quickly wins</p>
                    <a href="https://github.com/semih1239/Fastest-Presser-Game" target='_blank'>Repository</a>
                    <p>Builted With</p>
                    <p className="project-skills">
                        <div className="skill">
                            <img src={require('../../images/html.png')} alt="html-icon" />
                            <p>HTML</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/css.png')} alt="css-icon" />
                            <p>CSS</p>
                        </div>
                        <div className="skill">
                            <img src={require('../../images/js.png')} alt="javascript-icon" />
                            <p>Javascript</p>
                        </div>
                    </p>
                </div>
            </div>

        </div>
    </div>
}