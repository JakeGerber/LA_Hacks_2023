import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const CompanyPage = ({ data }) => {
  const { id } = useParams();

  // Find the company data based on the id
  const company = data.find(c => c.company === id);

  return (
    <div className="company-page">
      <h2>Company: {company.company}</h2>
      <p>Address: {company.address}</p>
      <p>County: {company.countyorparish}</p>
      No. of Employees: {company.noofemployees}

      <ul>
        <li>Receive Date: {company.receiveddate}</li>
        <li>Notice Date: {company.noticedate}</li>
        <li>Effective Date: {company.effectivedate}</li>
    </ul>
    Google Map api!!
    
    </div>
  );
}

export default CompanyPage;




