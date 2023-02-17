import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>
                        Title <input type="text" />
                    </label>
                </div>
                <div className="new-expense__control">
                    <label>
                        Amount <input type="number" min="0.01" step="0.01" />
                    </label>
                </div>
                <div className="new-expense__control">
                    <label>
                        Date <input type="date" min="2022-01-01" max="2023-12-31" />
                    </label>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
