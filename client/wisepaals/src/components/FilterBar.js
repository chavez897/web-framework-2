import React from "react";
import MultiSelect from "./MultiSelect";
import FilterBarCSS from "./FilterBar.module.css";

const FilterBar = ({
  tutorItems,
  setPriceFilter,
  setSpokenLanguagesFilter,
}) => {
  const languagesArray = [];

  const languagesOfTutors = [];
  tutorItems.map((tutor) => {
    tutor.props.tutor.spokenLanguages.map((language) =>
      languagesOfTutors.push({ language })
    );
  });

  const convertAndsetSpokenLanguagesFilter = (multipleLanguages) => {
    multipleLanguages.map((languageObject) => {
      languagesArray.push(languageObject.language.toLowerCase());
    });
    setSpokenLanguagesFilter(languagesArray);
  };

  return (
    <div className={FilterBarCSS.filterBar}>
      <div>
        <input
          placeholder="Price bellow"
          onChange={(event) => setPriceFilter(event.target.value)}
        ></input>
      </div>
      <MultiSelect
        data={[...new Set(languagesOfTutors)]}
        displayValue="language"
        onSelect={convertAndsetSpokenLanguagesFilter}
        onRemove={convertAndsetSpokenLanguagesFilter}
      />
    </div>
  );
};

export default FilterBar;
