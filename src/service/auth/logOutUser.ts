import { redirect } from "next/navigation";
import { deleteCookie } from "./cookieHandle";



export const logOutUser = async () => {
    await deleteCookie("accessToken");
    await deleteCookie("refreshToken");

    redirect("/auth/login?loggedOut=true")
}