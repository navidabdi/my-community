const Header = () => {
  return (
    <header className="bg-white py-5 mb-6">
      <nav className="container-xl items-center flex justify-between">
        <h1 className="sm:text-lg lg:text-xl font-bold text-blue-900">
          Developers Community
        </h1>
        <div className="flex gap-5 items-center">
          <button className="bg-blue-600 py-3 px-4 text-blue-50 font-semibold sm:py-4 sm:px-5 rounded-[.3rem] leading-3">
            Login
          </button>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
