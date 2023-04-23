import "./Card.css"
import {parseDate} from "../utils/parseDate" 

const Card = ({data}) => {
    return (
            <div className="single-card">
              <h2>{data.company}</h2>
              <p>No. of Employees: {parseDate(data.noofemployees)}</p>
              <p>Effective Date: {data.effectivedate}</p>
              <p>Notice Date: {data.noticedate}</p>
            </div>
    );
  };
  
  export default Card;