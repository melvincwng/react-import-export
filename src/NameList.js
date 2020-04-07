import React from "react";

const NameList = ({ names }) => {
  return (
    <div>
      {names.map((name) => (
        <div>{name}</div>
      ))}
    </div>
  );
};

export default NameList;
