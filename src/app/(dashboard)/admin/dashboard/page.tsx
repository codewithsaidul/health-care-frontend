import SpecialitiesManagementHeader from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesManagementHeader";
import SpecialitiesTable from "@/components/modules/Admin/SpecialitiesManagement/SpecialitiesTable";
import RefreshButton from "@/components/shared/dashboard/RefreshButton";
import { TableSkeleton } from "@/components/shared/dashboard/TableSkeleton";
import { getSpecialities } from "@/service/admin/specialitiesManagement";
import { Suspense } from "react";



export default async function AdminDashboardPage () {
  const result = await getSpecialities();
  return (
    <div className="space-y-6">
      <SpecialitiesManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <SpecialitiesTable specialities={result.data} />
      </Suspense>
    </div>
  );
};
