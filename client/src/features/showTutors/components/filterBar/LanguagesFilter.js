import React from "react";
import FilterBarCSS from "../../assets/FilterBar.module.css";
import MultiSelect from "./MultiSelect";

const LanguagesFilter = ({ tutorItems, setSpokenLanguagesFilter }) => {
  const languagesArray = [];

  const languagesOfTutors = [];
  tutorItems.map((tutor) => {
    tutor.spokenLanguages.map((language) =>
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
    <>
      <div className={FilterBarCSS.languageFilterText}>
        <label>Languages</label>
      </div>
      <div className={FilterBarCSS.multiselect}>
        <MultiSelect
          data={[...new Set(languagesOfTutors)]}
          displayValue="language"
          onSelect={convertAndsetSpokenLanguagesFilter}
          onRemove={convertAndsetSpokenLanguagesFilter}
        />
      </div>
    </>
  );
};

export default LanguagesFilter;
