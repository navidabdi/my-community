const WelcomeBox = () => {
  return (
    <aside>
      <div className="box">
        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          Hello There 👋
        </h3>
        <p className="mb-3">Welcome to Tribe Campfire</p>
        <p className="mb-3">
          Connect, share, and engage with community and build relationships.
        </p>
        <p className="mb-3">
          Please log in if you are already a member or sign up for an account.
        </p>
        <div className="flex flex-col">
          <button className="btn w-full p-4 -mb-2">Join The Community</button>
          <button className="btn w-full p-4 bg-transparent text-gray-800 border border-blue-200 hover:text-blue-50">
            Already a Member?
          </button>
        </div>
      </div>
    </aside>
  );
};

export default WelcomeBox;
