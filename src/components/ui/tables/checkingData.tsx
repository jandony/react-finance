const checkingTrans = {
    tableHead: ["date", "description", "type", "amount", "balance"],
    tableData: [
        {
            id: 1,
            date: "Jan 1, 2024",
            description: "Online payment",
            type: "deposit",
            amount: 2000.0,
        },
        {
            id: 2,
            date: "Jan 8, 2024",
            description: "Payment to Chase card ending in 1234 01/12",
            type: "debit",
            amount: -100.0,
        },
        {
            id: 3,
            date: "Jan 8, 2024",
            description: "Payment to Chase card ending in 1234 01/12",
            type: "debit",
            amount: -100.0,
        },
        {
            id: 4,
            date: "Jan 15, 2024",
            description: "Payment to Chase card ending in 1234 01/12",
            type: "deposit",
            amount: -100.0,
        },
        {
            id: 5,
            date: "Feb 10, 2024",
            description: "Payment to Chase card ending in 1234 01/12",
            type: "debit",
            amount: -100.0,
        },
        {
            id: 6,
            date: "Feb 12, 2024",
            description: "Zelle payment from YOUR AWESOME TODAY",
            type: "deposit",
            amount: 500.0,
        },
        {
            id: 7,
            date: "pending",
            description: "Payment to Chase card ending in 1234 01/12",
            type: "debit",
            amount: -100.0,
        },
    ],
};

export { checkingTrans }