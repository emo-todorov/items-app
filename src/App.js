import ConnectedAddItemForm from "./connectedComponents/connectedAddItemForm";
import ConnectedItemsList from "./connectedComponents/connectedItemsList";
import ConnectedSummary from "./connectedComponents/connectedSummary";

function App() {
  return (
    <div className="App">
      <h1>MAIN PAGE</h1>
      <ConnectedAddItemForm />
      <ConnectedItemsList />
      <ConnectedSummary />
    </div>
  );
}

export default App;
