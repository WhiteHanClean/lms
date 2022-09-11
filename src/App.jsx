import React, { useState, useEffect } from "react";
import "./App.css";
import { Transition } from "react-transition-group";

function App() {
  const [stateMusubi, setStateMusubi] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStateMusubi(false);
    }, 2000000);
  }, []);

  return (
    <>
      <Transition in={stateMusubi} timeout={500} mountOnEnter unmountOnExit>
        {(state) => (
          <div className="musubi">
            <div class="container">
              <div class="glitch" data-text="Diamond">
                Diamond
              </div>
              <div class="glow">Programming course</div>
              <p class="subtitle">welcome to new world</p>
            </div>
            <div class="scanlines"></div>
          </div>
        )}
      </Transition>

      <h2>Musubi</h2>
    </>
  );
}

export default App;
