import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";

interface Props {
  data: any;
  displayValue: string;
  onSelect: (selectedList: any) => void;
  onRemove: (selectedList: any) => void;
}

const MultiSelect: React.FC<Props> = ({
  data,
  displayValue,
  onSelect,
  onRemove,
}) => {
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
