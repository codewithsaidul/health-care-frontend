
import { getUserInfo } from "@/service/auth/getUserInfo";
import DashboardSidebarContent from "./DashboardSidebarContent";
import { UserInfo } from "@/types/user.types";
import { NavSection } from "@/types/dashboard.types";
import { getNavItemsByRole } from "@/utils/navItems.config";
import { getDefaultDashboardRoute } from "@/utils/auth";

const DashboardSidebar = async () => {
  const userInfo = (await getUserInfo()) as UserInfo;

  const navItems: NavSection[] = getNavItemsByRole(userInfo.role);
  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <DashboardSidebarContent
      userInfo={userInfo}
      navItems={navItems}
      dashboardHome={dashboardHome}
    />
  );
};

export default DashboardSidebar;