import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">Immersive Digital Experiences<br />Through Data</h1>
            <div className="search-box">
                <input type="text" placeholder="Unlock Tailored Services: Your Needs, Instantly Found" />
                <button className="search-btn">↑</button>
            </div>
            <p className="powered-by-ai">Powered by AI</p>
        </div>
    );
};

export default Home;
