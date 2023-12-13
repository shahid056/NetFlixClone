import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../component/context/AuthContext";
import { useState } from "react";

function Login() {
  const [email, setemail] = useState(" ");
  const [passsword, setpassword] = useState(" ");
  const [error, seterror] = useState("");
  const { user, login } = UserAuth();
  const Navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      await login(email, passsword);
      Navigate("/");
    } catch (error) {
      seterror(error.message);
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://th.bing.com/th/id/R.d2edb29f3f970c36aadecbb01ed0bb79?rik=z%2bAuuobpN0KNSg&riu=http%3a%2f%2fisquad.tv%2fwp-content%2fuploads%2f2018%2f08%2fNetflix-Background.jpg&ehk=Ij4PSd%2bZkTcESSlAVWoGpNmExM0fu3BgteNT6AnS9lM%3d&risl=&pid=ImgRaw&r=0"
        />
        <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold ">Login</h1>
              {error ? (
                <p className="text-white bg-red-500 rounded text-center mt-4">
                  {error}
                </p>
              ) : null}
              <form onSubmit={handlesubmit} className="flex py-4 flex-col ">
                <input
                  className="p-3 my-2 bg-gray-600 rounded font-bold outline-none"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <input
                  className="p-3 my-2 bg-gray-600 rounded font-bold outline-none"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p className="cursor-pointer">Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600">
                    Dont have a subscribe of netflix?
                  </span>
                  {""}
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Login;
