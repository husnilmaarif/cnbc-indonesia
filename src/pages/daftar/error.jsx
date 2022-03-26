import React from "react";

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red", backgroundColor: "white" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

export default ShowErrors;
