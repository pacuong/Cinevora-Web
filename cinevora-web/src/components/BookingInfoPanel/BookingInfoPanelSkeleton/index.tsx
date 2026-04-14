const BookingInfoPanelSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex justify-center">
        <div className="w-[195px] h-[280px] rounded bg-gray-300" />
      </div>

      <div>
        <ul className="mt-5">
          <li className="mb-3">
            <div className="h-5 w-[220px] rounded bg-gray-300" />
          </li>

          <div className="space-y-3">
            <li>
              <div className="h-5 w-[170px] rounded bg-gray-300" />
            </li>
            <li>
              <div className="h-5 w-[160px] rounded bg-gray-300" />
            </li>
            <li>
              <div className="h-5 w-[210px] rounded bg-gray-300" />
            </li>
            <li>
              <div className="h-5 w-[120px] rounded bg-gray-300" />
            </li>
            <li>
              <div className="h-5 w-[190px] rounded bg-gray-300" />
            </li>
          </div>
        </ul>

        <div className="grid grid-cols-2 gap-y-4 gap-x-10 mt-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={
                  index === 5
                    ? "w-11 h-6 md:w-[56px] md:h-[25px] rounded-sm bg-gray-300"
                    : "w-6 h-6 md:w-[25px] md:h-[25px] rounded-sm bg-gray-300"
                }
              />
              <div className="h-4 w-[90px] rounded bg-gray-300" />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center">
          <div className="w-5 h-5 rounded-full bg-gray-300" />
          <div className="ml-1 h-5 w-[70px] rounded bg-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default BookingInfoPanelSkeleton;