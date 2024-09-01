import { useGetFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/facility.types";
import FacilityCard from "@/components/web/FacilityCard";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const FacilityPage = () => {
  const [timeOutValue, setTimeOutValue] = useState<NodeJS.Timeout>();
  const [searchValue, setSearchValue] = useState<string>("");
  const [getterThan, setGetterThan] = useState<string>("");
  const [lessThan, setLessThan] = useState<string>("");
  const [startIndex, setStartIndex] = useState(0);
  const rowsPerPage = 2;
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const { data: facilityData, isLoading } = useGetFacilitiesQuery({
    searchTerm: searchValue,
    getterThan,
    lessThan,
  });

  if (isLoading) return <p>Loading ...</p>;

  const sampleData = async (
    inputData: string,
    setValue: (data: string) => void
  ) => {
    if (timeOutValue) {
      clearTimeout(timeOutValue);
    }
    const timeValue = setTimeout(async () => {
      if (inputData) {
        setValue(inputData);
      } else {
        setValue("");
      }
    }, 500);

    setTimeOutValue(timeValue);
  };

  return (
    <section className="container py-11">
      <h2 className="text-[35px] md:text-[45px] font-medium leading-tight my-4 text-center">
        All Facilities
      </h2>
      <div className="flex justify-between items-end gap-5">
        <div className="max-w-[300px] w-[300px]">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Facility & Location"
              required
              onChange={(e) => sampleData(e.target.value, setSearchValue)}
            />
          </div>
        </div>
        <div>
          <p className="text-lg font-medium">Filter By Price</p>
          <div className="flex gap-4 mt-2">
            <Input
              type="text"
              value={getterThan}
              className="max-w-[100px]"
              placeholder="Min Value"
              onChange={(e) => setGetterThan(e.target.value)}
            />
            <Input
              type="text"
              value={lessThan}
              className="max-w-[100px]"
              placeholder="Max Value"
              onChange={(e) => setLessThan(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {facilityData?.data
          ?.slice(startIndex, endIndex)
          .map((facility: TFacility) => (
            <FacilityCard
              key={`facility-${facility._id}`}
              facility={facility}
            />
          ))}
      </div>

      <div className="mt-6">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                className={
                  startIndex === 0
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex - rowsPerPage);
                  setEndIndex(endIndex - rowsPerPage);
                }}
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                className={
                  endIndex === facilityData?.data?.length
                    ? "pointer-events-none opacity-50"
                    : undefined
                }
                onClick={() => {
                  setStartIndex(startIndex + rowsPerPage);
                  setEndIndex(endIndex + rowsPerPage);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default FacilityPage;
