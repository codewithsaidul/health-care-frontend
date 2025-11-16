import { Column } from "@/components/shared/dashboard/ManagementTable";
import { ISpecialty } from "@/types/specialities.types";
import Image from "next/image";

export const specialitiesColumns: Column<ISpecialty>[] = [
  {
    header: "Icon",
    accessor: (speciality) => (
      <Image
        src={speciality.icon}
        alt={speciality.title}
        width={40}
        height={40}
        className="rounded-full"
      />
    ),
  },
  {
    header: "Title",
    accessor: (speciality) => speciality.title,
  },
];
