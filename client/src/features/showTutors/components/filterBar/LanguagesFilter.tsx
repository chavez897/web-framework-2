import React from "react";
import FilterBarCSS from "../../assets/FilterBar.module.css";
import MultiSelect from "./MultiSelect.tsx";

interface tutorItemsProps {
  tutorItems: Array<object>;
  setSpokenLanguagesFilter: (languagesArray: Array<string>) => void;
}

const LanguagesFilter: React.FC<tutorItemsProps> = ({
  tutorItems,
  setSpokenLanguagesFilter,
}) => {
  const languagesArray: Array<string> = [];

  const languagesOfTutors: Array<object> = [];
  tutorItems.map((tutor: object) => {
    tutor.spokenLanguages.map((language: string) =>
      languagesOfTutors.push({ language })
    );
  });

  const convertAndsetSpokenLanguagesFilter = (
    multipleLanguages: Array<object>
  ) => {
    multipleLanguages.map((languageObject: object) => {
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
