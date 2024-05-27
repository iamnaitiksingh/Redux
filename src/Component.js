import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { ActionCreators } from "./state/action/cont.js";
// import { bindActionCreators } from "redux";
 import {withdrawMoney, depositmoney } from "./state/action/index"


const Component = () => {
  const amount = useSelector((state) => state);

  const dispatch = useDispatch();


  // const action = bindActionCreators(ActionCreators, dispatch);
  return (
    <div>
      <div className=" p-4 flex  flex-col justify-center items-center bg-slate-700 green-500 min-h-screen text-white text-4xl text-center font-bold">
        <div className="">Deposit\WithDraw Money</div>

        <div className="flex mt-16 justify-center items-center">
          <button
            type="button"
            className="text-white mx-5 bg-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Your Balance {"=>"} {amount}
          </button>
        </div>

        <div className="flex mt-16 justify-center items-center ">
          {/* <button
            onClick={() => {
              dispatch(ActionCreators.depositmoney(100));
            }}
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            +
          </button>

          <p className="mx-5">Update Balance</p>
          <button
            onClick={() => {
              dispatch(ActionCreators.withdrawMoney(100));
            }}
            type="button"
            className="text-white bg-red-700   hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <span className="h-[30px] w-[800px]">-</span>
          </button> */}
          <button
            onClick={() => {
              // action.depositmoney(100);
              dispatch(depositmoney(100))
            }}
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            +
          </button>

          <p className="mx-5">Update Balance</p>
          <button
            onClick={() => {
             dispatch(withdrawMoney(100))
            }}
            type="button"
            className="text-white bg-red-700   hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <span className="h-[30px] w-[800px]">-</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
