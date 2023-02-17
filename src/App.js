import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import items from "./components/Data";

const App = () => {

  return (
    <div>
      <NewExpense />
      <Expenses items={items} />
    </div>
  );
}

export default App;
