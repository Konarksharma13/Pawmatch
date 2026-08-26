import { Lightbulb, X } from "lucide-react";

function DogFactToast({ fact, onClose }) {
  if (!fact) return null;

  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-60
        w-[calc(100%-3rem)]
        max-w-sm
        animate-[slideIn_0.4s_ease-out]
      "
    >
      <div
        className="
          relative
          rounded-2xl
          border
          border-orange-200
          bg-white
          p-5
          shadow-xl
        "
      >
        <button
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            rounded-full
            p-1
            text-gray-400
            transition
            hover:bg-gray-100
            hover:text-gray-800
          "
          aria-label="Close dog fact"
        >
          <X size={18} />
        </button>

        <div className="flex gap-4 pr-5">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-orange-100
              text-orange-600
            "
          >
            <Lightbulb size={20} />
          </div>

          <div>
            <p className="mb-1 text-xs font-bold tracking-wider text-orange-500">
              DID YOU KNOW?
            </p>

            <p className="text-sm leading-relaxed text-gray-700">
              🐾 {fact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogFactToast;