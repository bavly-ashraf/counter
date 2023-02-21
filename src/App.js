import React, {useState} from "react";
import './App.css';

const App = () => {
const [count, setCount] = useState(0);

return (

<React.Fragment className="div1">
<h1 className="Whysoserious">{count}</h1>
  <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
  <button onClick={() => setCount(0)}>Reset</button>
</React.Fragment>
  
);

}

export default App;
