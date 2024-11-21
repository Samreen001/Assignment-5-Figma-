import Header from "@/Components/Header";

export default function Home() {
  return (
    <div className="hero-section bg-white">
      <div className="container mx-auto px-4">
        <div className="main flex flex-col md:flex-row items-center justify-between py-10 gap-8">
          {/* Left Content (Text + Header) */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <Header />
            
            <h1 className="text-[40px] font-serif text-black leading-tight mt-0 border-b-2 border-gray-300 pb-4">
              IMPECCABLE <br /> CRAFTSMANSHIP <br />
              AND FINESSE
            </h1>
            <p className="text-black text-base md:text-lg mt-4">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button
              className="mt-6 px-8 py-3 font-bold text-white rounded-md bg-[rgb(162,152,117)] hover:bg-[rgb(142,132,97)] focus:outline-none focus:ring-2 focus:ring-[rgb(162,152,117)]"
            >
              Explore Now
            </button>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-1/2 mt-6 md:mt-8">
         <img
          src={"/images/rs-layer.png"}
          alt="Elegant gold necklaces and chains, showcasing intricate craftsmanship"
          className="object-cover rounded-lg max-w-full max-h-full"
          width={200}
          height={200}
          />
        </div>

        </div>
      </div>
    </div>
  );
}
