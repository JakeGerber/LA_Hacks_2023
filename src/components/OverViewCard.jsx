// Import OverViewCard CSS styles
import "./OverViewCard.css"

// This component includes the top 3 companies with largest number of employees in past month
// It takes a JSON object of top 3 companies as props
const OverViewCard = ({title, top3}) => {
 
  // Render the component with the given title and top 3 companies
  return (
    <div className='overview-list'>
        <h1>{title}</h1>
        {top3 && Object.entries(top3).map(([key, value]) => (
          // For each company in the top 3, render an overview card with the company name and number of employees
          <div className="overview-card" key={key}>
            <h1>{value.company}</h1>
            { value.noofemployees ? <p><h2>{value.noofemployees}</h2> employees</p> : <div></div>}
            { value.individualsaffected ? <p><h2>{value.individualsaffected}</h2> affected</p> : <div></div>}
          </div>
        ))}
    </div>
  )
}

// Export the OverViewCard component for use in other parts of the app
export default OverViewCard;
