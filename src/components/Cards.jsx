

const Card = ({ companies }) => {
    return (
      <div className='card'>
        <div className='card_body'>
          {companies && Object.entries(companies).map(([key, value]) => (
            <div className="overview-card" key={key}>
              <h2>{value.Company}</h2>
              <p>No. of Employees: {value.number}</p>
              <p>Effective Date: {value.data}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Card;
  