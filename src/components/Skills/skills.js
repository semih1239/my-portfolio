import React from "react";
import './skills.css'
import { Skill } from "./Skill";

export const Skills = () => {

    return <div id="skills">
        <div className="title">
            <hr />
            <h1>Skills</h1>
            <hr />
        </div>
        <div className="my-skills">
            <Skill name='HTML' imageName='html' />
            <Skill name='CSS' imageName='css' />
            <Skill name='Bootstrap' imageName='bootstrap' />
            <Skill name='Javascript' imageName='js' />
            <Skill name='Storybook' imageName='storybook' />
            <Skill name='React' imageName='react' />
            <Skill name='MySQL' imageName='mysql' />
            <Skill name='NodeJS' imageName='nodejs' />
            <Skill name='ExpressJS' imageName='express' />
            <Skill name='KnexJS' imageName='knexjs' />
            <Skill name='Git' imageName='git' />
            <Skill name='GitHub' imageName='github' />
            <Skill name='Docker' imageName='docker' />
            <Skill name='Swagger' imageName='swagger' />
            <Skill name='Typescript' imageName='typescript' />
            <Skill name='Heroku' imageName='heroku' />
            <Skill name='C-Sharp' imageName='c-sharp' />
            <Skill name='Google Cloud' imageName='google' />
            <Skill name='Microsoft Azure' imageName='azure' />
        </div>
    </div>
}