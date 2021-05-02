import React from 'react';
import About from '../About/About';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import SetNavbar from './SetNavbar/SetNavbar';

const Home = () => {
    return (
        <div id="mainBg">
                
            <Header></Header>
            <Projects></Projects>  
            <About></About>         
            <ContactPage></ContactPage>    
            <Footer></Footer>       
        </div>
    );
};

export default Home;