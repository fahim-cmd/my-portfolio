import { Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './About.css';

const About = () => {
    return (
        <section id="aboutHeight" id="aboutBg">
            <div className="container">
                <h1 className="aboutTitle ">About Me</h1>
                <div className="d-flex justify-content-around">
                    <div className="row">
                        <div className="col-md-6 imgStyle d-flex">
                            <img src="https://i.ibb.co/rdCkqjv/2018-10-18-12-32-58-939-01-01.jpg" alt="" />
                            <div className="d-flex align-items-center" style={{ marginLeft: '30px' }}>
                                <div>
                                    <h3>Nick Name: <span style={{ fontWeight: 'bold' }}>Fahim</span></h3>
                                    <p><span style={{ fontWeight: 'bold' }}>Nationality:</span> Bangladeshi</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Age:</span> 23</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Address:</span> Lakshmipur, chottogram, <br /> Bangladesh</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Language: </span> Bangla, English</p>
                                    <p><span style={{ fontWeight: 'bold' }}>Email:</span> <a href="">hfahim087@gmail.com</a></p>
                                    <p><span style={{ fontWeight: 'bold' }}>Phone:</span> +8801798081535</p>
                                    <Button className="aboutBtn"><a href="https://drive.google.com/file/d/1hwxXQ6nVG1FGGcH-e97o6IczOm2Cu51d/view">
                                        Download Resume</a></Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 aboutName">
                            <div className="nameDetails">
                                <h2>I'm Md.Hasan-Al-Kabir</h2>
                                <p>I am a React developer. I love JavaScript, and I want to work with it. I always like to learn new geniuses and keep pace with the times. I like to work with JavaScript, I want to do something new in the world of programming with my qualifications in Bangladeshi companies</p>
                            </div>

                            <div className="titleHead">
                                <h3>My Programming skills</h3>

                                <h5>Expertise:</h5>
                                <small>javascript</small>
                                <small>React</small>
                                <small>Bootstrap</small>
                                <small>HTML5</small>
                                <small>CSS3</small>

                                <h5>Comfortable:</h5>
                                <small>Express</small>
                                <small>MongoDB</small>
                                <small>React-Bootstrap</small>
                                <small>react-Router</small>

                                <h5>Familiar:</h5>
                                <small>SASS</small>
                                <small>Material UI</small>

                                <h5>Tools:</h5>
                                <small>Heroku</small>
                                <small>Netlify</small>
                                <small>Github</small>
                                <small>Firebase</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default About;