import { useParams } from "react-router-dom";
import Map from "../components/Map"
import "./CompanyPage.css"
import {parseDate} from "../utils/parseDate" 

const CompanyPage = ({ data }) => {
  const { id } = useParams();

  // Find the company data based on the id
  const company = data.find(c => c.company === id);

  return (
    <div className="company-page">
      <h2>{company.company}</h2>
      <p>{company.address}<br/>County: {company.countyorparish}</p>
      <p> No. of Employees: {company.noofemployees}</p>
      <p>Receive Date: {parseDate(company.receiveddate)}</p>
      <p>Notice Date: {parseDate(company.noticedate)}</p>
      <p> Effective Date: {parseDate(company.effectivedate)}</p>
    
    <Map address={company.address}/>
    
    </div>
  );
}

export default CompanyPage;




