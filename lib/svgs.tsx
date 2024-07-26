export const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    className="animate-spin motion-reduce:hidden"
  >
    <circle cx="50" cy="50" r="2" fill="white">
      <animate
        attributeName="r"
        from="2"
        to="10"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="50" cy="50" r="4" fill="white">
      <animate
        attributeName="r"
        from="4"
        to="2"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        from="0"
        to="1"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="50" cy="50" r="6" fill="white">
      <animate
        attributeName="r"
        from="6"
        to="4"
        dur="1s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="opacity"
        from="1"
        to="0"
        dur="1s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

export const Loader = () => {
  <div
    className="bg-gray-300/30 backdrop-blur-lg m-20 border-none rounded-3xl grid grid-cols-2 shadow-lg h-[70vh] w-[70vw]
        "
  >
    //LHS
    <div className="col-span-1 p-20 items-center justify-center">
      <div className="m-10 my-15 w-3/5 h-3/5 flex flex-col items-center justify-start">
        <div className="w-full h-[80px] border border-gray-300 p-4  bg-gray-500 animate-pulse" />
        <div className="w-full h-[40px] border border-gray-300 p-4  bg-gray-500 animate-pulse" />
        <div className="w-full h-[40px] border border-gray-300 p-4  bg-gray-500 animate-pulse" />
        <div className="w-full h-[40px] border border-gray-300 p-4 text-xl bg-gray-500 animate-pulse" />

        <div className="flex items-center justify-between my-4 py-3 bg-gray-200/10 backdrop-blur">
          <div className="flex space-x-3 justify-evenly">
            <div className="h-10 w-10 bg-gray-400" />
            <div className="flex-grow h-10 bg-gray-400 w-[150px] animate-pulse " />
          </div>
          <div className="w-[150px] h-10 bg-gray-300 animate-pulse " />
        </div>
        <div className="flex w-full h-[40px] font-semibold bg-gray-400/30 backdrop-blur animate-pulse shadow-lg my-6 border-none rounded-xl" />
      </div>
      <div>
        <div className="flex w-full h-[40px] font-semibold bg-gray-400/30 backdrop-blur animate-pulse shadow-lg my-6 border-none rounded-xl " />

        <div className="flex w-full h-[20px] font-semibold bg-gray-400/30 backdrop-blur animate-pulse shadow-lg my-6 border-none rounded-xl" />
      </div>
    </div>
    //RHS
    <div className="w-full h-full relative rounded-r-3xl col-span-1">
      <div className="h-full w-full bg-gradient-to-l from-gray-500 to-gray-200 animate pulse" />
      <div className="absolute z-10 bottom-20 left-20 bg-gray-400/30 backdrop-blur-lg animate-spin h-[30vh] w-[30vw]" />
    </div>
  </div>;
};
