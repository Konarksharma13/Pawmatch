import { AnimatePresence, motion } from "framer-motion";


export default function BreedModal({ breed, close }) {

  return (

    <AnimatePresence>

      {breed && (

        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
          z-50
          p-5
          "
          onClick={close}
        >


          <motion.div

            initial={{
              scale:0.8,
              y:50
            }}

            animate={{
              scale:1,
              y:0
            }}

            exit={{
              scale:0.8,
              y:50
            }}

            onClick={(e)=>e.stopPropagation()}

            className="
            bg-white
            rounded-3xl
            overflow-hidden
            max-w-md
            w-full
            shadow-2xl
            "

          >


            <img
              src={breed.image}
              alt={breed.name}
              className="
              w-full
              h-72
              object-cover
              "
            />


            <div className="p-6">


              <h2
                className="
                text-3xl
                font-black
                "
              >
                {breed.name}
              </h2>


              <p className="mt-3 text-gray-600">
                {breed.description}
              </p>


              <div className="mt-5">

                <h3 className="font-bold">
                  Personality
                </h3>


                <div className="flex gap-2 flex-wrap mt-2">

                  {breed.traits.map((trait)=>(
                    <span
                      key={trait}
                      className="
                      bg-orange-100
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      "
                    >
                      {trait}
                    </span>
                  ))}

                </div>

              </div>


              <div className="mt-5">

                <h3 className="font-bold">
                  Energy Level
                </h3>


                <p>
                  {breed.energy}
                </p>

              </div>


              <button

                onClick={close}

                className="
                mt-6
                w-full
                bg-black
                text-white
                py-3
                rounded-xl
                "

              >
                Close

              </button>


            </div>


          </motion.div>


        </motion.div>

      )}

    </AnimatePresence>

  );

}