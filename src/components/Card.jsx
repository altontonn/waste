const Card = () => {
  return (
    <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        class="w-full h-48 object-cover"
        src="4-yarder-skip.jpg"
        alt="Card Image"
      />
      <div class="p-5">
        <h2 class="text-xl font-semibold mb-2 text-gray-800">Card Title</h2>
        <p class="text-gray-600 text-sm mb-4">
          This is a brief description of the content inside the card. It's
          clean, minimal, and responsive.
        </p>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Action
        </button>
      </div>
    </div>
  );
};

export default Card;
