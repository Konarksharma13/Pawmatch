import { useEffect, useMemo, useState } from "react";

import breeds from "./data/breeds";
import dogFacts from "./data/dogFacts";

import BreedGrid from "./components/BreedGrid";
import BreedModal from "./components/BreedModal";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CompareBar from "./components/CompareBar";
import DogFactToast from "./components/DogFactToast";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  const [selectedBreed, setSelectedBreed] = useState(null);
  const [search, setSearch] = useState("");
  const [energy, setEnergy] = useState("All");
  const [compare, setCompare] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [dogFact, setDogFact] = useState(null);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Reset visible dogs when search/filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [search, energy]);

  // Automatically close dog fact toast
  useEffect(() => {
    if (!dogFact) return;

    const timer = setTimeout(() => {
      setDogFact(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [dogFact]);

  // Show random breed
  const surpriseMe = () => {
    const randomBreed =
      breeds[Math.floor(Math.random() * breeds.length)];

    setSelectedBreed(randomBreed);
  };

  // Show random dog fact
  const showDogFact = () => {
    const randomIndex = Math.floor(
      Math.random() * dogFacts.length
    );

    setDogFact(dogFacts[randomIndex]);
  };

  // Add or remove dog from comparison
  const toggleCompare = (breed) => {
    setCompare((prev) => {
      const exists = prev.some(
        (item) => item.id === breed.id
      );

      // Remove if already selected
      if (exists) {
        return prev.filter(
          (item) => item.id !== breed.id
        );
      }

      // Maximum 2 dogs
      if (prev.length >= 2) {
        return prev;
      }

      return [...prev, breed];
    });
  };

  // Remove dog from compare bar
  const removeFromCompare = (id) => {
    setCompare((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Add or remove favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Filter breeds efficiently
  const filteredBreeds = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    return breeds.filter((breed) => {
      const matchesSearch = breed.name
        .toLowerCase()
        .includes(searchValue);

      const matchesEnergy =
        energy === "All" ||
        breed.energy === energy;

      return matchesSearch && matchesEnergy;
    });
  }, [search, energy]);

  // Only render visible breeds
  const visibleBreeds = filteredBreeds.slice(
    0,
    visibleCount
  );

  // Loading screen
  if (isLoading) {
    return (
      <LoadingScreen
        onFinish={() => setIsLoading(false)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-orange-50 px-4 py-8 sm:p-10">
      <section className="mx-auto max-w-6xl">
        <Hero />

        {/* Main Action Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={surpriseMe}
            className="
              rounded-full
              bg-black
              px-6
              py-3
              text-white
              transition-transform
              duration-200
              hover:scale-105
              active:scale-95
              cursor-pointer
            "
          >
            🎲 Surprise Me
          </button>

          <button
            onClick={showDogFact}
            className="
              rounded-full
              border
              border-black
              bg-white
              px-6
              py-3
              font-medium
              text-black
              transition-colors
              duration-200
              hover:bg-black
              hover:text-white
              cursor-pointer
            "
          >
            🐾 Dog Fact
          </button>
        </div>

        {/* Search and Filter */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          energy={energy}
          setEnergy={setEnergy}
        />

        {/* Breed Cards */}
        {filteredBreeds.length > 0 ? (
          <BreedGrid
            breeds={visibleBreeds}
            onSelect={setSelectedBreed}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            compare={compare}
            toggleCompare={toggleCompare}
          />
        ) : (
          <div className="py-16 text-center">
            <p className="text-2xl font-bold text-gray-800">
              No dogs found 🐶
            </p>

            <p className="mt-2 text-gray-500">
              Try another breed name or energy level.
            </p>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filteredBreeds.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + 12)
              }
              className="
                rounded-full
                bg-black
                px-7
                py-3
                font-semibold
                text-white
                transition-transform
                duration-200
                hover:scale-105
                active:scale-95
                cursor-pointer
              "
            >
              Load More Dogs 🐾
            </button>
          </div>
        )}
      </section>

      {/* Breed Details Modal */}
      <BreedModal
        breed={selectedBreed}
        close={() => setSelectedBreed(null)}
      />

      {/* Compare Dogs */}
      <CompareBar
        compare={compare}
        removeFromCompare={removeFromCompare}
      />

      {/* Random Dog Facts */}
      <DogFactToast
        fact={dogFact}
        onClose={() => setDogFact(null)}
      />

      <Footer />
    </main>
  );
}

export default App;