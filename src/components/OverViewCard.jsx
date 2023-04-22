
import "./OverViewCard.css"

//Include the top 3 companies with largest number of employee in past month

//pass a json object of top 3 companies
const OverViewCard = ({title, top3}) => {
 

  return (
    <div className='overview-list'>
        <h3>{title}</h3>
        {top3 && Object.entries(top3).map(([key, value]) => (
          <div className="overview-card" key={key}>
            <h2>{value.name}</h2>
            <p>No. of Employees: {value.number}</p>
            <p>Effective Date: {value.date}</p>
          </div>
        ))}
    </div>
  )
}

export default OverViewCard;