import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="cercles">
        <div className="cercle"></div>
      </div>
      <div className="line_2">
        <h1 className="title_home">HOME</h1>
      </div>
      <div
        className="container_cercle"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <div className="cercle"></div>
      </div>
    </div>
  );
}

export default Home;
