function TransactionList({
                             transactions,
                             deleteTransaction,
                         }) {
    return (
        <div className="transaction-list">
            <h2>Transactions</h2>

            {transactions.length === 0 ? (
                <p>No transactions added yet.</p>
            ) : (
                transactions.map((transaction, index) => (
                    <div
                        key={index}
                        className="transaction-item"
                    >
                        <div>
                            <strong>
                                {transaction.title}
                            </strong>
                        </div>

                        <div>
                            ₹{transaction.amount}
                        </div>

                        <div>
                            {transaction.type}
                        </div>

                        <button
                            onClick={() =>
                                deleteTransaction(index)
                            }
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default TransactionList;