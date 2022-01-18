import "./styles.css"
import UserCard from "../UserCard";




function CardContainer () {

return (
    <div className="cards">
    <UserCard 
    name="TurboKit's"
    category="Performance"
    description="Turbokit's and more for instalation plug and play">
    </UserCard>
    <UserCard 
    name="fuse box/chips and more accessories "
    category="Electricity"
    description="everything you need for car wiring.">
    </UserCard>
    <UserCard 
    name="Electronic's"
    category="Electronic"
    description="coils, spark plugs, cables and more.">
    </UserCard>
    
    </div>
);
}

export default CardContainer;
