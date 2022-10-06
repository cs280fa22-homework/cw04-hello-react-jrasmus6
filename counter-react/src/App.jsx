import { useState } from "react";
import Button from "./components/Button";
import Label from "./components/Label";

function App() {

  const [counter, setCounter] = useState(0);

  const up = () => {
    setCounter(counter + 1);
  }

  const down = () => {
    setCounter(counter - 1);
  }

  return (
  <>
    <Label counter={counter}/>
    
    <Button handleOnClick={up} name={"Up"}/>
    <Button handleOnClick={down} name={"Down"}/>
  </>
  );
}

export default App;