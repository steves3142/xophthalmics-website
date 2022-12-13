import { useState } from "react";

const MAX = 10;

function Slider() {
  const [value, setValue] = useState(0);

//   const getBackgroundSize = () => {
//     return { backgroundSize: `${(value * 100) / MAX}% 100%` };
//   };

  return (
    <div className="App">
      <input
        type="range"
        min="0"
        max={MAX}
        onChange={(e) => setValue(e.target.value)}
        // style={getBackgroundSize()}
        value={value}
      />
    </div>
  );
}

export default Slider 
