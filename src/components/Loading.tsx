const Loading = () => {
  return (
    <div className="box">
      <div className="flex gap-3 animate-pulse">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col gap-2 flex-grow">
          <div className="w-3/4 bg-gray-300 h-4 rounded-full"></div>
          <div className="w-full bg-gray-300 h-4 rounded-full"></div>
          <div className="w-5/6 bg-gray-300 h-4 rounded-full"></div>
          <div className="w-4/5 bg-gray-300 h-4 rounded-full"></div>
          <div className="w-full bg-gray-300 h-4 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
