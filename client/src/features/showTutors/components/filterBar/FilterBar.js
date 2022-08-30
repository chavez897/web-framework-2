import React from "react";

import FilterBarCSS from "../../assets/FilterBar.module.css";
import LanguagesFilter from "./LanguagesFilter";
import PriceSliderModal from "./PriceSlider";

const FilterBar = ({ tutorItems, setSpokenLanguagesFilter }) => {
  return (
    <div className={FilterBarCSS.filterBar}>
      {/* <div>
        <input
          placeholder="Price bellow"
          onChange={(event) => setPriceFilter(event.target.value)}
        ></input>
      </div> */}
      {/* <div className={FilterBarCSS.priceContainer}>
        <div
          className={FilterBarCSS.filterItemContainer}
          onClick={() => setIsOpen(!isOpen)}
        >
          <PriceFilter />
        </div>
        <PriceSliderModal open={isOpen}>Sasha</PriceSliderModal>
      </div> */}
      <div className={FilterBarCSS.filterItemContainer}>
        <PriceSliderModal
          // highestPrice={() => {
          //   if (tutorItems)
          //     return Math.max(...tutorItems.map((tutor) => tutor.lessonCost));
          //   return "100";
          // }}
          highestPrice={Math.max(
            ...tutorItems.map((tutor) => tutor.lessonCost)
          )}
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
