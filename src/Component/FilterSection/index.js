import { useState } from "react";
import Carousel from "../Carousel/index.js";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./filterSection.css";

export default ({ title, data, filters, executeFilter }) => {
  const [selectedTab, setSelectedTab] = useState();
  return (
    <div className="Section">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <Tabs
        value={selectedTab}
        onChange={(e, value) => {
          executeFilter(filters[value].key);
          setSelectedTab(value);
        }}
        TabIndicatorProps={{
          style: { backgroundColor: "var(--css-primary)" },
        }}
      >
        {filters.map((filter) => (
          <Tab
            className="filterSection"
            key={filter.key}
            label={filter.label}
          />
        ))}
      </Tabs>
      <Carousel data={data} navId="filter" />
    </div>
  );
};
