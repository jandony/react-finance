const creditCardTrans = {
    tableHead: ["date", "description", "type", "amount", "balance"],
    tableData: [
        {
            id: 15,
            date: "May 2, 2024",
            description: "Salary deposit",
            type: "deposit",
            amount: 3000.0,
        },
        {
            id: 16,
            date: "May 10, 2024",
            description: "Amazon purchase",
            type: "debit",
            amount: -50.0,
        },
        {
            id: 17,
            date: "Jun 5, 2024",
            description: "Gas bill payment",
            type: "debit",
            amount: -40.0,
        },
        {
            id: 18,
            date: "Jun 15, 2024",
            description: "Bonus from work",
            type: "deposit",
            amount: 500.0,
        },
        {
            id: 19,
            date: "Jul 1, 2024",
            description: "Car loan payment",
            type: "debit",
            amount: -200.0,
        },
        {
            id: 20,
            date: "Jul 10, 2024",
            description: "E-commerce refund",
            type: "deposit",
            amount: 30.0,
        },
        {
            id: 21,
            date: "pending",
            description: "Medical expense",
            type: "debit",
            amount: -75.0,
        },
    ],
};

export { creditCardTrans };
