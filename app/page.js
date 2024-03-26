import { useState } from "react";

import Button from "../components/Button";
const Homepage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Weather app</h1>
      <h2>Count: {count}</h2>
      <Button label="Download" />
      <Button label="Register now" />
      <Button label="Learn more" />
    </div>
  );
};
export default Homepage;
