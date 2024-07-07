import { withdrawalRequest } from "@/Store/Withdrawal/Action";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const WithdrawalForm = () => {
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector((store) => store);
  const [amount, setAmount] = useState("");

  const handlerChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(withdrawalRequest({ amount, jwt: localStorage.getItem("jwt") }));
    console.log(amount);
  };
  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available balance</p>
        <p>$90909</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter Withdrawal amount</h1>
        <div className="flex items-center justify-center">
          <Input
            onChange={handlerChange}
            value={amount}
            className="withdrawalInput py-7 border-none outline-none focus:outline-none px-0 text-2xl text-center"
            placeholder="$99900"
            type="number"
          />
        </div>
      </div>
      <div className="">
        <p className="pb-2">Transfer to</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img
            className="h-8 w-8"
            src="https://p7.hiclipart.com/preview/1004/113/181/online-banking-computer-icons-finance-bank.jpg"
            alt=""
          />
          <div>
            <p className="text-xl font-bold  ">
              {withdrawal.paymentDetails?.bankName}
            </p>
            <p className="text-xs">
              {withdrawal.paymentDetails?.accountNumber}{" "}
            </p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className="w-full py-7 text-xl">
          {" "}
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
