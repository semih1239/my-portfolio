import React from "react";
import './certificates.css'

export const Certificates = () => {


    return <div id="certificates">
        <div className="title">
            <hr />
            <h1>Certificates</h1>
            <hr />
        </div>
        <div>
            <ul>
                <li className="certificate"><img src={require('../../images/html.png')} /> <p>HTML (Michigan University)</p></li>
                <li className="certificate"><img src={require('../../images/css.png')} /> <p>CSS (Michigan University)</p></li>
                <li className="certificate"><img src={require('../../images/responsive.png')} /> <p>Responsive Design (Michigan University)</p></li>
                <li className="certificate"><img src={require('../../images/js.png')} /> <p>Javascript (Michigan University)</p></li>
            </ul>
        </div>
    </div>
}