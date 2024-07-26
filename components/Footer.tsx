import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bottom-0 sticky items-center justify-center flex flex-col my-3 p-6 hover:bg-gray-300/30 backdrop-blur-lg  ">
      <section className="flex mt-6">
        <hr className="w-full mx-10 h-2 bg-orange-900" />
      </section>
      <section className="flex whitespace-nowrap space-x-4 lg:text-2xl text-lg text-center font-semibold text-gray-700">
        <span> Copyright (c) Apparel Central | All Rights Reserved </span>
        <span>Terms&Conditions </span> <span>Privacy Policy</span>
      </section>
    </footer>
  );
};

export default Footer;
