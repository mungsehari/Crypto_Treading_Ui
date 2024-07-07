import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VerifiedIcon } from "lucide-react";
import React from "react";
import AccountVerificationForm from "./AccountVerificationForm";
import { useSelector } from "react-redux";

const Profile = () => {
  const { auth } = useSelector((store) => store);

  const handleEnabledTwoStepVerification = () => {
    console.log("Profile enabled two step verification");
  };
  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className="pb-9">
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem] ">Email :</p>
                  <p className="text-gray-500">{auth.user?.email} </p>
                </div>

                <div className="flex">
                  <p className="w-[9rem] ">Full Name :</p>
                  <p className="text-gray-500">{auth.user?.fullName} </p>
                </div>

                <div className="flex">
                  <p className="w-[9rem] ">Data of Birth :</p>
                  <p className="text-gray-500">04/12-2002</p>
                </div>

                <div className="flex">
                  <p className="w-[9rem] ">Nationality :</p>
                  <p className="text-gray-500">Indian</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem] ">Address :</p>
                  <p className="text-gray-500">turkpimpari</p>
                </div>

                <div className="flex">
                  <p className="w-[9rem] ">City :</p>
                  <p className="text-gray-500">Barshi </p>
                </div>

                <div className="flex">
                  <p className="w-[9rem] ">PostCode :</p>
                  <p className="text-gray-500">413401</p>
                </div>

                <div className="flex">
                  <p className="w-[9rem] ">Country :</p>
                  <p className="text-gray-500">Indian</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>2 Step Verification</CardTitle>
                {true ? (
                  <Badge className={"space-x-2 text-white bg-green-600"}>
                    <VerifiedIcon />
                    <span> Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500">Disalbed</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button>Enabled Two Step Verification</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>verified your account</DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm
                      handleSubmit={handleEnabledTwoStepVerification}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
