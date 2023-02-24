import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [addingExpense, setAddignexpense] = useState(false);

  const toggleForm = () => {
    setAddignexpense((prev) => !prev);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    toggleForm();
  };

  return (
    <div className="new-expense">
      {!addingExpense && (
        <button type="button" onClick={toggleForm}>
          Add New Expense
        </button>
      )}
      {addingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
