"use client";
import { logOutUser } from "@/service/auth/logOutUser";
import { Button } from "../ui/button";

export default function LogOutBtn ({ shad = true }: { shad?: boolean }) {
  const handleLogout = async () => {
    await logOutUser();
  };

  return (
    <>
      {shad ? (
        <Button
          variant={"destructive"}
          onClick={handleLogout}
          className="cursor-pointer"
        >
          Logout
        </Button>
      ) : (
        <button onClick={handleLogout} className="cursor-pointer">
          Logout
        </button>
      )}
    </>
  );
}
