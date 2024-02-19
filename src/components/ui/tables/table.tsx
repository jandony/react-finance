// Imports
import clsx from "clsx";
import { useState, useEffect } from "react";
import { checkingTrans } from "./checkingData";
import { savingsTrans } from "./savingsData";
import { creditCardTrans } from "./creditCardData";

export default function Table({ currentTab, updateRunningTotal }) {
    const [currentData, setData] = useState();
    // const [lastRunningBalance, setLastRunningBalance] = useState();

    useEffect(() => {
        if (currentTab === "checking") {
            setData(checkingTrans);
        } else if (currentTab === "savings") {
            setData(savingsTrans);
        } else {
            setData(creditCardTrans);
        }
    });

    useEffect(() => {
        if (currentData) {
            let runningBalance = 0;

            currentData.tableData.forEach((data, index) => {
                if (index === 0) {
                    // For the first data, set runningBalance to data.amount
                    data["runningBalance"] = data.amount;
                } else {
                    let prevBalance = currentData.tableData[index-1].runningBalance;
                    // For subsequent data, add data.amount to the previous runningBalance
                    runningBalance = (parseInt(prevBalance) + parseInt(data.amount));
                    data["runningBalance"] = runningBalance;
                    updateRunningTotal(runningBalance);
                }
            });
        }
    }, [currentData]);

    return (
        <table className="w-full fade-in">
            <thead className="text-left border-y border-black">
                <tr>
                    {currentData &&
                        currentData.tableHead.map((item) => (
                            <th key={item} className={clsx("capitalize p-2 text-gray-700", { "text-right": item === "amount" || item === "balance" })}>
                                {item}
                            </th>
                        ))}
                </tr>
            </thead>
            <tbody>
                {currentData &&
                    currentData.tableData.map((data, index) => (
                        <tr key={data.id} className={clsx("text-gray-600", index % 2 === 0 ? "bg-gray-100" : "bg-gray-200")}>
                            <td className={clsx("p-2 w-48", { italic: data.date === "pending" })}>{data.date}</td>
                            <td className="p-2 w-auto">{`${data.description}`}</td>
                            <td className="p-2 w-32">{data.type}</td>
                            <td className={clsx("p-2 w-32 text-right font-semibold", { "text-green-600": Number(data.amount) >= 0 })}>{Number(data.amount).toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
                            <td className="p-2 w-32 text-right">{data.runningBalance ? Number(data.runningBalance).toLocaleString("en-US", { style: "currency", currency: "USD" }) : "loading..."}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}
