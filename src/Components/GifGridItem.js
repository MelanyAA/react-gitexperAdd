import React from "react";

export const GifGridItem = ({ title, url, id }) => {
  console.log({ title, url, id });
  return (
    <div className="card animate__animated animate__bounce animate__slideInDown">
      <p>{title}</p>
      <img src={url} alt={title} />
    </div>
  );
};
