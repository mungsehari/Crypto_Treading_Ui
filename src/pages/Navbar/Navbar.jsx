import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { auth } = useSelector((store) => store);
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-11 w-11"
            >
              <DragHandleHorizontalIcon className="h-7 w-7" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-72 border-r-0 flex flex-col justify-center "
            side="left"
          >
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-1 ">
                  <Avatar>
                    <AvatarImage src="https://images.pexels.com/photos/14891545/pexels-photo-14891545.jpeg?auto=compress&cs=tinysrgb&w=800" />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Hari</span>
                    <span>Tread</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">Hari Treading</p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>
            {auth.user?.fullName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
