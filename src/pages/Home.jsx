import React, { useEffect, useState} from "react";
import Card from "../components/Card";
import {Link} from 'react-router-dom';


const Home = () => {
    
    var layoff="layoff overview data"
    var breaches="data breaches overview data"

    return(
        <div className="home">
           <h1>Home page</h1>
           <h2>search bar</h2>
           <Card title={layoff}/>
           <Card title={breaches}/>
        </div>
    );
}

export default Home;