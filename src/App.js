import React, { useState } from "react";
import MyContext from "./MyContext";
import Form from "./Components/Form";

import Navbar from "./Components/Navbar";
import Wrapper from "./Components/Wrapper";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <MyContext.Provider value={{ name, setName }}>
         <Wrapper> 
          <Navbar />
           <Form />
         </Wrapper> 
      </MyContext.Provider>
    </div>
  );
}

export default App;
