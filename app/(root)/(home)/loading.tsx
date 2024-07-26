import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <main className="flex mx-auto items-center justify-center w-full flex-col max-w-screen animate-pulse space-10">
      <section className="w-full h-full p-10 flex flex-col bg-white">
        //Navbar // w-1/6 w-1/2 w-1/3
        <div className="flex justify-evenly items-center w-full h-[10vh] space-x-6">
          <div className="rounded-3xl border-2 border-gray-500 animate-pulse px-6 shadow-lg items-center justify-center" />
          <div className="rounded-3xl border-2 border-gray-500 animate-pulse shadow-lg" />
          <div className="rounded-3xl border-2 border-gray-500 animate-pulse flex justify-center space-x-4 shadow-lg">
            <div className="rounded-full border-2 border-gray-700 animate-spin h-[30px] w-[30px] " />
            <div className="rounded-full border-2 border-gray-700 animate-spin h-[30px] w-[30px] shadow-lg" />
            <div className="rounded-full border-2 border-gray-700 animate-spin h-[30px] w-[30px] shadow-lg" />
            <div className="rounded-full border-2 border-gray-700 animate-spin h-[30px] w-[30px] shadow-lg" />
          </div>
        </div>
        //banner
        <div className="flex justify-evenly items-center w-full h-[40vh] bg-gray-100">
          <div className="grid grid-cols-2 space-x-4">
            <div className="rounded-3xl border-2 border-gray-500 animate-pulse flex flex-col items-start space-y-4 shadow-lg">
              <hr className="my-3 border-4 border-gray-500 " />
              <hr className="my-3 border-4 border-gray-500 w-2/3" />
              <hr className="my-3 border-8 border-gray-500 w-1/3" />
            </div>

            <div className="rounded-3xl border-2 border-gray-500 animate-pulse flex flex-col items-start space-y-4 shadow-lg">
              <hr className="my-3 border-4 border-gray-500 " />
              <hr className="my-3 border-4 border-gray-500 w-2/3" />
              <hr className="my-3 border-8 border-gray-500 w-1/3" />
            </div>

            <div className="rounded-3xl border-2 border-gray-500 animate-pulse flex flex-col items-start space-y-4 shadow-lg">
              <hr className="my-3 border-4 border-gray-500 " />
              <hr className="my-3 border-4 border-gray-500 w-2/3" />
              <hr className="my-3 border-8 border-gray-500 w-1/3" />
            </div>

            <div className="rounded-3xl border-2 border-gray-500 animate-pulse flex flex-col items-start space-y-4 shadow-lg">
              <hr className="my-3 border-4 border-gray-500 " />
              <hr className="my-3 border-4 border-gray-500 w-2/3" />
              <hr className="my-3 border-8 border-gray-500 w-1/3" />
            </div>
          </div>
          //Animation video
          <div className="bg-gray-400/30 backdrop-blur-lg rounded-3xl  ">
            <div className="rounded-full w-4/5 h-4/5 p-20 shadow-lg bg-gradient-to-l from-gray-500 to-gray-100 animate-pulse items-center justify-center" />
          </div>
        </div>
        //search
        <div className="mx-10 my-10 mt-20 border-2 border-gray-500 h-[20px] w-3/5 shadow-lg rounded-5xl flex items-center justify-center animate-pulse bg-gray-400/30 backdrop-blur-md">
          <hr className="m-5 border-8 border-gray-500 w-2/3 p-3" />
        </div>
        //filter
        <div className="mx-6 my-6 mt-10 border-4 border-gray-500 h-[20px] w-3/5 shadow-lg rounded-full flex items-center justify-center space-x-4 animate-pulse bg-gray-400/30 backdrop-blur-lg">
          <hr className="m-5 border-8 border-gray-700 p-3" />
          <hr className="m-5 border-8 border-gray-700 p-3" />
          <hr className="m-5 border-8 border-gray-700 p-3" />
          <hr className="m-5 border-8 border-gray-700 p-3" />
        </div>
        //filterItem
        <div className="flex space-x-4 overflow-hidden bg-gray-200 h-[20vh] w-full mx-20 p-8 ">
          <div className="rounded-3xl bg-gray-500/40 backdrop-blur-lg animate pulse h-4/5 p-4 m-6 flex shadow-lg">
            <div className="flex h-1/5 items-center justify-center border-2 border-gray-400 space-x-2">
              <hr className="m-5 border-b-16 border-gray-500 p-3 shadow-lg px-8 py-4" />
              <hr className="m-5 border-b-16 border-gray-500 p-3 shadow-lg px-8 py-4" />
            </div>
          </div>

          <div className="rounded-3xl bg-gray-500/40 backdrop-blur-lg animate pulse h-4/5 p-4 m-6 flex shadow-lg">
            <div className="flex h-1/5 items-center justify-center border-2 border-gray-400 space-x-2">
              <hr className="m-5 border-b-16 border-gray-500 p-3 shadow-lg px-8 py-4" />
              <hr className="m-5 border-b-16 border-gray-500 p-3 shadow-lg px-8 py-4" />
            </div>
          </div>
        </div>
        //playlist
        <div className="flex bg-gray-400/30 backdrop-blur-lg h-[20vh] w-full my-6 shadow-lg space-x-4">
          <div className="h-full my-4 p-3 w-4/5 bg-white rounded-3xl border-2 border-gray-500 animate-pulse" />
          <div className="h-full my-4 p-3 w-4/5 bg-white rounded-3xl border-2 border-gray-500 animate-pulse" />
          <div className="h-full my-4 p-3 w-4/5 bg-white rounded-3xl border-2 border-gray-500 animate-pulse" />
        </div>
      </section>
    </main>
  );
};

export default loading;

// const loading = (props: Props) => {
//   return (
//     <main className="flex mx-auto items-center justify-center w-full flex-col max-w-screen animate-pulse space-10">
//       <section className="w-full flex animate-pulse">
//         <div className="w-1/2 h-[300px] rounded-xl bg-gray-800/40 backdrop-blur-lg animate-pulse" />
//         <div className="w-[200px] h-[300px] rounded-full bg-gray-800/40 mx-10 backdrop-blur-lg animate-pulse" />
//       </section>
//       <section className="w-full animate-pulse">
//         <div className="w-full h-[300px] rounded-xl bg-gray-800/40 animate-pulse" />
//       </section>
//       <section className="mt-6 flex flex-col w-full sm:mt-20 animate-pulse">
//         <div className="w-56 h-10 rounded-xl bg-gray-800/40 backdrop-blur-lg" />
//         <div className="flex flex-col flex-wrap justify-center w-full mt-12 gap-16 sm:justify-start">
//           <div className="h-[450px] w-full sm:w-[350px] animate-pulse" />
//           <div className="h-[450px] w-full sm:w-[350px] animate-pulse" />
//           <div className="h-[450px] w-full sm:w-[350px] animate-pulse" />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default loading;
