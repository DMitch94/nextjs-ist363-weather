"use client";
import { useState } from "react";

import Button from "../components/Button";
import ColorPicker from "../components/ColorPicker";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(False);

  return (
    <div>
      <h1>Weather app</h1>
      <h2>Count: {count}</h2>
      <Button
        label="Increment"
        clickHandler={() => {
          setCount(count + 1);
        }}
      />
      <Button
        label="Decrement"
        clickHandler={() => {
          setCount(count - 1);
        }}
      />
      <Button label="Download" />
      <Button label="Register now" />
      <Button label="Learn more" />

      {count > 5 && <div>Count is greater than 5</div>}

      <br />
      <Button
        label={isVisible ? "Hide Message" : "Show message"}
        clickHandler={() => {
          setIsVisible(!isVisible);
        }}
      />
      {isVisible && <p>Hello, world!</p>}

      <ColorPicker />
    </div>
  );
};
export default Homepage;
