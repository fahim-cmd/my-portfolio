import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-solid-svg-icons';
import './ContactPage.css';
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer';



const ContactPage = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_v87j4ql', 'template_o0flima', '.contact-form', 'user_cZrENmFvsKbvOgIBz6gpA')

            .then((result) => {
                console.log(result.text);
                alert('your message has been submitted')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (

        <section className="contactBg">
            <div className="container">
                <div className="row pt-5">
                    <div class="col-md-6">
                        <div className="letsTalk">
                            <h3>Feel free to contact me anytime</h3>
                            <h1>Let's Talk</h1>
                        </div>

                        <form className="contact-form pb-5" onSubmit={sendEmail}>

                            <label>Name</label>
                            <input className="form-control" placeholder="Your Name" type="text" name="user_name" />
                            <label>Email</label>
                            <input className="form-control" placeholder="Your Email" type="email" name="user_email" />
                            <label>Message</label>
                            <textarea rows='6' col='12' className="form-control" placeholder="write Your Massage" name="message" />
                            <br />
                            <input className="form-control" id="contactBtn" type="submit" value="Send message" />
                        </form>

                    </div>
                    <div class="col-md-6 mt-5">
                        <h1 className="contactName pt-5 mt-3">Contact Info</h1>
                        <h5>Always available for freelance work if the right project comes along, Feel free to contact me!</h5>
                        <h5>Location</h5>
                        <h5>Chottogram, Bangladesh</h5>
                        <br />
                        <h5>Call me</h5>
                        <h5>01798081535</h5>
                        <br />
                        <h5>Send Email</h5>
                        <h5>hfahim087@gmail.com</h5>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default ContactPage;