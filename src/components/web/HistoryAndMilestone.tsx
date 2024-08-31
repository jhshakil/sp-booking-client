const OurMissionData = [
  {
    name: "Service on locally wise",
    date: "January 2, 2021",
    details:
      "Get started with some facility in locally and started our journey",
  },
  {
    name: "Service on country wise",
    date: "January 2, 2023",
    details: "Now working on whole country and add more facility and service",
  },
  {
    name: "Service on worldwide",
    date: "january 2, 2025",
    details: "Want to work worldwide and want to add more facility and service",
  },
];

const HistoryAndMilestone = () => {
  return (
    <div className="container py-11">
      <div className="max-w-[570px] mx-auto text-center">
        <h2 className="text-[40px] font-medium">Our History & Mission</h2>
        <p className="mt-6 font-light text-gray-500 lg:mb-16 sm:text-xl mb-9">
          Our mission is to empower individuals and communities by providing an
          easy-to-use platform that connects people with sports facilities,
          encourages active lifestyles
        </p>
      </div>
      <ol className="items-center sm:flex mt-11">
        {OurMissionData?.map((item, i) => (
          <li key={`mission_item-${i}`} className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {item.details}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HistoryAndMilestone;
