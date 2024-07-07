import { getUserWallet } from "@/Store/Wallet/Action";
import { addItemToWatchlist } from "@/Store/Watchlist/Action";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Watchlist = () => {
  const { watchlist } = useSelector((store) => store);
  const dispatch = useDispatch();
  const handlerRemoveToWatchlist = (value) => {
    dispatch(
      addItemToWatchlist({
        coinId: value,
        jwt: localStorage.getItem("jwt"),
      })
    );
    console.log(value);
  };
  useEffect(() => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  }, []);

  return (
    <div>
      <div className="p-5 lg:p-20">
        <h1 className="font-bold text-3xl pb-5"> Watchlist</h1>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="py-5 ">COIN</TableHead>
              <TableHead>SYMBOLE</TableHead>
              <TableHead>VOLUME</TableHead>
              <TableHead>MARKET CAP</TableHead>
              <TableHead>24h</TableHead>
              <TableHead>PRICE</TableHead>
              <TableHead className="text-right text-red-600">REMOVE</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {watchlist.items.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50">
                    <AvatarImage src={item.image} />
                  </Avatar>
                  <span>{item.name} </span>
                </TableCell>
                <TableCell>{item.symbol} </TableCell>
                <TableCell>{item.total_volume} </TableCell>
                <TableCell>{item.market_cap} </TableCell>
                <TableCell>{item.market_cap_change_percentage_24h} </TableCell>
                <TableCell>${item.current_price}</TableCell>
                <TableCell className="text-right">
                  <Button
                    onClick={() => handlerRemoveToWatchlist(item.id)}
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10"
                  >
                    <BookmarkFilledIcon className="w-6 h-6" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Watchlist;
