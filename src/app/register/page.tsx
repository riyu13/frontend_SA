// import Image from "next/image";
import Navbar from "../partials/page";

const register = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-36">
        <div className="flex items-center justify-center">
          <div className="card lg:card-side bg-base-100 shadow-xl w-96">
            <div className="flex flex-col">
              <div className="text-3xl font-bold">Register</div>
              <div className="card-body">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <input
                      type="text"
                      placeholder="Name"
                      className="input input-ghost w-80 mt-5"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-ghost w-80 mt-5"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-ghost w-80 mt-5"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="input input-ghost w-80 mt-5"
                    />
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-ghost hover:bg-blue-600 hover:text-white">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
