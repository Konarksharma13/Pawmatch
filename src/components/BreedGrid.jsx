import BreedCard from "./BreedCard";

function BreedGrid({
  breeds,
  onSelect,
  favorites,
  toggleFavorite,
  compare,
  toggleCompare,
}) {
  if (breeds.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl font-semibold text-gray-700">
          No dogs found 🐶
        </p>

        <p className="mt-2 text-gray-500">
          Try searching for another breed.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {breeds.map((breed) => {
        const isCompared = compare.some(
          (dog) => dog.id === breed.id
        );

        return (
          <BreedCard
            key={breed.id}
            breed={breed}
            onSelect={onSelect}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            isCompared={isCompared}
            toggleCompare={toggleCompare}
          />
        );
      })}
    </div>
  );
}

export default BreedGrid;