"use client";

// Imports
import clsx from "clsx";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function TransactionsModal({ modalState, setModalState, toggleModal, checkingNumber, savingsNumber }) {
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [transferFrom, setTransferFrom] = useState("");
    const [transferTo, setTransferTo] = useState("");

    // Convert checkings & savings numbers
    let checkingCopy = checkingNumber.toString();
    let lastFourChecking = checkingCopy.slice(-4);
    let savingsCopy = savingsNumber.toString();
    let lastFourSavings = savingsCopy.slice(-4);

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className={clsx("flex items-center justify-center fixed top-0 left-0 w-screen h-screen z-10", { hidden: modalState === false })}>
                <div className="h-fit min-h-96 max-h-fit w-full bg-white max-w-screen-lg rounded-lg shadow-md p-8 z-50 block">
                    {/* Form */}
                    <div id="modal-header" className="flex items-center justify-between border-b pb-2">
                        <h2 className="font-bold text-xl">Money Transfer Form</h2>
                        <button onClick={toggleModal} className="bg-gray-200 hover:bg-gray-300 hover:shadow-md p-2 rounded-full"><XMarkIcon className="h-5 w-5" /></button>
                    </div>
                    <form onSubmit={handleSubmit} className="flex justify-between flex-wrap mt-4 py-4 px-2 gap-y-4">
                        <label className="flex flex-column flex-wrap w-1/3">
                            <span className="text-gray-500 text-sm w-full px-2">Transfer from:</span>
                            <select value={transferFrom} onChange={(e) => setTransferFrom(e.target.value)} required className="border rounded-lg p-2 m-2 w-full">
                                <option value="" disabled>Choose an account</option>
                                <option value="checking">Checking <span>{`(...${lastFourChecking})`}</span></option>
                                <option value="savings">Savings <span>{`(...${lastFourSavings})`}</span></option>
                            </select>
                        </label>
                        <label className="flex flex-column flex-wrap w-1/3">
                            <span className="text-gray-500 text-sm w-full px-2">Transfer to:</span>
                            <select value={transferTo} onChange={(e) => setTransferTo(e.target.value)} required className="border rounded-lg p-2 m-2 w-full">
                                <option value="" disabled>Choose an account</option>
                                <option value="checking">Checking <span>{`(...${lastFourChecking})`}</span></option>
                                <option value="savings">Savings <span>{`(...${lastFourSavings})`}</span></option>
                            </select>
                        </label>
                        <label className="flex flex-column flex-wrap align-center w-1/3">
                            <span className="text-gray-500 text-sm w-full px-2">Amount:</span>
                            <span className="flex items-center w-full">
                                <span className="text-lg ml-2">$</span>
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only digits and decimal point
                                        setAmount(value);
                                    }}
                                    required
                                    className="border rounded-lg p-2 m-2 flex-grow"
                                    placeholder="0.00"
                                />
                            </span>
                        </label>

                        <label className="flex flex-column flex-wrap align-center w-1/3">
                            <span className="text-gray-500 text-sm w-full px-2">Transfer date:</span>
                            <input type="date" className="border rounded-lg p-2 m-2 flex-grow"></input>
                        </label>
                        <label className="flex flex-column flex-wrap align-center w-2/3">
                            <span className="text-gray-500 text-sm w-full px-2">Note (optional):</span>
                            <span className="flex items-center w-full">
                                <input
                                    type="text"
                                    value={note}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setNote(value);
                                    }}
                                    required
                                    className="border rounded-lg p-2 m-2 flex-grow"
                                    placeholder="What's this for?"
                                />
                            </span>
                        </label>

                        <button type="submit" className="bg-green-700 text-white hover:bg-green-800 py-3 px-6 rounded-lg mt-6 ml-auto">
                            Transfer
                        </button>
                    </form>
                </div>
                <button className="bg-black/75 fixed top-0 left-0 w-screen h-screen z-10" onClick={toggleModal}></button>
            </div>
        </>
    );
}
