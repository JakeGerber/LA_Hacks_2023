import OverViewCard from "../components/OverViewCard";

const Home = ({layoff, breach}) => {
    
    return(
        <div className="home">
             <div className="row">
                <div className="column"><OverViewCard title="Top 3 Layoffs" top3={layoff}/></div>
                <div className="column"><OverViewCard title="Top 3 Breaches" top3={breach}/></div>
            </div> 
        </div>
    );
}

export default Home;