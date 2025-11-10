"use client"
import { logOutUser } from "@/service/auth/logOutUser";
import { Button } from "../ui/button";

export default function LogOutBtn() {
  const handleLogout = async () => {
    await logOutUser();
  };

  return (
    <Button variant={"destructive"} onClick={handleLogout} className="cursor-pointer">
      Logout
    </Button>
  );
}
