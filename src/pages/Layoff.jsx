import {useState} from "react";
import CardList from "../components/CardList";
import { Outlet} from "react-router-dom"

const Layoff = ({companies}) => {
    const [orderBy, setOrderBy] = useState("company");    

    return(
        <div className="layoff">
            <CardList companies={companies} orderBy={orderBy} setOrderBy={setOrderBy}/>
            <Outlet/>
        </div>
    );
}

export default Layoff;


