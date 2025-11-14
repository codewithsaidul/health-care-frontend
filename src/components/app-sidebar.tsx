"use client";

import {
  IconDashboard,
  IconHelp,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { UserInfo } from "@/types/user.types";
import Link from "next/link";

interface AppSidebarProps {
  // props: React.ComponentProps<typeof Sidebar>;
  userInfo: UserInfo | null;
}

export function AppSidebar({ userInfo }: AppSidebarProps) {
  const navMainItems = [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    // {
    //   title: "Lifecycle",
    //   url: "#",
    //   icon: IconListDetails,
    // },
    // {
    //   title: "Analytics",
    //   url: "#",
    //   icon: IconChartBar,
    // },
    // {
    //   title: "Add Doctor",
    //   url: "/dashboard/add-doctor",
    //   icon: IconUsers,
    // },
  ];

  if (userInfo?.role === "ADMIN") {
    navMainItems.push(
      {
        title: "Manage Doctors",
        url: "/admin/manage-doctors",
        icon: IconSettings,
      },
      {
        title: "Manage Patients",
        url: "/admin/manage-patients",
        icon: IconUsers,
      }
    );
  }

  const data = {
    navMain: navMainItems,
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: IconSettings,
      },
      {
        title: "Get Help",
        url: "#",
        icon: IconHelp,
      },
      {
        title: "Search",
        url: "#",
        icon: IconSearch,
      },
    ],
  };

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 mt-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-2xl">
              H
            </span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">
            HealthCare
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="mt-5 border-t pt-5">
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={userInfo} />
      </SidebarFooter> */}
    </Sidebar>
  );
}
