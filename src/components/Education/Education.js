import React from "react";
import './education.css'

export const Education = () => {

    return <div id="education">
        <div className="about">
            <h1 className="title">
                <hr />
                Education
                <hr />
            </h1>
            <div className="hyf">
                <div className="school">
                    <h1>Hack Your Future Denmark</h1>
                    <h2>Full Stack Web Development</h2>
                    <div>A 9-month course in Full Stack Web Development.
                        The program includes HTML, CSS, Javascript, Databases, NodeJS, React.js
                    </div>
                    <div>
                        We also did a personal project.
                        Then the final project was as a team with our classmates for 2 months.
                        Thus, we receive training like the working order in companies
                    </div>
                </div>
                <h1 className="year">2021</h1>
            </div>
            <div className="university">
                <div className="fu">
                    <h1 className="year">
                        <div>2013</div>
                        <div>|</div>
                        <div>2019</div>
                    </h1>
                    <div className="school">
                        <h1>
                            Firat University
                        </h1>
                        <h2>
                            Civil Engineering
                        </h2>
                        <div>
                            I educated on project
                            drawing, interpretation,
                            building technical followups and calculations
                        </div>
                        <div>
                            I received training on
                            communication for
                            necessary coordination
                            and permissions for
                            buildings
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >
}