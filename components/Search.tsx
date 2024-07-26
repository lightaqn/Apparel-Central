import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { searchUrlQuery } from "@/sanity/utils";
import Image from "next/image";

type Props = {};

const Search = (props: Props) => {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  //implementing debouncing

  useEffect(() => {
    const delay = setTimeout(() => {
      let newUrl = "";
      if (input) {
        newUrl = searchUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: input,
        });
      } else {
        newUrl = searchUrlQuery({
          params: searchParams.toString(),
          keysToDelete: ["query"],
        });
      }
      router.push(newUrl, { scroll: false });
    }, 400);

    return () => clearTimeout(delay);
  }, [input]);

  return (
    <form className="flex max-w-5xl text-center items-center justify-center mt-25 p-5">
      <label className="bg-transparent">
        {/* <Image src="/searchIcon.svg" alt="" /> */}
        <input
          onChange={(e) => setInput(e.target.value)}
          className="outline-none placeholder-gray-500 h-[100px] w-[550px] rounded-xl border border-orange-300 focus:border-gray-500 hover:text-gray-500 active:border-double px-8 py-4 flex items-center justify-center text-center text-xl active:text-2xl text-gray-800 tracking-wider bg-gray-400/30 backdrop-blur-lg text-gray-800 tracking-wider bg-gray-400/30 backdrop-blur-lg"
          placeholder="Input apparel caption || Category || Description"
        />
      </label>
    </form>
  );
};

export default Search;
