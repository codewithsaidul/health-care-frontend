"use client";

import {
  IconDashboard,
  IconHelp,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { checkAuthStatus } from "@/utils/auth";
import Link from "next/link";

const { user } = await checkAuthStatus();
console.log("🚀 ~ user:", user);

const { role } = user || { role: "guest" };

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

if (role === "ADMIN") {
  navMainItems.push(
    {
      title: "Manage Doctors",
      url: "/dashboard/admin/manage-doctors",
      icon: IconSettings,
    },
    {
      title: "Manage Patients",
      url: "/dashboard/admin/manage-patients",
      icon: IconUsers,
    }
  );
}

const data = {
  user: {
    name: user?.name,
    email: user?.email,
    avatar: user?.imageUrl,
  },
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
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
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
