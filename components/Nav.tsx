"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import useCartStore from "@/store/cartStore";
// import { Icons } from "../lib/constants";
// import {ICartProps} from "@/store/cartStore"
// import { scrollToSearch } from "@/lib/scroll";
import { useScrollContext } from "@/lib/context";

interface NavProps {}

const Nav = (props: NavProps) => {
  const { quantity } = useCartStore();
  const { toggleScrollToSearch, setShow } = useScrollContext();

  return (
    <header className="flex flex-col bg-white top-0 sticky z-40 hover:border hover:border-gray-200 hover:shadow-lg overflow-hidden p-10">
      <nav className="relative flex items-center w-full justify-evenly h-[150px] top-0 border-b-2 border-gray-100 hover:bg-white/70 backdrop-blur-md">
        <Link href="/" passHref>
          <section className="flex items-center justify-start mb-6 p-2 mt-2 cursor-pointer border-none gap-4">
            <Image
              height={140}
              width={250}
              src="/apparel1.jpg"
              className="lg:block hidden w-full p-2 m-4 mt-0 pt-3 border-none translate-y-8 -rotate-270"
              alt=""
              objectFit="contain"
            />
          </section>
        </Link>
        {/* 
        height={140}
              width={250}h-auto */}

        <section className="flex space-x-4 lg:space-x-10 mx-6">
          {/* <Link href="/about">
            <div className="text-2xl lg:text-4xl flex space-x-2 lg:mx-2 tracking-tighter leading-[0.1] cursor-pointer font-semibold hover:text-orange-500 hover:scale-110 text-gray-500">
              About
            </div>
          </Link>

          <Link href="/categories">
            <div className="text-2xl lg:text-4xl flex space-x-2 lg:mx-2 tracking-tighter leading-[0.1] cursor-pointer font-semibold hover:text-orange-500 hover:scale-110 text-gray-500">
              Categories{" "}
            </div>
          </Link> */}
          <Link href="/">
            <p className="flex items-center justify-center 3xl:hidden text-4xl italic font-poppins text-gray-500 leading-loose tracking-wider p-2  hover:text-orange-500 hover:transition hover:transform hover:duration-400 hover:scale-105 active:scale-95 hover:ease-in-out">
              apparrel
              <span className="text-gray-900 font-semibold">CENTRAL</span>
            </p>
          </Link>
        </section>

        {/* <section className="hover:shadow-lg border-none hover:border-2 hover:rounded-3xl hover:border-orange-200 text-gray-500 hover:text-orange-700 items-start p-4 m-2 w-[500px] hover:cursor-pointer hover:justify-center hover:transition hover:duration-300 hover:ease-in-out hover:transform backdrop-blur-lg opacity-50 flex">
          <p className="hidden lg:px-2 lg:flex py-4 items-center text-2xl font-semibold justify-center whitespace-nowrap">
            Sign In
          </p>
        </section> */}
        <section className="mx-4 px-6 flex space-x-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12  hover:text-orange-500 hover:transition hover:transform hover:duration-400 hover:scale-105 active:scale-95 hover:ease-in-out hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <p className="absolute bg-red-500 top-0 left-10 items-center justify-center px-3 py-2 h-8 w-8 rounded-full -translate-x-2 -translate-y-3">
              <span className="text-center text-white font-bold my-auto">
                {quantity}
              </span>
            </p>
          </div>

          {/* {Icons[0].icon} */}

          <div
            className="hover:cursor-pointer"
            onClick={() => setShow("search")}
            onMouseOver={toggleScrollToSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12  hover:text-orange-500 hover:transition hover:transform hover:duration-400 hover:scale-105 active:scale-95 hover:ease-in-out hover:cursor-pointer"
            >
               {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12  hover:text-orange-500 hover:transition hover:transform hover:duration-400 hover:scale-105 active:scale-95 hover:ease-in-out hover:cursor-pointer"
            >
               {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12  hover:text-orange-500 hover:transition hover:transform hover:duration-400 hover:scale-105 active:scale-95 hover:ease-in-out hover:cursor-pointer"
            >
               {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <p className="absolute bg-red-500 top-0 left-10 items-center justify-center px-3 py-2 h-8 w-8 rounded-full -translate-x-2 -translate-y-3">
              <span className="text-center text-white font-bold my-auto">
                1
              </span>
            </p>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Nav;
