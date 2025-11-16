import DoctorsManagementHeader from "@/components/modules/Admin/DoctorsManagement/DoctorsManagementHeader";
import DoctorsTable from "@/components/modules/Admin/DoctorsManagement/DoctorsTable";
import RefreshButton from "@/components/shared/dashboard/RefreshButton";
import SearchFilter from "@/components/shared/dashboard/SearchFilter";
import SelectFilter from "@/components/shared/dashboard/SelectFilter";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/dashboard/TableSkeleton";
import { queryStringFormatter } from "@/utils/formatters";
import { getDoctors } from "@/service/admin/doctorManagement";
import { getSpecialities } from "@/service/admin/specialitiesManagement";
import { ISpecialty } from "@/types/specialities.types";
import { Suspense } from "react";

export default async function DoctorManagementPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj); // {searchTerm: "John", speciality: "Cardiology" => "?searchTerm=John&speciality=Cardiology"}
  const specialitiesResult = await getSpecialities();
  const doctorsResult = await getDoctors(queryString);

  return (
    <div className="space-y-6 w-full">
      <DoctorsManagementHeader specialities={specialitiesResult.data} />
      <div className="flex space-x-2">
        <SearchFilter paramName="searchTerm" placeholder="Search doctors..." />
        <SelectFilter
          paramName="speciality" // ?speciality="Cardiology"
          options={specialitiesResult.data.map((speciality: ISpecialty) => ({
            label: speciality.title,
            value: speciality.title,
          }))}
          placeholder="Filter by speciality"
        />
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={10} rows={10} />}>
        <DoctorsTable
          doctors={doctorsResult.data}
          specialities={specialitiesResult.data}
        />
        <TablePagination
          currentPage={doctorsResult.meta.page}
          totalPages={doctorsResult.meta.totalPages}
        />
      </Suspense>
    </div>
  );
}
