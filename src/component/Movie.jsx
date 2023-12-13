import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { UserAuth } from "./context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function Movie(item) {
  const [like, setlike] = useState(false);
  const [saved, setsaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const savedShow = async () => {
    if (user?.email) {
      setlike(!like);
      setsaved(true);
      await updateDoc(movieID, {
        savedShow: arrayUnion({
          id: item.item.id,
          title: item.item.title,
          img: item.item.backdrop_path,
        }),
      });
    } else {
      alert("login to saved the movies");
    }
  };

  return (
    <div
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
      key={item.id}
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item.item?.backdrop_path}`}
        alt={item.item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal overflow-hidden text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.item?.title}
        </p>
        <p onClick={savedShow}>
          {like ? (
            <FaHeart className="absolute top-4 text-red-600 left-4 text-s-300" />
          ) : (
            <FaRegHeart className="absolute top-4  left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movie;
