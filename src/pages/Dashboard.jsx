import { useState } from "react";
import Header from "../components/Header";
import Summary from "../components/Summary";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import Chart from "../components/Chart";

function Dashboard() {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    const deleteTransaction = (index) => {
        const updated = transactions.filter(
            (_, i) => i !== index
        );

        setTransactions(updated);
    };

    return (
        <div className="dashboard">
            <Header />

            <Summary transactions={transactions} />

            <TransactionForm addTransaction={addTransaction} />
            <Chart transactions={transactions} />
            <TransactionList
                transactions={transactions}
                deleteTransaction={deleteTransaction}
            />
        </div>
    );
}

export default Dashboard;