import React from 'react';

const App = ({ inc, dec, rnd, state }) => {
  return (
    <div className="container mx-auto pt-5">
      <h2 id="counter">{state}</h2>
      <button onClick={dec} id="inc" className="btn btn-primary btn-lg mr-1">
        DEC
      </button>
      <button onClick={inc} id="dec" className="btn btn-primary btn-lg mr-1">
        INC
      </button>
      <button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">
        RND
      </button>
    </div>
  );
};

export default App;
