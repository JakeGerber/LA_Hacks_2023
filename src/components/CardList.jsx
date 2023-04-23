import {Link} from 'react-router-dom';
import Card from "./Card"
const CardList = ({ companies }) => {
    return (
      <div className='card'>
        <div className='card_body'>
          {companies && Object.entries(companies).map(([key, value]) => (
            <Link to={"/layoff/" + value.company} key={key} id={value.company}>
                <Card data={value}/>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default CardList;
 