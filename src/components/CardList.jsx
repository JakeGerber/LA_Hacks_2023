import {Link} from 'react-router-dom';
import Card from "./Card"
import { useState } from "react";

const CardList = ({ companies }) => {
  const [orderBy, setOrderBy] = useState("effectivedate");

  const handleSort = (key) => {
    const sortedCompanies = Object.values(companies).sort((a, b) => {
      if (key === "effectivedate") {
        const dateA = Date.parse(a.effectivedate);
        const dateB = Date.parse(b.effectivedate);
        return dateA > dateB ? -1 : 1;
      } else if (key === "oldestdate") {
        const dateA = Date.parse(a.effectivedate);
        const dateB = Date.parse(b.effectivedate);
        return dateA > dateB ? 1 : -1;
      } else if ( key == "company") {
        
        return a.company > b.company ? 1 : -1;
      } else {
        return b.noofemployees - a.noofemployees;
      }
    });
    console.log(key)
    console.log(sortedCompanies)
    return sortedCompanies;
  }
  

  const sortedCompanies = handleSort(orderBy);


  return (
      <div className='card'>
        
        <div className="options">
          <div className="order-by">
            <span>Order by:</span>
            <button style={{ backgroundColor: orderBy === "effectivedate" ? "#0E7C6B" : "#12bca2" }} onClick={() => setOrderBy("effectivedate")}>
              Future/Recent Effective Date
            </button>
            <button style={{ backgroundColor: orderBy === "oldestdate" ? "#0E7C6B" : "#12bca2" }} onClick={() => setOrderBy("oldestdate")}>
              Oldest Effective Date
            </button>
            <button style={{ backgroundColor: orderBy === "noofemployees" ? "#0E7C6B" : "#12bca2" }} onClick={() => setOrderBy("noofemployees")}>
              Highest No. of Employees
            </button>
            <button style={{ backgroundColor: orderBy === "company" ? "#0E7C6B" : "#12bca2" }} onClick={() => setOrderBy("company")}>
              Company A-Z
            </button>
          </div>
        </div>

        <div className='card_body'>
  {sortedCompanies && sortedCompanies.map((value, index) => (
    <Link to={"/layoff/" + value.company} key={value.company + index} id={value.company}>
      <Card data={value}/>
    </Link>
  ))}
</div>

      </div>
  );
};

export default CardList;

 