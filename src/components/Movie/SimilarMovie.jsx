import React, { useContext } from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { IoPlaySharp } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { ToggleContext } from "../../Context/ToggleProvider";

const SimilarMovie = ({ result }) => {
  const { toggleModal, togglePlayMovieModal, handleGetId } =
    useContext(ToggleContext);

  const handelPlay = () => {
    togglePlayMovieModal();
    toggleModal();
    handleGetId(result?.id);
  };

  return (
    <div
      onClick={handelPlay}
      className="group/edit w-[250px] h-[350px] bg-[#2F2F2F] rounded cursor-pointer"
    >
      <div className="relative">
        {result?.backdrop_path == null ? (
          <img
            src={"https://image.tmdb.org/t/p/w300" + result?.poster_path}
            className="rounded object-cover object-top h-[142px] w-full"
            alt=""
          />
        ) : (
          <img
            src={"https://image.tmdb.org/t/p/w300" + result?.backdrop_path}
            className="rounded"
            alt=""
          />
        )}
        <div className="scale-0 group-hover/edit:scale-100 duration-75 w-[50px] h-[50px] absolute top-[40%] left-[40%] rounded-full border-2 bg-black bg-opacity-50 border-white flex justify-center items-center cursor-pointer">
          <IoPlaySharp className="text-white text-lg translate-x-[2px]" />
        </div>
      </div>
      <div className="p-3 flex flex-col gap-3">
        <p className="text-sm text-white font-bold">
          {result?.title?.length > 27
            ? `${result?.title?.substring(0, 27)} . . .`
            : result?.title}
        </p>
        <div className="flex justify-between items-center">
          <div className="">
            <p className="font-bold text-green-500">
              <span>{result?.vote_average?.toFixed(1) * 10}%</span> Match
            </p>
            <p className="text-sm font-semibold text-[#747474]">
              Release :{" "}
              <span className="text-base text-white">
                {result?.release_date}
              </span>
            </p>
          </div>
          <div className="group/my-list flex items-center justify-center h-[35px] w-[35px] rounded-full bg-transparent ring-1 ring-gray-400 relative hover:ring-white hover:duration-300 group/edit cursor-pointer">
            <HiOutlinePlus className="text-2xl text-gray-200" />
            <div className="invisible group-hover/my-list:visible absolute -top-[55px] z-[1008] w-max px-2 py-1 bg-white rounded text-cneter">
              <p className="text-lg font-semibold">Add to My List</p>
              <VscTriangleDown className="text-white text-3xl translate-x-[45px] -translate-y-2 absolute" />
            </div>
          </div>
        </div>
        <p className="text-[#C8C8C8] text-sm tracking-tight">
          {result?.overview?.length > 130
            ? `${result?.overview?.substring(0, 130)} . . .`
            : result?.overview}
        </p>
      </div>
    </div>
  );
};

export default SimilarMovie;