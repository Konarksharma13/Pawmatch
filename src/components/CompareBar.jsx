import { ArrowRight, Scale, X } from "lucide-react";
import { useState } from "react";

function CompareBar({ compare, removeFromCompare }) {
  const [isOpen, setIsOpen] = useState(false);

  if (compare.length === 0) return null;

  return (
    <>
      {/* Floating Compare Bar */}
      <div className="fixed bottom-5 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2">
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-xl">
          <div className="flex items-center gap-2">
            {compare.map((dog) => (
              <div key={dog.id} className="relative">
                <img
                  src={dog.image}
                  alt={dog.name}
                  loading="lazy"
                  decoding="async"
                  width="48"
                  height="48"
                  className="h-12 w-12 rounded-xl object-cover"
                />

                <button
                  onClick={() => removeFromCompare(dog.id)}
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white"
                  aria-label={`Remove ${dog.name}`}
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            disabled={compare.length < 2}
            className={`
              flex items-center gap-2 rounded-xl px-4 py-3
              text-sm font-semibold transition-colors duration-200
              ${
                compare.length >= 2
                  ? "bg-black text-white"
                  : "cursor-not-allowed bg-gray-100 text-gray-400"
              }
            `}
          >
            <Scale size={17} />

            {compare.length < 2
              ? "Select 1 more"
              : "Compare Dogs"}

            {compare.length >= 2 && (
              <ArrowRight size={16} />
            )}
          </button>
        </div>
      </div>

      {/* Comparison Modal */}
      {isOpen && compare.length === 2 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="mb-1 text-sm font-medium text-orange-500">
                  DOG VS DOG
                </p>

                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Which one is your dog?
                </h2>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 transition-colors hover:bg-gray-100"
                aria-label="Close comparison"
              >
                <X size={22} />
              </button>
            </div>

            {/* Dog Headers */}
            <div className="mb-8 grid grid-cols-[1fr_1.4fr_1.4fr]">
              <div />

              {compare.map((dog) => (
                <div
                  key={dog.id}
                  className="flex flex-col items-center px-3 text-center"
                >
                  <img
                    src={dog.image}
                    alt={dog.name}
                    width="144"
                    height="144"
                    className="mb-3 h-28 w-28 rounded-2xl object-cover shadow-md sm:h-36 sm:w-36"
                  />

                  <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                    {dog.name}
                  </h3>

                  <button
                    onClick={() => removeFromCompare(dog.id)}
                    className="mt-2 text-xs font-medium text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <div className="overflow-hidden rounded-2xl border border-gray-100">
              <CompareRow
                label="Personality"
                left={`${compare[0].personality}%`}
                right={`${compare[1].personality}%`}
              />

              <CompareRow
                label="Energy"
                left={compare[0].energy}
                right={compare[1].energy}
              />

              <CompareRow
                label="Size"
                left={compare[0].size}
                right={compare[1].size}
              />

              <CompareRow
                label="Best Environment"
                left={compare[0].environment}
                right={compare[1].environment}
              />

              <CompareRow
                label="Exercise"
                left={compare[0].exercise}
                right={compare[1].exercise}
              />

              <CompareRow
                label="Grooming"
                left={compare[0].grooming}
                right={compare[1].grooming}
              />

              <CompareRow
                label="Lifespan"
                left={compare[0].lifespan}
                right={compare[1].lifespan}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CompareRow({ label, left, right }) {
  return (
    <div className="grid grid-cols-[1fr_1.4fr_1.4fr] border-b border-gray-100 last:border-0">
      <div className="flex items-center bg-gray-50 p-3 text-xs font-bold text-gray-500 sm:p-4 sm:text-sm">
        {label}
      </div>

      <div className="flex items-center justify-center border-l border-gray-100 p-3 text-center text-xs font-medium text-gray-800 sm:p-4 sm:text-sm">
        {left}
      </div>

      <div className="flex items-center justify-center border-l border-gray-100 p-3 text-center text-xs font-medium text-gray-800 sm:p-4 sm:text-sm">
        {right}
      </div>
    </div>
  );
}

export default CompareBar;