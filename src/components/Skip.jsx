import { useState } from "react";
import { useSkips } from "../contexts/SkipContext";
const SkipList = () => {
  const { skips, isLoading } = useSkips();
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  if (isLoading) return <p>Loading...</p>;
  if (!skips.length) return <p>Not Available</p>;
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
      <div className="my-8">
        <h1 className="text-3xl font-bold text-bold text-center text-white">
          Choose Your Skip Size
        </h1>
        <p className="text-gray-400 text-center text-lg">
          Select the skip size that best suits your needs
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {skips.map((skip) => {
          const isSelected = selectedSkipId === skip.id;
          return (
            <div
              key={skip.id}
              onClick={() => setSelectedSkipId(skip.id)}
              className={`rounded-2xl overflow-hidden shadow-lg bg-darkgray p-8 hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer ${
                isSelected
                  ? "border-2 border-brandblue"
                  : "border-2 border-lightgray hover:border-blue-600/25"
              }`}
            >
              <div className="relative w-full h-48">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src="4-yarder-skip.jpg"
                  alt="Card Image"
                />
                <span className="absolute top-2 right-2 bg-brandblue text-white text-sm font-semibold px-2 py-1 rounded-md shadow-md">
                  {skip.size} Yards
                </span>
                {!skip.allowed_on_road && (
                  <div className="absolute bottom-2 font-semibold left-2 text-yellow-600 bg-black text-xs px-2 py-1 rounded">
                    Not allowed on the road
                  </div>
                )}
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-white">
                  {skip.size} Yard Skip
                </h2>
                <p className="text-sm mb-4 text-gray-400">
                  {skip.hire_period_days} day hire period
                </p>
                <h2 className="text-[25px] font-bold text-brandblue">
                  £{skip.price_before_vat}
                </h2>
                <button className="w-full bg-brandblue mt-4 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Selected
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkipList;
