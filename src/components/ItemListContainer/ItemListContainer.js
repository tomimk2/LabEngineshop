import CategoryList from "../Item";
import "./styles.css"


function CardContainer () {

return (
    <div className="cards">
    <CategoryList 
    name="TurboKit's"
    category="Performance"
    description="Turbokit's and more for instalation plug and play">
    </CategoryList>
    <CategoryList 
    name="fuse box/chips and more accessories "
    category="Electricity"
    description="everything you need for car wiring.">
    </CategoryList>
    <CategoryList 
    name="Electronic's"
    category="Electronic"
    description="coils, spark plugs, cables and more.">
    </CategoryList>
    
    </div>
);
}

export default CardContainer;
