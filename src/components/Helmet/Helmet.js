import React from "react";

{/* ======== Sitemizin adının web sitesi başlığı olarak gözükmesi ========= */}

const Helmet = (props) => {
  document.title = "Yeşil Gurme organic foods ordering app -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;