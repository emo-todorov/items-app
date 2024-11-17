import ConnectedAddItemForm from "./connectedComponents/connectedAddItemForm";
import ConnectedItemsList from "./connectedComponents/connectedItemsList";

function App() {
  return (
    <div className="App">
      <h1>MAIN PAGE</h1>
      <ConnectedAddItemForm />
      <ConnectedItemsList />
    </div>
  );
}

export default App;
