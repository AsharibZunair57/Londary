import "./Cards.css";
import ArrowDownwardSharpIcon from '@material-ui/icons/ArrowDownwardSharp'; 
import ArrowUpwardSharpIcon from '@material-ui/icons/ArrowUpwardSharp';

function Cards() {
    return (
        <div className="cards">
            <div className="cardsItem">
                <span className="cardsTitle">Active Costumers</span>
                   <div className="cardsContainer">
                       <span className="cardsMoney">2000</span>
                       <span className="cardsMoneyRate">-200
                       <ArrowDownwardSharpIcon className="cardsicon negative"/>
                       </span>
                   </div> 
                   <span className="cardssub">Compared to Last Year </span>
            </div>
            <div className="cardsItem">
                <span className="cardsTitle">Active Riders</span>
                   <div className="cardsContainer">
                       <span className="cardsMoney">3000</span>
                       <span className="cardsMoneyRate">-1100
                       <ArrowDownwardSharpIcon className="cardsicon negative"/>
                       </span>
                   </div> 
                   <span className="cardssub">Compared to Last Month </span>
            </div>
            <div className="cardsItem">
                <span className="cardsTitle">Active Orders</span>
                   <div className="cardsContainer">
                       <span className="cardsMoney">5000</span>
                       <span className="cardsMoneyRate">+1100
                       <ArrowUpwardSharpIcon className="cardsicon"/>
                       </span>
                   </div> 
                   <span className="cardssub">Compared to Last Month </span>
            </div>
        </div>
    )
}

export default Cards
