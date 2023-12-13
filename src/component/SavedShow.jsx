import { UserAuth } from "./context/AuthContext";
import { db } from "../../firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import empty from "../assets/empty.png";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
function SavedShow() {
  const { user } = UserAuth();
  const [movies, setmovies] = useState([]);

  const movieref = doc(db, "users", `${user?.email}`);

  const deleteshow = async (passid) => {
    try {
      const result = movies.filter((item) => item.id !== passid);

      await updateDoc(movieref, {
        savedShow: result,
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setmovies(doc.data()?.savedShow);
    });
  }, [user?.email]);

  return (
    <div>
      {movies.length === 0 ? (
        <div className=" flex w-full justify-center items-center">
          <img className="w-[400px] " src={empty} />
        </div>
      ) : (
        <div>
          {" "}
          <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
          <div className="relative flex items-center">
            <div
              id={"slider"}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {movies.map((item, id) => (
                <div
                  className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
                  key={id}
                >
                  <img
                    className="w-full h-auto block"
                    src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                    alt={item?.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                    <p className="white-space-normal overflow-hidden text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                      {item?.title}
                    </p>
                    <p
                      onClick={() => {
                        deleteshow(item?.id);
                      }}
                      className="absolute text-gary-300 top-4 right-4"
                    >
                      <IoMdClose />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedShow;
