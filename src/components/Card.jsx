import {Link} from 'react-router-dom';
import CompanyPage from '../pages/CompanyPage';

const Card = ({data}) => {
    return (
            <div className="overview-card">
              <h2>{data.company}</h2>
              <p>No. of Employees: {data.noofemployees}</p>
              <p>Effective Date: {data.effectivedate}</p>
            
            </div>
    );
  };
  
  export default Card;