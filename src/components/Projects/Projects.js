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
            <div class="card">
                <div className="image">
                    <img src={require('../../images/webshop.png')} className="website" />
                </div>
                <div class="content">
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
            <div class="card">
                <img src={require('../../images/meal-sharing.png')} className="website" />
                <div class="content">
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
            <div class="card">
                <img src={require('../../images/git-user-searcher.png')} className="website" />
                <div class="content">
                    <h2>01</h2>
                    <h3>Card One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores iure minus expedita
                        incidunt repellat tempora aperiam ipsa reiciendis reprehenderit, mollitia omnis laudantium quam,
                        officiis fuga magnam, amet placeat minima!</p>
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
            <div class="card">
                <img src={require('../../images/weather-app.png')} className="website" />
                <div class="content">
                    <h2>01</h2>
                    <h3>Card One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores iure minus expedita
                        incidunt repellat tempora aperiam ipsa reiciendis reprehenderit, mollitia omnis laudantium quam,
                        officiis fuga magnam, amet placeat minima!</p>
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
            <div class="card">
                <img src={require('../../images/fastest-presser.png')} className="website" />
                <div class="content">
                    <h2>01</h2>
                    <h3>Card One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci maiores iure minus expedita
                        incidunt repellat tempora aperiam ipsa reiciendis reprehenderit, mollitia omnis laudantium quam,
                        officiis fuga magnam, amet placeat minima!</p>
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