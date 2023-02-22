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

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={yearSelected}
                onYearSelection={yearSelectionHandler}
            />
            {items.filter(item => item.date.getFullYear() === +yearSelected).map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
