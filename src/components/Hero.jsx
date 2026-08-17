export default function Hero() {
  return (
    <section
      className="
      text-center
      mb-14
      "
    >

      <div
        className="
        inline-block
        text-6xl
        mb-4
        "
      >
        🐾
      </div>


      <h1
        className="
        text-6xl
        font-black
        tracking-tight
        "
      >
        Find Your Dog
      </h1>


      <p
        className="
        mt-5
        text-lg
        text-gray-600
        max-w-xl
        mx-auto
        "
      >
        Every dog has a unique personality.
        Discover breeds and find the companion
        that matches your lifestyle.
      </p>


      <div
        className="
        mt-6
        flex
        justify-center
        gap-3
        "
      >

        <span
          className="
          bg-orange-100
          px-4
          py-2
          rounded-full
          "
        >
          ❤️ Loyal companions
        </span>


        <span
          className="
          bg-green-100
          px-4
          py-2
          rounded-full
          "
        >
          🐕 12+ breeds
        </span>


      </div>


    </section>
  );
}