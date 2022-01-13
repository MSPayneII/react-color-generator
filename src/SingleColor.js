import React, { useState, useEffect } from "react";

const SingleColor = ({ rgb, weight, hexColor, index }) => {
  const [alert, setAlert] = useState(false);

  const bcg = rgb.join(",");
  const hexString = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexString);
      }}
    >
      <p className="percent-value"> {weight}%</p>
      <p className="color-value"> {hexString}</p>

      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
