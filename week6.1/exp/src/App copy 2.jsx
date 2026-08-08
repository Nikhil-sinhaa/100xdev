function App() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponent />} />
    </div>
  );
}

function TextComponent() {
  return (
    <div>
      hi there
    </div>
  );
}

function CardWrapper({ innerComponent }) {
  // Create a div with a border and render the passed component inside it
  return (
    <div style={{ border: "2px solid black" }}>
      {innerComponent}
    </div>
  );
}

export default App;