export const RevenueCard = ({
  title,
  orderCount,
  amount,
}) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      {/* Title */}
      <div className="flex items-center text-gray-700 pb-4">
        {title} ?
      </div>

      {/* Amount and Orders */}
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold">
          ₹ {amount}
        </div>

   
          <div className="flex items-center gap-1 text-blue-600 underline cursor-pointer">
            <span>{orderCount} order(s)</span>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
      
      </div>
    </div>
  );
};