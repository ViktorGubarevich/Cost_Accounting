import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostItem from "./CostItem";
import "./Costs.css";
import { useState } from "react";

const Costs = ({ costs }) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="costs">
      <CostsFilter 
        year={selectedYear}
        onChangeYear={yearChangeHandler}
      />
      <CostItem 
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      />
      <CostItem 
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      />
      <CostItem 
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      />
    </Card>    
  );
}

export default Costs;
  