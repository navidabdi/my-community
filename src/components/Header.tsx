import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className="bg-white py-5 mb-6">
        <nav className="container-xl items-center flex justify-between">
          <Link to="/">
            <h1 className="sm:text-lg lg:text-xl font-bold text-blue-900">
              Developers Community
            </h1>
          </Link>
          <div className="flex gap-5 items-center">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-800 transition-all duration-100 ease-in py-3 px-4 text-blue-50 font-semibold sm:py-4 sm:px-5 rounded-[.3rem] leading-3"
            >
              Login
            </Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
