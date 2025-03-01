import { useState, useEffect } from "react";
import { BASE_URL } from "../endpoint";



const GameScreen = () => {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://${BASE_URL}/destination/random`)
      .then((res) => res.json())
      .then((data) => {
        setDestination(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Guess the Destination</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img
            src={destination.image_url}
            alt="Destination"
            className="w-96 h-64 object-cover rounded-lg shadow-lg"
          />
          <p className="mt-2 text-lg text-gray-700">
            Hint: {destination.clues.join(" ")}
          </p>
        </>
      )}

      <button
        onClick={() => window.location.reload()} // Temporary refresh for new destination
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Next Destination
      </button>
    </div>
  );
};

export default GameScreen;
