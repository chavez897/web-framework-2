import React from "react";

import FilterBarCSS from "../../assets/FilterBar.module.css";
import LanguagesFilter from "./LanguagesFilter.tsx";
import PriceSlider from "./PriceSlider.tsx";

interface Props {
  tutorItems: Array<{
    lessonCost: number;
  }>;
  setSpokenLanguagesFilter: (languages: Array<string>) => void;
  setPriceFilter: (price: number) => void;
}

const FilterBar: React.FC<Props> = ({
  tutorItems,
  setSpokenLanguagesFilter,
  setPriceFilter,
}) => {
  return (
    <div className={FilterBarCSS.filterBar}>
      <div className={FilterBarCSS.filterItemContainer}>
        <PriceSlider
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
