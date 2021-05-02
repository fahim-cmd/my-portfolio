import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './Project.css';
import Footer from '../Footer/Footer';

const Projects = () => {
    return (
        <div className="projectBg">
            
            <div className="container">
            <h3 className="aboutTitle">Some of my projects</h3>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/Brz1q1Z/emirate.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-title">Emirates Airline</h3>
                                <p class="card-text"> You can purchase 4 types of tickets if you wish. If you are not logged in to the website, you will be taken to the login page. There are two types of login systems for you. If you want, you can login with Facebook login system or email, password. Then if you search for your destination, it will show the details including the price of the ticket</p>
                                <a href="https://github.com/fahim-cmd/emirates-airline"><FontAwesomeIcon  className="iconStyle" icon={faGithubSquare} /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/CWTYs1k/bicycle-mart.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-title">Bicycle Mart</h3>
                                <p class="card-text">You can purchase different types of bicycle if you wish. If you are not logged in to the website, you will be taken to the login page. There are Google login system for you. Clicking on the bike you have selected will show the details on the checkout page. Clicking the checkout button will show your order list. And if you go to the admin page, you can add new products from there that will show up on the home page. You can also manage products from the admin page</p>
                                <a href="https://github.com/fahim-cmd/Bicycle-Mart"><FontAwesomeIcon  className="iconStyle" icon={faGithubSquare} /></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/gdTQSdL/rainbow.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-title">Rainbow FC</h3>
                                <p class="card-text">Rainbow FC is a react project. Where a club called Rainbow FC can purchase different players and when purchasing, the name of each player, their salary, will show how many players the club has purchased. It will also show how much money has been budgeted</p>
                                <a href="https://github.com/fahim-cmd/emirates-airline"><FontAwesomeIcon  className="iconStyle" icon={faGithubSquare} /></a>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://i.ibb.co/5K4SYKN/slider.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h3 class="card-title">Fancy Slider</h3>
                                <p class="card-text">Fancy Slider is a pure JavaScript project. If you search here by typing different names, it will show you different pictures. Hovering over the photo will show its details. Then select different images and click on Create Slider, it will show all image sliders</p>
                                <a href="https://github.com/fahim-cmd/fancy-slider"><FontAwesomeIcon  className="iconStyle" icon={faGithubSquare} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Projects;