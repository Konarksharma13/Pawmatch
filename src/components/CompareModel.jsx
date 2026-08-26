import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CompareModal = ({
  compareList,
  isOpen,
  onClose,
  onRemove,
}) => {
  if (!isOpen) return null;

  const rows = [
    ["Personality", "personality"],
    ["Energy", "energy"],
    ["Size", "size"],
    ["Environment", "environment"],
    ["Grooming", "grooming"],
    ["Exercise", "exercise"],
    ["Lifespan", "lifespan"],
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-4xl overflow-auto rounded-3xl bg-white p-6 shadow-2xl dark:bg-zinc-950"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Breed Battle 🐶
                </h2>

                <p className="mt-1 text-sm text-zinc-500">
                  Compare your selected dogs side by side.
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X size={22} />
              </button>
            </div>

            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: `140px repeat(${compareList.length}, minmax(180px, 1fr))`,
              }}
            >
              {/* Dog headers */}
              <div />

              {compareList.map((dog) => (
                <div
                  key={dog.id}
                  className="relative text-center"
                >
                  <button
                    onClick={() => onRemove(dog.id)}
                    className="absolute right-0 top-0 rounded-full bg-zinc-100 p-1 dark:bg-zinc-800"
                  >
                    <X size={14} />
                  </button>

                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="mx-auto h-24 w-24 rounded-2xl object-cover"
                  />

                  <h3 className="mt-3 font-bold">
                    {dog.name}
                  </h3>
                </div>
              ))}

              {/* Comparison rows */}
              {rows.map(([label, key]) => (
                <div key={key} className="contents">
                  <div className="flex items-center border-t py-4 text-sm font-semibold dark:border-zinc-800">
                    {label}
                  </div>

                  {compareList.map((dog) => (
                    <div
                      key={dog.id}
                      className="flex items-center justify-center border-t py-4 text-center text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-300"
                    >
                      {key === "personality"
                        ? `${dog[key]}%`
                        : dog[key]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompareModal;