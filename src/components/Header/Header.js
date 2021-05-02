import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <section className="container ">
            <div className=" row  ">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-md-12 myName ">
                        <h1>I'm <br />Md. <span style={{ color: '#1c1427' }}>Hasan</span> -Al-Kabir </h1>
                        <h3>React Davaloper</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <img style={{ height: '600px' }} src="https://i.ibb.co/74yhP7S/git-pic-removebg-preview.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;