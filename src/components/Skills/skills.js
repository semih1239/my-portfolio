import React from "react";
import './skills.css'

export const Skills = () => {

    return <div id="skills">
        <div className="title">
            <hr />
            <h1>Skills</h1>
            <hr />
        </div>
        <div className="my-skills">
            <div className="skill">
                <img src={require('../../images/html.png')} alt="html-icon" />
                <p>HTML</p>
            </div>
            <div className="skill">
                <img src={require('../../images/css.png')} alt="css-icon" />
                <p>CSS</p>
            </div>
            <div className="skill">
                <img src={require('../../images/bootstrap.png')} alt="bootstrap-icon" />
                <p>Bootstrap</p>
            </div>
            <div className="skill">
                <img src={require('../../images/js.png')} alt="javascript-icon" />
                <p>Javascript</p>
            </div>
            <div className="skill">
                <img src={require('../../images/storybook.png')} alt="storybook-icon" />
                <p>Storybook</p>
            </div>
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
                <img src={require('../../images/express.png')} alt="expressjs-icon" />
                <p>ExpressJS</p>
            </div>
            <div className="skill">
                <img src={require('../../images/knexjs.png')} alt="knexjs-icon" />
                <p>KnexJS</p>
            </div>
            <div className="skill">
                <img src={require('../../images/git.png')} alt="git-icon" />
                <p>Git</p>
            </div>
            <div className="skill">
                <img src={require('../../images/github.png')} alt="github-icon" />
                <p>GitHub</p>
            </div>
            <div className="skill">
                <img src={require('../../images/docker.png')} alt="docker-icon" />
                <p>Docker</p>
            </div>
            <div className="skill">
                <img src={require('../../images/swagger.png')} alt="swagger-icon" />
                <p>Swagger</p>
            </div>
            <div className="skill">
                <img src={require('../../images/typescript.png')} alt="typescript-icon" />
                <p>Typescript</p>
            </div>
            <div className="skill">
                <img src={require('../../images/heroku.png')} alt="heroku-icon" />
                <p>Heroku</p>
            </div>
        </div>
    </div>
}