import BreedCard from "./BreedCard";


export default function BreedGrid({
  breeds,
  onSelect,
  favorites,
  toggleFavorite,
  compare,
  toggleCompare
}){


  return (

    <div
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-8
      "
    >

      {
breeds.length === 0 ? (

<div
className="
col-span-full
text-center
py-20
text-2xl
"
>
🐕 No dog found. Try another search.
</div>

) : (

breeds.map((breed)=>(

       <BreedCard

            key={breed.id}

            breed={breed}

            onClick={()=>onSelect(breed)}

            isFavorite={favorites.includes(breed.id)}

            toggleFavorite={toggleFavorite}

            key={breed.id}

            compare={compare}

            toggleCompare={toggleCompare}
        />
      )))

}


    </div>

  );

}