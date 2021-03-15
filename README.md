# react-countdown-timer
Tutorial: Build a custom React countdown timer component.

Let’s get started by setting up a new project using Create React App:
```javascript
npx create-react-app countdown-timer
```

Next create a new file called CountdownTimer.js with the imports and primary function:
```javascript 
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {  
  //..
};

export default CountdownTimer;
```

First up in the `CountdownTimer` function we need to define the end of the countdown. With this defined we then calculate the time remaining using the JavaScript ` Date()` object:
```javascript
const getCountdown = () => {
  const year = new Date().getFullYear() + 1;
  const timeRemaining = new Date(`${year}-1-1`) - new Date();
  let countdown = {};
  if (timeRemaining > 0) {
    countdown = {
      Days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
      Hours: Math.floor((timeRemaining / (1000 * 60 * 60)) % 24),
      Minutes: Math.floor((timeRemaining / 1000 / 60) % 60),
      Seconds: Math.floor((timeRemaining / 1000) % 60),
    };
  }
  return countdown;
};
const [countdown, setCountdown] = useState(getCountdown());
```
Note – this countdown will automatically reset each year. To have the countdown end and not repeat you can declare a fixed year in the end date as follows:
```javascript
//const year = new Date().getFullYear() + 1;
//const timeRemaining = new Date(`${year}-1-1`) - new Date();
const timeRemaining = new Date(`2022-1-1`) - new Date();
```

We’ll use a `setTimeout` to update the countdown at 1000 millisecond intervals:
```javascript
useEffect(() => {
  setTimeout(() => {
    setCountdown(getCountdown());
  }, 1000);
});
```

We’ll then format the countdown data with some HTML markup:
```javascript
const data = [];

Object.entries(countdown).forEach(([unit, value]) => {
  data.push(
    <li key={Math.random().toString(16)}>
      <strong>{value}</strong> {unit}
    </li>
  );
});
```

To complete the `CountdownTimer` component we just need to return the data:
```javascript
return (
  <>
    <h1>New Year Countdown</h1>
    <ul>{data}</ul>
  </>
); 
```
With the component complete we can load it into App.js as follows:
```javascript
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <div className="countdown">
      <CountdownTimer />
    </div>
  );
}

export default App; 
```
That’s all for this tutorial. You should now have a functioning custom countdown timer component that you can drop into a React application.