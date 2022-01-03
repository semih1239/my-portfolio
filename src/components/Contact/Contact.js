import React from 'react'
// import ModalComponent from '../Modal/Modal.component'
import './contact.css'

export const Contact = () => {
    // const [showModal, setShowModal] = React.useState(false)

    return <div id='contact'>
        <div className="title">
            <hr />
            <h1>Contact</h1>
            <hr />
        </div>
        <div className='touch'>
            <div>
                <h2>Get in Touch</h2>
                <p>Hi. I am open to all kinds of advice, suggestions and questions. Feel free to contact with me.</p>
                <div className='icon'>
                    <i className="far fa-envelope" />
                    <p>semihayyildiz23@outlook.com</p>
                </div>
                <div className='icon'>
                    <i className="fas fa-mobile-alt" />
                    <p>+45 71 54 51 10</p>
                </div>
            </div>
            <form action="https://formsubmit.co/semihayyildiz23@outlook.com" target='_blank' method="POST">
                <div className='name-mail'>
                    <input type="hidden" name="_template" value="table" />
                    <input type='hidden' name='_subject' value='From Portfolio!!!' />
                    <input id='name' type='text' name='name' placeholder='Name' required />
                    <input id='email' type='email' name='email' placeholder='Email Address' required />
                </div>
                <textarea id='message' type='text' name='message' placeholder='Write your message here' required />
                <button type='submit' >Send Message</button>
            </form>
        </div>
        {/* <ModalComponent show={showModal} setShow={() => setShowModal(false)} /> */}
    </div>
}