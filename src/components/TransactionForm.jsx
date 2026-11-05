import { useState } from "react";

function TransactionForm({ addTransaction }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("EXPENSE");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !amount) return;

        addTransaction({
            title,
            amount: Number(amount),
            type,
        });

        setTitle("");
        setAmount("");
        setType("EXPENSE");
    };

    return (
        <form
            className="transaction-form"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
            />

            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) =>
                    setAmount(e.target.value)
                }
            />

            <select
                value={type}
                onChange={(e) =>
                    setType(e.target.value)
                }
            >
                <option value="INCOME">Income</option>
                <option value="EXPENSE">Expense</option>
            </select>

            <button type="submit">
                Add Transaction
            </button>
        </form>
    );
}

export default TransactionForm;