import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

const MultiSelect = ({ data, displayValue, onSelect, onRemove }) => {
  return (
    <Multiselect
      options={data}
      displayValue={displayValue}
      onSelect={onSelect}
      onRemove={onRemove}
    ></Multiselect>
  );
};

export default MultiSelect;
