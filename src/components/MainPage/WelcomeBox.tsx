import { Link } from 'react-router-dom';

const WelcomeBox = () => {
  return (
    <aside className="hidden col-span-3 xl:col-span-1 xl:block">
      <div className="box text-gray-600">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Hello There 👋
        </h3>
        <p className="mb-3">Welcome to Dev Community</p>
        <p className="mb-3">
          Connect, share, and engage with community and build relationships.
        </p>
        <p className="mb-3">
          Please log in if you are already a member or sign up for an account.
        </p>
        <div className="flex flex-col">
          <Link
            to="/signup"
            className="btn text-center text-sm xl:text-md w-full p-4 -mb-2"
          >
            Join The Community
          </Link>
          <Link
            to="/login"
            className="btn text-center w-full p-4 bg-transparent text-sm xl:text-md text-gray-800 border border-blue-200 hover:text-blue-50"
          >
            Already a Member?
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default WelcomeBox;
