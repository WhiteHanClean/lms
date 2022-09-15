import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";

const Intro = () => {
  const [stateMusubi, setStateMusubi] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStateMusubi(false);
    }, 10000);
  }, []);

  return (
    <Transition in={stateMusubi} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <div className="musubi">
          <div className="container">
            <div className="glitch" data-text="Diamond">
              Diamond
            </div>
            <div className="glow">Programming course</div>
            <p className="subtitle">welcome to new world</p>
          </div>
          <div className="scanlines"></div>
        </div>
      )}
    </Transition>
  );
};

export default Intro;
