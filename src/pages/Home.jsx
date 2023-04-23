import React, { useEffect, useState} from "react";
import OverViewCard from "../components/OverViewCard";
import {Link} from 'react-router-dom';


const Home = ({layoff, breach}) => {
    
    return(
        <div className="home">
           <h1>Home page</h1>
           <h2>search bar</h2>
           <OverViewCard title="Top 3 Layoffs" top3={layoff}/>
           <OverViewCard title="Top 3 Breaches" top3={breach}/>
        </div>
    );
}

export default Home;