import { Link } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

function Navbar() {
  const { user, logout } = UserAuth();

  const handeler = async () => {
    try {
      await logout();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex justify-between p-5 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl  font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="px-6 py-2   rounded text-white cursor-pointer">
              Account
            </button>
          </Link>

          <Link to="/">
            {" "}
            <button
              onClick={handeler}
              className="bg-red-600 px-6 py-2   rounded text-white cursor-pointer"
            >
              Logout
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="px-6 py-2   rounded text-white cursor-pointer">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            {" "}
            <button className="bg-red-600 px-6 py-2   rounded text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
