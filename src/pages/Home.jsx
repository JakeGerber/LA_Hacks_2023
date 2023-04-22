import React, { useEffect, useState} from "react";
import OverViewCard from "../components/OverViewCard";
import {Link} from 'react-router-dom';


const Home = ({companies}) => {
    
    var layoff="layoff overview data"
    var breaches="data breaches overview data"
    var top3 = {
        company1: {
          name: "Tesla",
          number: 1000,
          date: "2022-09-09"
        },
        company2: {
          name: "Apple",
          number: 800,
          date: "2022-09-09"
        },
        company3: {
          name: "Microsoft",
          number: 700,
          date: "2022-09-09"
        }
      };
      
    var top3Json = JSON.stringify(top3);
console.log(top3Json);
console.log("step");
console.log(companies)
    return(
        <div className="home">
           <h1>Home page</h1>
           <h2>search bar</h2>
           <OverViewCard title={layoff} top3={top3}/>
           <OverViewCard title={breaches}/>
        </div>
    );
}

export default Home;