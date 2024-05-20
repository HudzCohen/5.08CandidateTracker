import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {

    return (
        <div className="container" style={{marginTop: 80, textAlign: 'center'}}>
            <h1>Welcome to the Candidate Tracker.</h1>
            <h3>Use the links above to navigate.</h3>
        </div>
    );
};

export default Home;