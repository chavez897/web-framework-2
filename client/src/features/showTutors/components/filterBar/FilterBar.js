import React from "react";

import FilterBarCSS from "../../assets/FilterBar.module.css";
import LanguagesFilter from "./LanguagesFilter";
import PriceSlider from "./PriceSlider";

const FilterBar = ({
  tutorItems,
  setSpokenLanguagesFilter,
  setPriceFilter,
}) => {
  return (
    <div className={FilterBarCSS.filterBar}>
      {/* <div>
        <input
          placeholder="Price bellow"
          onChange={(event) => setPriceFilter(event.target.value)}
        ></input>
      </div> */}
      <div className={FilterBarCSS.filterItemContainer}>
        <PriceSlider
          // highestPrice={() => {
          //   if (tutorItems)
          //     return Math.max(...tutorItems.map((tutor) => tutor.lessonCost));
          //   return "100";
          // }}
          highestPrice={Math.max(
            ...tutorItems.map((tutor) => tutor.lessonCost)
          )}
          setPriceFilter={setPriceFilter}
        />
      </div>
      <div className={FilterBarCSS.filterItemContainer}>
        <LanguagesFilter
          tutorItems={tutorItems}
          setSpokenLanguagesFilter={setSpokenLanguagesFilter}
        />
      </div>
    </div>
  );
};

export default FilterBar;
