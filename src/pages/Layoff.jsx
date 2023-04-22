import React, { useEffect, useState} from "react";
import Card from "../components/Cards";
import {Link} from 'react-router-dom';


const LayOff = ({companies}) => {
    
console.log("layoff");
console.log(companies)
    return(
        <div className="layoff">
           <h1>layoff page</h1>
           <Card companies={companies}/>
        </div>
    );
}

export default LayOff;