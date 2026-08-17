import { motion } from "framer-motion";


export default function BreedCard({
breed,
onClick,
isFavorite,
toggleFavorite,
compare,
toggleCompare
}) {

  return (

    <motion.div

      whileHover={{
        y:-8
      }}

      onClick={onClick}

      className="
      bg-white
rounded-3xl
overflow-hidden
shadow-md
hover:shadow-2xl
transition-all
duration-300
      "

    >


      <button

        onClick={(e)=>{
          e.stopPropagation();
          toggleFavorite(breed.id);
        }}

        className="
        absolute
        top-3
        right-3
        bg-white
        rounded-full
        w-10
        h-10
        text-xl
        shadow
        "

      >

        {isFavorite ? "❤️" : "🤍"}

      </button>


      <img

        src={breed.image}

        alt={breed.name}

        className="
        w-full
        h-64
        object-cover
        "

      />


      <div className="p-5">


        <h2
          className="
          text-xl
          font-bold
          "
        >
          {breed.name}
        </h2>


        <div
          className="
          flex
          flex-wrap
          gap-2
          mt-3
          "
        >

          {breed.traits.map((trait)=>(

            <span

              key={trait}

              className="
              px-3
              py-1
              rounded-full
              bg-orange-50
                border
                border-orange-100
              text-sm
              "

            >

              {trait}

            </span>

          ))}


        </div>


      </div>


    </motion.div>

  );
}