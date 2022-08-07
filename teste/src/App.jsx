import React from "react";

function App() {

  const showHello = () => {
    console.log("Helo World!");
    alert("Hello World!");
  }

  const Button = <button onClick={showHello}>Hi</button>

  return (
    <div className="App">
        {Button}
    </div>
  );
}

export default App;
