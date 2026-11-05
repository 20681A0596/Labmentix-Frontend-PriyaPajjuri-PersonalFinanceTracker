function Summary({ transactions }) {
    const income = transactions
        .filter((t) => t.type === "INCOME")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const expense = transactions
        .filter((t) => t.type === "EXPENSE")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const balance = income - expense;

    return (
        <div className="summary">
            <div className="card income">
                <h3>Income</h3>
                <p>₹{income}</p>
            </div>

            <div className="card expense">
                <h3>Expense</h3>
                <p>₹{expense}</p>
            </div>

            <div className="card balance">
                <h3>Balance</h3>
                <p>₹{balance}</p>
            </div>
        </div>
    );
}

export default Summary;