import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Bar,
    Legend
} from "recharts";

function Chart({ transactions }) {
    const income = transactions
        .filter((t) => t.type === "INCOME")
        .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
        .filter((t) => t.type === "EXPENSE")
        .reduce((sum, t) => sum + t.amount, 0);

    const pieData = [
        {
            name: "Income",
            value: income
        },
        {
            name: "Expense",
            value: expense
        }
    ];

    const barData = [
        {
            name: "Finance",
            Income: income,
            Expense: expense
        }
    ];

    return (
        <div
            style={{
                display: "flex",
                gap: "50px",
                justifyContent: "center",
                marginTop: "30px"
            }}
        >
            <div>
                <h3>Pie Chart</h3>

                <PieChart
                    width={300}
                    height={300}
                >
                    <Pie
                        data={pieData}
                        dataKey="value"
                        outerRadius={100}
                    >
                        <Cell fill="green" />
                        <Cell fill="red" />
                    </Pie>

                    <Tooltip />
                </PieChart>
            </div>

            <div>
                <h3>Bar Chart</h3>

                <BarChart
                    width={400}
                    height={300}
                    data={barData}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                        dataKey="Income"
                        fill="green"
                    />

                    <Bar
                        dataKey="Expense"
                        fill="red"
                    />
                </BarChart>
            </div>
        </div>
    );
}

export default Chart;