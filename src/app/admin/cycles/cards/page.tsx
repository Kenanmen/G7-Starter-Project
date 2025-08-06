const CycleCard = ({
    title,
    description,
    country,
    status,
  }: {
    title: string;
    description: string;
    country: string;
    status: "Active" | "Closed";
  }) => {
    const isClosed = status === "Closed";
  
    return (
      <div className="w-[288px] h-[168px] bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
        {/* Title + Close/Closed Button */}
        <div className="flex justify-between items-start">
          <h3 className="text-[#111827] text-[18px] font-semibold leading-[28px]">
            {title}
          </h3>
          <button
            className={`text-white text-sm px-3 py-1 rounded-md ${
              isClosed ? "bg-[#4F46E5]" : "bg-[#E57046]"
            }`}
          >
            {isClosed ? "Closed" : "Close"}
          </button>
        </div>
  
        {/* Description */}
        <p className="text-sm text-[#111827] leading-[24px] mt-1">{description}</p>
  
        {/* Footer */}
        <div className="flex justify-between text-sm pt-2">
          <span className="text-[#111827]">Country: {country}</span>
          <span className={status === "Active" ? "text-green-600" : "text-[#111827]"}>
            Status: {status}
          </span>
        </div>
      </div>
    );
  };
  export default CycleCard;