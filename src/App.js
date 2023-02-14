import Expenses from "./components/Expenses";
import items from "./components/Data";

function App() {
  
  return (
    <div>
      <h2>Paco Eres Cabron!</h2>
      <Expenses items={items} />
    </div>
  );
}

export default App;
