import Expenses from "./components/Expenses/Expenses";
import items from "./components/Data";

const App = () => {

  return (
    <div>
      <h2>Paco Eres Cabron!</h2>
      <Expenses items={items} />
    </div>
  );
}

export default App;
