import React from "react";

export const Skill = (props) => {
    return <div className="skill">
        <img src={require(`../../images/${props.imageName}.png`)} alt={`${props.name}-icon`} />
        <p>{props.name}</p>
    </div>
}