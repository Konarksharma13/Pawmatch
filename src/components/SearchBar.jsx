export default function SearchBar({
  search,
  setSearch,
  energy,
  setEnergy
}) {

  return (

    <div
      className="
      flex
      flex-col
      md:flex-row
      gap-4
      mb-10
      "
    >

      <input

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        placeholder="Search your favorite breed..."

        className="
        flex-1
        px-5
        py-3
        rounded-xl
        border
        outline-none
        "

      />


      <select

        value={energy}

        onChange={(e)=>setEnergy(e.target.value)}

        className="
        px-5
        py-3
        rounded-xl
        border
        "

      >

        <option value="All">
          All Energy
        </option>

        <option value="Low">
          Low Energy
        </option>

        <option value="Medium">
          Medium Energy
        </option>

        <option value="High">
          High Energy
        </option>


      </select>


    </div>

  );

}

