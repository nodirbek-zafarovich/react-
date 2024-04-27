import Line from "../assets/line.svg";
import Man from "../assets/man.png";

const HeaderComp = () => {
  return (
    <div className="py-[90px] flex gap-[170px]">
      <div>
        <div className="my-20">
          <span className="text-7xl font-bold text-slate-900  ">
            Explore and <br /> Travel
          </span>
        </div>
        <div>
          <div className="py-[30px]">
            <span className="text-2xl font-semibold text-slate-900  ">
              Holiday finder
            </span>
            <img src={Line} alt="line" className="py-3" />
          </div>
          <div>
            <form action="#" className="grid grid-cols-2 w-[380px] gap-14 ">
              <select
                name="Location"
                className="border  border-gray-400  bg-transparent text-gray-500 px-5 py-2 rounded-xl  "
              >
                <option value="Location">Location</option>
                <option value="Uzb">Uzbekistan</option>
                <option value="Eng">England</option>
                <option value="Rus">Russia</option>
                <option value="AQSH">AQSh</option>
              </select>
              <select
                name="Activity"
                className="border border-gray-400  bg-transparent text-gray-500 px-5 py-2 rounded-xl"
              >
                <option value="Activity">Activity</option>
                <option value="Uzb">Uzbekistan</option>
                <option value="Eng">England</option>
                <option value="Rus">Russia</option>
                <option value="AQSH">AQSh</option>
              </select>
              <select
                name="Grade"
                className="border border-gray-400  bg-transparent text-gray-500 px-5 py-2 rounded-xl"
              >
                <option value="Grade">Grade</option>
                <option value="Uzb">University</option>
                <option value="Eng">School</option>
              </select>
              <select
                name="Date"
                className="border border-gray-400  bg-transparent text-gray-500 px-5 py-2 rounded-xl"
              >
                <option value="Date">Date</option>
              </select>
            </form>
            <button className="border border-orange-400 my-[40px] w-[180px] h-[60px] rounded-lg text-orange-400 hover:bg-orange-400 hover:text-white ">
              Explore
            </button>
          </div>
        </div>
      </div>
      <img src={Man} alt="Man Image" className="w-[580px] h-[670px]" />
    </div>
  );
};

export default HeaderComp;
