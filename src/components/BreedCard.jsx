import { Heart, Scale } from "lucide-react";

function BreedCard({
  breed,
  onSelect,
  favorites,
  toggleFavorite,
  isCompared,
  toggleCompare,
}) {
  const isFavorite = favorites.includes(breed.id);

  const handleCompare = (e) => {
    e.stopPropagation();
    toggleCompare(breed);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    toggleFavorite(breed.id);
  };

  return (
    <div
      onClick={() => onSelect(breed)}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 400px",
      }}
      className="
        cursor-pointer
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-sm
        transition-shadow
        duration-200
        hover:shadow-lg
      "
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={breed.image}
          alt={breed.name}
          loading="lazy"
          decoding="async"
          width="400"
          height="400"
          className="h-full w-full object-cover"
        />

        {/* Compare button */}
        <button
          onClick={handleCompare}
          className={`
            absolute
            left-3
            top-3
            flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-sm
            font-semibold
            shadow-sm
            transition-colors
            duration-200
            ${
              isCompared
                ? "bg-black text-white"
                : "bg-white text-gray-800"
            }
          `}
        >
          <Scale size={16} />

          {isCompared ? "Selected" : "Compare"}
        </button>

        {/* Favorite button */}
        <button
          onClick={handleFavorite}
          aria-label={
            isFavorite
              ? `Remove ${breed.name} from favorites`
              : `Add ${breed.name} to favorites`
          }
          className="
            absolute
            right-3
            top-3
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-sm
            transition-transform
            duration-200
            hover:scale-105
          "
        >
          <Heart
            size={20}
            className={
              isFavorite
                ? "fill-red-500 text-red-500"
                : "text-gray-700"
            }
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h2 className="text-xl font-bold text-gray-900">
            {breed.name}
          </h2>

          <span className="shrink-0 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            {breed.energy}
          </span>
        </div>

        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {breed.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {breed.traits?.slice(0, 3).map((trait) => (
            <span
              key={trait}
              className="
                rounded-full
                bg-gray-100
                px-3
                py-1
                text-xs
                font-medium
                text-gray-600
              "
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BreedCard;