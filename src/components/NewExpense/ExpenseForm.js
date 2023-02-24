import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });// Optional!

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value); // Optional!
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // }); not a good practice because it could take a diferent state an not the exact previous one.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value }; //best practice if you use one state
        // });
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value); //Optional!
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // }); not a good practice because it could take a diferent state an not the exact previous one.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: e.target.value };
        // });
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value); //Optional!
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // }); not a good practice because it could take a diferent state an not the exact previous one.
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: e.target.value };
        // });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate.replace(/-/g, "/")), //https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
        };
        onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title </label>
                    <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        required
                        type="number"
                        min="0.01"
                        step="0.01"
                        id="amount"
                        name="amount"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        required
                        type="date"
                        min="2020-01-01"
                        max="2023-12-31"
                        id="date"
                        name="date"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
