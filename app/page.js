import { useState } from "react";

import Button from "../components/Button";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState();

  return (
    <div>
      <h1>Weather app</h1>
      <h2>Count: {count}</h2>
      <button
        onclick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onclick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <Button label="Download" />
      <Button label="Register now" />
      <Button label="Learn more" />

      {count > 5 && <div>Count is greater than 5</div>}

      <br />
      <button>Show message</button>
      {isVisible && <p>Hello, world!</p>}
    </div>
  );
};
export default Homepage;
