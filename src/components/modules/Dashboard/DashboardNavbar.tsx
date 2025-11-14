import { getUserInfo } from "@/service/auth/getUserInfo";
import DashboardNavbarContent from "./DashboardNavbarContent";
import { UserInfo } from "@/types/user.types";
import { getDefaultDashboardRoute } from "@/utils/auth";
import { getNavItemsByRole } from "@/utils/navItems.config";

const DashboardNavbar = async () => {
  const userInfo = (await getUserInfo()) as UserInfo;
  const navItems = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <DashboardNavbarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardNavbar;