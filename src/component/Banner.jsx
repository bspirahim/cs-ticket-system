import pendingBg from "../assets/pending-bg.png";
import resolvedBg from "../assets/resolved-bg.png";

const Banner = () => {

 
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="relative">
          <img src={pendingBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl text-white">
              In-Progress
            </h2>

            {/* {selectedTickets.map((st) => (
              <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
                0
              </p>
            ))} */}
          </div>
        </div>

        <div className="relative">
          <img src={resolvedBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl text-white">
              Resolved
            </h2>
            <p className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
              0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
