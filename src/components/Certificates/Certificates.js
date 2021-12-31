import React from "react";
import './certificates.css'
import 'animate.css'

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
                        <a href="https://www.coursera.org/verify/GRH6MMEJ8ZXJ" target='_blank'><p>HTML (Michigan University)</p></a>
                    </div>
                    {hoverName === 'html' && <i class="fas fa-angle-double-right animate__animated animate__slideInLeft"></i>}
                </li>
                <li className="certificate" onMouseOver={() => setHoverName('css')}>
                    <div className="cert-name">
                        <img src={require('../../images/css.png')} alt="css-icon" />
                        <a href="https://www.coursera.org/verify/HWHNDUS5P5K5" target='_blank'><p>CSS (Michigan University)</p></a>
                    </div>
                    {hoverName === 'css' && <i class="fas fa-angle-double-right animate__animated animate__slideInLeft"></i>}
                </li>
                <li className="certificate" onMouseOver={() => setHoverName('responsive')}>
                    <div className="cert-name">
                        <img src={require('../../images/responsive.png')} alt="responsive-icon" />
                        <a href="https://www.coursera.org/verify/4PNH3VNL6MBK" target='_blank'><p>Responsive Design (Michigan University)</p></a>
                    </div>
                    {hoverName === 'responsive' && <i class="fas fa-angle-double-right animate__animated animate__slideInLeft" />}
                </li>
                <li className="certificate" onMouseOver={() => setHoverName('js')}>
                    <div className="cert-name">
                        <img src={require('../../images/js.png')} alt="js-icon" />
                        <a href="https://www.coursera.org/verify/ZGRU7FE847D4" target='_blank'><p>Javascript (Michigan University)</p></a>
                    </div>
                    {hoverName === 'js' && <i class="fas fa-angle-double-right animate__animated animate__slideInLeft" />}
                </li>
            </ul>
            <img className="cert-img animate__animated animate__animate__slideInLeft" src={require(`../../images/${hoverName}-certificate.png`)} />
        </div>
    </div>
}