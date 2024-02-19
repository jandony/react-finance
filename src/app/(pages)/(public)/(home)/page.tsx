"use client";

import Table from "@/components/ui/tables/table";
import Tabs from "@/components/ui/tabs/tabs";
import { useState } from "react";

const Home = () => {
    const routingNumber = 1112131415;
    const checkingNumber = 1234567890;
    const savingsNumber = 7777777777;
    const [modalState, setModalState] = useState(false);
    const toggleModal = () => {
        setModalState(modalState ? false : true);
    }
    const [runningTotal, setRunningTotal] = useState(0);
    const updateRunningTotal = (input) => {
        setRunningTotal(input);
    }

    return (
        <main className="flex flex-col justify-between max-w-screen-xl mx-auto py-6">
            <h1 className="text-2xl font-bold fade-in">Hello Beautiful!</h1>

            <div className="my-4 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-green-700 text-xl p-4">Bank accounts</h2>
                <hr />
                <div className="p-4">
                    <Tabs routingNumber={routingNumber} checkingNumber={checkingNumber} savingsNumber={savingsNumber} modalState={modalState} setModalState={setModalState} toggleModal={toggleModal} runningTotal={runningTotal} data={(tabProps) => <Table {...tabProps} updateRunningTotal={updateRunningTotal} />} />
                </div>
            </div>

            <div className="my-4 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-green-700 text-xl p-4">Credit cards</h2>
                <hr />
                <div className="p-4">
                    <p>Some information here...</p>
                </div>
            </div>

            <div className="my-4 p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-green-700 text-xl p-4">Credit overview</h2>
                <hr />
                <div className="p-4">
                    <p>Some information here...</p>
                </div>
            </div>
        </main>
    );
};

export default Home;
