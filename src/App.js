import React from 'react';
import Ninjas from "./Ninjas";

function App() {
  return (
    <div className="App">
      <h1> My First React App!</h1>
      <p>Welcome :)</p>
        <Ninjas name="Nayan" age="23" belt="Black"/>
        <Ninjas name="Paola" age="20" belt="Black"/>
    </div>
  );
}

export default App;
