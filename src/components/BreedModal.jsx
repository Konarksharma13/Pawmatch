import { AnimatePresence, motion } from "framer-motion";

export default function BreedModal({ breed, close }) {
  return (
    <AnimatePresence>
      {breed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/60
            p-4
            backdrop-blur-sm
          "
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              max-h-[90vh]
              w-full max-w-2xl
              overflow-y-auto
              rounded-[2rem]
              bg-white
              shadow-2xl
            "
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={breed.image}
                alt={breed.name}
                className="h-full w-full object-cover"
              />

              <button
                onClick={close}
                className="
                  absolute right-4 top-4
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  bg-black/40
                  text-xl text-white
                  backdrop-blur-md
                  transition
                  hover:bg-black/60
                "
              >
                ×
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                <p className="text-sm font-medium text-white/70">
                  {breed.size} companion
                </p>

                <h2 className="text-4xl font-black text-white">
                  {breed.name}
                </h2>
              </div>
            </div>

            <div className="space-y-7 p-6 md:p-8">

              {/* Intro */}
              <div>
                <p className="leading-relaxed text-gray-600">
                  {breed.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {breed.traits.map((trait) => (
                    <span
                      key={trait}
                      className="
                        rounded-full
                        bg-orange-50
                        px-3 py-1.5
                        text-sm font-medium
                        text-orange-700
                      "
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* Personality */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-bold">
                    Personality
                  </h3>

                  <span className="font-bold text-orange-500">
                    {breed.personality}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${breed.personality}%`,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-orange-400
                    "
                  />
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                <Detail
                  icon="🏠"
                  label="Best environment"
                  value={breed.environment}
                />

                <Detail
                  icon="🎾"
                  label="Exercise"
                  value={breed.exercise}
                />

                <Detail
                  icon="✂️"
                  label="Grooming"
                  value={breed.grooming}
                />

                <Detail
                  icon="❤️"
                  label="Lifespan"
                  value={breed.lifespan}
                />

              </div>

              {/* Good for */}
              <div className="rounded-2xl bg-[#f7f5f0] p-5">
                <p className="mb-1 text-sm font-medium text-gray-500">
                  Might be a good fit for
                </p>

                <p className="font-semibold text-gray-900">
                  {breed.goodFor}
                </p>
              </div>

              <button
                onClick={close}
                className="
                  w-full rounded-xl
                  bg-[#171717]
                  py-3.5
                  font-semibold
                  text-white
                  transition
                  hover:bg-orange-500
                "
              >
                Back to the dogs 🐾
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Detail({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-gray-100 p-4">
      <div className="mb-2 text-xl">
        {icon}
      </div>

      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-gray-800">
        {value}
      </p>
    </div>
  );
}