import React, { useEffect, useState} from "react";
import CardList from "../components/CardList";
import { Routes, Route, Link, Outlet} from "react-router-dom"


const Layoff = ({companies}) => {
    
console.log("layoff");
console.log(companies)
    return(
        <div className="layoff">
           <h1>layoff page</h1>
           <CardList companies={companies}/>
           <Outlet/>
        </div>
    );
}

export default Layoff;


