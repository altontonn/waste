import { useSkips } from "../contexts/SkipContext";
const SkipList = () => {
  const { skips, isLoading } = useSkips();
  if (isLoading) return <p>Loading...</p>;
  if (!skips.length) return <p>Not Available</p>;
  return (
    <div className="grid grid-cols-3 gap-3">
      {skips.map((skip) => (
        <div
          className="max-w-sm border-2 border-lightgray rounded-2xl overflow-hidden shadow-lg bg-darkgray p-8 hover:shadow-2xl transition-shadow duration-300"
          key={skip.id}
        >
          <img
            className="w-full h-48 object-cover rounded-md"
            src="4-yarder-skip.jpg"
            alt="Card Image"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2 text-white">
              {skip.postcode}
            </h2>
            <p className="text-white text-sm mb-4">
              This is a brief description of the content inside the card. It's
              clean, minimal, and responsive.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Action
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkipList;
