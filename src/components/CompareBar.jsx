export default function CompareBar({
  compare,
  toggleCompare
}) {

  if(compare.length === 0) return null;


  return (

    <div
      className="
      fixed
      bottom-5
      left-1/2
      -translate-x-1/2
      bg-black
      text-white
      px-6
      py-4
      rounded-2xl
      shadow-xl
      z-40
      "
    >

      <p className="font-bold">
        🐾 Compare
      </p>


      <p className="text-sm">
        {compare.map(d=>d.name).join(" vs ")}
      </p>


      {compare.length === 2 && (

        <button
          onClick={()=>{
            alert(
              `${compare[0].name} vs ${compare[1].name}`
            )
          }}
          className="
          mt-2
          bg-white
          text-black
          px-4
          py-1
          rounded-full
          "
        >
          Compare
        </button>

      )}

    </div>

  );
}