import { useState, useEffect } from "react";

import breeds from "./data/breeds";

import BreedGrid from "./components/BreedGrid";
import BreedModal from "./components/BreedModal";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CompareBar from "./components/CompareBar";



function App(){
  const [favorites,setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [selectedBreed,setSelectedBreed] = useState(null);

  const [search,setSearch] = useState("");

  const [energy,setEnergy] = useState("All");

  const [compare,setCompare] = useState([]);

  const surpriseMe = () => {

  const randomBreed =
    breeds[Math.floor(Math.random() * breeds.length)];
    setSelectedBreed(randomBreed);

};


  const toggleCompare = (breed)=>{

setCompare((prev)=>{

if(prev.find(item=>item.id===breed.id)){
return prev.filter(item=>item.id!==breed.id)
}

if(prev.length < 2){
return [...prev,breed]
}

return prev;

})

}

  const toggleFavorite = (id) => {

  setFavorites((prev) => {

    const updated = prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id];


    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    return updated;

  });

};
  const filteredBreeds = breeds.filter((breed)=>{


    const matchesSearch =
      breed.name
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchesEnergy =
      energy === "All" ||
      breed.energy === energy;


    return matchesSearch && matchesEnergy;


  });



  return (

    <main
      className="
      min-h-screen
      bg-orange-50
      p-10
      "
    >

      <section className="max-w-6xl mx-auto">


       <Hero />

       <button
  onClick={surpriseMe}
  className="
  mb-8
  mx-auto
  block
  bg-black
  text-white
  px-6
  py-3
  rounded-full
  hover:scale-105
  transition
  "
>
  🎲 Surprise Me
</button>

        <SearchBar

          search={search}

          setSearch={setSearch}

          energy={energy}

          setEnergy={setEnergy}

        />


        <BreedGrid

         breeds={filteredBreeds}

          onSelect={setSelectedBreed}

          favorites={favorites}

          toggleFavorite={toggleFavorite}
            
          compare={compare}

        />


      </section>


      <BreedModal

        breed={selectedBreed}

        close={()=>setSelectedBreed(null)}

      />

     <Footer />
    </main>

  );
}


export default App;