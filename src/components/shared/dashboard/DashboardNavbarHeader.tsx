import { Search } from "lucide-react";
import { Input } from "../../ui/input";
import { Separator } from "../../ui/separator";
import { SidebarTrigger } from "../../ui/sidebar";
import DashboardUserDropDown from "./DashboardUserDropDown";

export default function DashboardNavbarHeader() {
  return (
    <header className="flex justify-between items-center gap-6 border-b px-4 lg:px-6">
      <div className="flex w-full items-center gap-2">
        <div className="flex h-16 shrink-0 items-center gap-2">
          <SidebarTrigger className="ml-2 cursor-pointer" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full">
          <div className="relative border rounded-2xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-9 w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex-1">
        <DashboardUserDropDown />
      </div>
    </header>
  );
}
