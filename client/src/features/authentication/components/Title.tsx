import React from "react";

interface Props {
  text: string;
}

const Title: React.FC<Props> = ({ text }) => {
  return <span className="title">{text}</span>;
};

export default Title;
