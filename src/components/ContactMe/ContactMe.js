import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from '../Footer/Footer';
import './ContactMe.css';

function ContactMe() {
    const [state, handleSubmit] = useForm("mwkavqyd");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
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

        <form style={{ padding: '100px', height: "100px" }} onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="form-control" placeholder="Your Email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                rows='6' col='12' className="form-control" placeholder="write Your Massage"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
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
}

function App() {
    return (
        <ContactMe />
    );
}
export default App;
