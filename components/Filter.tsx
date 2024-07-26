"use client";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { searchUrlQuery } from "@/sanity/utils";

type Props = {};

const links = ["Men", "Women", "Tees", "Sweats", "Beanies", "Jackets"];

const Filter = (props: Props) => {
  const [active, setActive] = useState("");
  const searchPrams = useSearchParams();
  const router = useRouter();

  const handleToggle = (link: string) => {
    let newUrl: string = "";
    if (active === link) {
      setActive("");
      newUrl = searchUrlQuery({
        params: searchPrams.toString(),
        keysToDelete: ["category"],
      });
    } else {
      setActive(link);
      newUrl = searchUrlQuery({
        params: searchPrams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };
  return (
    <ul className="flex text-center item-start space-x-8 md:items-center justify-center my-8 p-4">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleToggle(link)}
          className={`${
            active === link
              ? "text-orange-700 border-b-4 border-orange-700 transition duration-350 transform scale-105 ease-out font-semibold"
              : ""
          } text-2xl text-gray-700 hover:text-gray-500 hover:cursor-pointer p-4`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filter;
