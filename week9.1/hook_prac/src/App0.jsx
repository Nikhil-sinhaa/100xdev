import React from "react";

class MyComponent extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("Component Unmounted");
  }

  render() {
    // Render UI
    return <div>Hi there</div>;
  }
}

export default MyComponent;