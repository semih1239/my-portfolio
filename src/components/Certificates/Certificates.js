import React from "react";
import './certificates.css'

export const Certificates = () => {
    const [hoverName, setHoverName] = React.useState('html')

    return <div id="certificates">
        <div className="title">
            <hr />
            <h1>Certificates</h1>
            <hr />
        </div>
        <div className="cert-part">
            <ul className="cert-list">
                <li className="certificate" onMouseOver={() => setHoverName('html')}>
                    <div className="cert-name">
                        <img src={require('../../images/html.png')} alt="html-icon" />
                        <p>HTML (Michigan University)</p>
                    </div>
                    {hoverName === 'html' && <i class="fas fa-chevron-right a" />}
                </li>
                <li className="certificate" onMouseOver={() => setHoverName('css')}>
                    <div className="cert-name">
                        <img src={require('../../images/css.png')} alt="css-icon" />
                        <p>CSS (Michigan University)</p>
                    </div>
                    {hoverName === 'css' && <i class="fas fa-chevron-right" />}
                </li>
                <li className="certificate" onMouseOver={() => setHoverName('responsive')}>
                    <div className="cert-name">
                        <img src={require('../../images/responsive.png')} alt="responsive-icon" />
                        <p>Responsive Design (Michigan University)</p>
                    </div>
                    {hoverName === 'responsive' && <i class="fas fa-chevron-right" />}
                </li>
                <li className="certificate" onMouseOver={() => setHoverName('js')}>
                    <div className="cert-name">
                        <img src={require('../../images/js.png')} alt="js-icon" />
                        <p>Javascript (Michigan University)</p>
                    </div>
                    {hoverName === 'js' && <i class="fas fa-chevron-right" />}
                </li>
            </ul>
            <img className="cert-img" src={require(`../../images/${hoverName}-certificate.png`)} />
        </div>
    </div>
}