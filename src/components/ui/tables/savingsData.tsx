const savingsTrans = {
    tableHead: ["date", "description", "type", "amount", "balance"],
    tableData: [
        {
            id: 8,
            date: "Mar 5, 2024",
            description: "Online purchase",
            type: "deposit",
            amount: 5000.0,
        },
        {
            id: 9,
            date: "Mar 10, 2024",
            description: "Deposit from employer",
            type: "debit",
            amount: -200.0,
        },
        {
            id: 10,
            date: "Mar 15, 2024",
            description: "Utility bill payment",
            type: "debit",
            amount: -80.0,
        },
        {
            id: 11,
            date: "Apr 1, 2024",
            description: "Rent payment",
            type: "debit",
            amount: -1200.0,
        },
        {
            id: 12,
            date: "Apr 5, 2024",
            description: "Gift from a friend",
            type: "deposit",
            amount: 50.0,
        },
        {
            id: 13,
            date: "Apr 10, 2024",
            description: "Grocery shopping",
            type: "debit",
            amount: -75.0,
        },
        {
            id: 14,
            date: "pending",
            description: "Credit card payment",
            type: "deposit",
            amount: 150.0,
        },
    ],
};

export { savingsTrans };
