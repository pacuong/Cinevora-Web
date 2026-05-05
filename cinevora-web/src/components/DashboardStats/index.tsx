import { MdOutlineMovie, MdLocalOffer  } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const DashboardStats = () => {
  return (
    <div className="mb-5 grid grid-cols-1 justify-items-center sm:grid-cols-2 xl:grid-cols-4">
      <div className="bg-[#1b2c48] sm:mb-5 md:mb-5 lg:mb-0 rounded w-[95%] py-[10px]">
        <div className="text-white-100 flex items-center text-[30px] ml-[20px]">
          <MdOutlineMovie />
          <span className="ml-[10px]">120</span>
        </div>

        <p className="text-white-100 ml-[65px]">Phim</p>
      </div>

      <div className="bg-[#8bccec] sm:mb-5 md:mb-5 lg:mb-0 rounded w-[95%] py-[10px]">
        <div className="text-white-100 flex items-center text-[30px] ml-[20px]">
          <FaCalendarAlt />
          <span className="ml-[10px]">360</span>
        </div>

        <p className="text-white-100 ml-[65px]">Suất chiếu</p>
      </div>

      <div className="bg-[#308973]  rounded w-[95%] py-[10px]">
        <div className="text-white-100 flex items-center text-[30px] ml-[20px]">
          <MdLocalOffer />
          <span className="ml-[10px]">25</span>
        </div>

        <p className="text-white-100 ml-[65px]">Khuyến mãi</p>
      </div>

      <div className="bg-[#f57544] rounded w-[95%] py-[10px]">
        <div className="text-white-100 flex items-center text-[30px] ml-[20px]">
          <BsFillPeopleFill />
          <span className="ml-[10px]">15,350</span>
        </div>

        <p className="text-white-100 ml-[65px]">Người dùng</p>
      </div>
    </div>
  );
};

export default DashboardStats;