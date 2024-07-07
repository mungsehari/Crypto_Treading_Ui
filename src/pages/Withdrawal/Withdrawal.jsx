import React, { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { getWithdrawalHistroy } from "@/Store/Withdrawal/Action";
const Withdrawal = () => {
  const dispatch = useDispatch();
  const { wallet, withdrawal } = useSelector((store) => store);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    dispatch(getWithdrawalHistroy({ jwt: localStorage.getItem("jwt") }));
  }, []);
  return (
    <div>
      <div className="p-5 lg:p-20">
        <h1 className="font-bold text-3xl pb-5">Withdrawal </h1>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="py-5 ">Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>

              <TableHead className="text-right ">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {withdrawal.history.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {" "}
                  <p>{item.data.toString()} </p>
                </TableCell>
                <TableCell>Bank</TableCell>

                <TableCell>${item.amount}</TableCell>
                <TableCell className="text-right">{item.status} </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Withdrawal;
