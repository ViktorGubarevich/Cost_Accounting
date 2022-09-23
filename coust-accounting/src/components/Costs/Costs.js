import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import CostList from "./CostList";
import "./Costs.css";
import { useState } from "react";
import CostDiagram from "./CostsDiagram";

const Costs = ({ costs }) => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="costs">
      <CostsFilter 
        year={selectedYear}
        onChangeYear={yearChangeHandler}
      />
      <CostDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>    
  );
};

export default Costs;
  