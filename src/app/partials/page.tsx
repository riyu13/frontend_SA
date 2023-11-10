import { BiLogIn } from "react-icons/bi"
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container">
      <div className="flex items-center justify-center">
        <div className="navbar">
          <div className="navbar-start">
            <Link
              href="/"
              className="btn btn-ghost hover:text-white hover:bg-blue-600 font-bold text-2xl"
            >
              Accounting Site
            </Link>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <Link
              href="/register"
              className="btn btn-ghost hover:text-white hover:bg-blue-600"
            >
              Register
            </Link>
            <Link
              href="/login"
              className="btn btn-ghost hover:text-white hover:bg-blue-600"
            >
              Services
            </Link>
            <a className="btn btn-ghost hover:text-white hover:bg-blue-600">
              Team
            </a>
            <Link
              href="/login"
              className="btn btn-ghost hover:text-white hover:bg-blue-600"
            >
              <BiLogIn />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar