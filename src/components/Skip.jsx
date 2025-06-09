import { useSkips } from "../contexts/SkipContext";
const SkipList = () => {
  const { skips, isLoading } = useSkips();
  if (isLoading) return <p>Loading...</p>;
  if (!skips.length) return <p>Not Available</p>;
  return (
    <div className="grid grid-cols-3 gap-3">
      {skips.map((skip) => (
        <div
          className="max-w-sm border-2 border-lightgray rounded-2xl overflow-hidden shadow-lg bg-darkgray p-8 hover:shadow-2xl transition-shadow duration-300 hover:border-brandblue"
          key={skip.id}
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
              selected
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkipList;
