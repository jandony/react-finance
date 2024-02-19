"use client";

// Imports
import clsx from "clsx";
import { useState } from "react";
import TransactionsModal from "../modals/transactions-modal";

export default function Tabs({ data, modalState, runningTotal, setModalState, toggleModal, routingNumber, checkingNumber, savingsNumber }) {
    const [availableCredit, setAvailableCredit] = useState(120000);
    const [currentTab, setTab] = useState("checking");

    const tabs = ["checking", "savings", "credit card"];

    const openTab = (tab) => {
        setTab(tab);
    };

    return (
        <>
            <div className="flex justify-end gap-2">
                {tabs &&
                    tabs.map((tab) => (
                        <button key={tab} className={clsx("tablinks py-2 px-4 text-green-600 border-2 border-green-600 rounded-lg hover:bg-green-700 hover:border-green-700 hover:text-white", { "text-white bg-green-600": currentTab === tab })} onClick={() => openTab(tab)}>
                            {tab}
                        </button>
                    ))}
                <button onClick={toggleModal} className="tablinks py-2 px-4 text-green-600 rounded-lg hover:bg-gray-100">
                    Pay & Transfer
                </button>
            </div>

            <TransactionsModal modalState={modalState} setModalState={setModalState} toggleModal={toggleModal} checkingNumber={checkingNumber} savingsNumber={savingsNumber} />

            <div className={clsx("flex justify-between flex-wrap px-4 py-4", { hidden: currentTab !== "checking" })}>
                <div className="w-1/2 py-6">
                    <h3 className="text-l text-gray-500">Total Checking:</h3>
                    <p className="text-4xl">{Number(runningTotal).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                </div>
                <div className="w-1/2 py-6">
                    <h3 className="text-l text-gray-500">Account Info</h3>
                    <p>
                        <span className="font-semibold">Account Number:</span> {checkingNumber}
                    </p>
                    <p>
                        <span className="font-semibold">Routing Number:</span> {routingNumber}
                    </p>
                </div>
                {data({ currentTab })}
            </div>

            <div className={clsx("flex justify-between flex-wrap px-4 py-4", { hidden: currentTab !== "savings" })}>
                <div className="w-1/2 py-6">
                    <h3 className="text-l text-gray-500">Total Savings:</h3>
                    <p className="text-4xl">{Number(runningTotal).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                </div>
                <div className="w-1/2 py-6">
                    <h3 className="text-l text-gray-500">Account Info</h3>
                    <p>
                        <span className="font-semibold">Account Number:</span> {savingsNumber}
                    </p>
                    <p>
                        <span className="font-semibold">Routing Number:</span> {routingNumber}
                    </p>
                </div>
                {data({ currentTab })}
            </div>

            <div className={clsx("flex justify-between flex-wrap px-4 py-4", { hidden: currentTab !== "credit card" })}>
                <div className="w-1/2 py-6">
                    <h3 className="text-l text-gray-500">Current Balance:</h3>
                    <p className="text-4xl">{Number(runningTotal).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                </div>
                <div className="w-1/2 py-6">
                    <h3 className="text-l text-gray-500">Available Credit:</h3>
                    <p>{Number(availableCredit).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                </div>
                {data({ currentTab })}
            </div>
        </>
    );
}
