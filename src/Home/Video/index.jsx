import React from 'react';
import "./index.scss";

export default function Video() {
  return (
    <div className={"video-container"}>
      <div className="video-left">
        <h3>Meet Your Host - Alistair Schultz</h3>
        <p>With more than 15 years of experience covering both the FX and CFD markets, Alistair has extensive knowledge covering algorithmic trading, market analysis & an impressive educational background.</p>
        <p>As the author of ‘Essentials for Trading Students – An Overview of the Basics for Aspiring Traders’, which was released in 2017, Alistair will take any aspiring trader from the basics right through to advanced analytics used in institutional funds.</p>
        <p>At the core of Alistair’s teachings is the ability to help each trader uncover their ‘Trading DNA', helping them flourish with the skills and timeframes that work best for them.</p>
        <p>See more ></p>
      </div>
      <div className="video-right">
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/36h1__kF9hA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
}

