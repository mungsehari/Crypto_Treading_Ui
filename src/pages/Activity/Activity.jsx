import { getAllOrdersForUser } from "@/Store/Order/Action";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculatteProfite } from "@/utils/calculatteProfite";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Activity = () => {
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getAllOrdersForUser({ jwt: localStorage.getItem("jwt") }));
  }, []);
  return (
    <div>
      <div className="p-5 lg:p-20">
        <h1 className="font-bold text-3xl pb-5">Activity </h1>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="py-5 ">Date & Time</TableHead>
              <TableHead>Treading pair</TableHead>
              <TableHead>Buy Price</TableHead>
              <TableHead> Selling Price</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead>Profite/Loss</TableHead>
              <TableHead className="text-right ">VALUE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.orders.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  {" "}
                  <p> {item.timeStamp.toString()}</p>
                  <p className="text-gray-400">{} </p>
                </TableCell>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50">
                    <AvatarImage src={item.orderItem.coin.image} />
                  </Avatar>
                  <span>{item.orderItem.coin.name}</span>
                </TableCell>
                <TableCell>{item.orderItem.buyPrice} </TableCell>
                <TableCell>{item.orderItem.sellPrice}</TableCell>
                <TableCell>{item.orderType}</TableCell>
                <TableCell> {calculatteProfite(item)}</TableCell>
                <TableCell className="text-right">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Activity;
