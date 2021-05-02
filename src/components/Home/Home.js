import React from 'react';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import './Home.css';

const Home = () => {
    return (
        <div id="mainBg">
            <Header></Header>
            <Projects></Projects>
            <About></About>
            {/* <ContactPage></ContactPage> */}
            <ContactMe></ContactMe>
            <Footer></Footer>
            <div className="animation-area">
                <ul className="box-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;