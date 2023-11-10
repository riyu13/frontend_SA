import Link from "next/link";
import Navbar from "../partials/page";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center mt-36">
        <div className="flex items-center justify-center">
          <div className="card lg:card-side bg-base-100 shadow-xl w-96">
            <div className="flex flex-col">
              <div className="text-3xl font-bold">Log In</div>
              <div className="card-body">
                <div className="flex flex-row">
                  <div className="flex flex-col">
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
                  </div>
                </div>
                <div className="form-control">
                  <label className="cursor-pointer label">
                    <span className="label-text">Remember me</span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-info"
                    />
                  </label>
                </div>
                <div className="card-actions justify-end">
                  <Link href="/components/dashboard" className="btn btn-ghost hover:bg-blue-600 hover:text-white">
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page