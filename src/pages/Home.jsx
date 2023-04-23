import OverViewCard from "../components/OverViewCard";

const Home = ({layoff, breach}) => {
    
    return(
        <div className="home">
           <OverViewCard title="Top 3 Layoffs" top3={layoff}/>
           <OverViewCard title="Top 3 Breaches" top3={breach}/>
        </div>
    );
}

export default Home;