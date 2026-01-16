// main component, acts like the "home page" 

import "./App.css";
import Navbar from "./components/navbar";  

function App() {
  let userName = "Filza";
  return (
    <>
     <Navbar />
      <h1>Hello</h1>
      <p>Hello {userName} </p>
    </>
  );
}

export default App;
