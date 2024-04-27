import Man2 from "../assets/man2.png";

const MainComp = () => {
  return (
    <div className="py-[90px]  flex gap-[220px] items-center">
      <img src={Man2} alt="Man Image" className="w-[659px] h-[534px]" />
      <div>
        <span className="text-black font-semibold text-3xl">
          A new way to explore the <br />
          world
        </span>
        <p className="my-5 w-[350px] h-[112px] text-gray-500">
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white w-[164px] h-[60px] rounded-xl">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default MainComp;
