import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
    const [yearSelected, setYearSelected] = useState("2023");

    const yearSelectionHandler = (selection) => {
        setYearSelected(selection);
    };

    const filteredItems = items.filter(
        (item) => item.date.getFullYear() === +yearSelected
    );

    let expensesContent = <p>No expenses found.</p>;

    if (filteredItems.length > 0) {
        expensesContent = filteredItems.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={yearSelected}
                onYearSelection={yearSelectionHandler}
            />
            {expensesContent}

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
