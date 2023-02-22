import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = ({ items }) => {
    const [yearSelected, setYearSelected] = useState("2023");

    const yearSelectionHandler = (selection) => {
        setYearSelected(selection);
    };

    const filteredItems = items.filter(
        (item) => item.date.getFullYear() === +yearSelected
    );

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={yearSelected}
                onYearSelection={yearSelectionHandler}
            />
            <ExpensesList items={filteredItems} />

            {/* {filteredItems.length === 0 && <p>No expenses found.</p>}
            {filteredItems.length > 0 &&
                filteredItems.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))} Option 2 */}

            {/* {filteredItems.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                filteredItems.map((item) => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))
            )} OPTION 3 */}
        </Card>
    );
};

export default Expenses;
