import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// interface IPCard {
//   _id: string;
//   caption: string;
//   buyLink: string;
//   image: string;
//   category: string;
// }

const ProductCard = ({ id, caption, buyLink, image, category }: any) => {
  return (
    <section key={id} className="gap-y-4 h-[600px] w-[600px]">
      <div className="">
        <Image
          src={image}
          width={600}
          height={500}
          objectFit="contain"
          layout="responsive"
          alt="caption"
          className="rounded-2xl"
        />
      </div>
      <h1 className="tracking-tight leading-[0.1px] text-gray-800 font-bold text-2xl lg:text-3xl p-3">
        {caption}{" "}
        <span className="align-right justify-center text-sm">
          {" "}
          - {category}
        </span>
      </h1>
      <button className="flex relative items-center justify-evenly rounded-2xl w-[300px] h-[40px]">
        <p className="border-none w-[150px] h-full inset-0 items-center justify-center text-white font-semibold text-lg bg-orange-700 hover:duration-300 hover:transition hover:ease-in-out hover:absolute hover:pb-4 hover:text-2xl hover:w-[300px] px-6 py-3 hover:uppercase hover:bg-orange-900">
          View
        </p>
        <Link href={buyLink} passHref>
          <p className="border-none w-[150px] h-full inset-0 items-center justify-center text-white font-semibold text-lg bg-green-700 hover:duration-300 hover:transition hover:ease-in-out hover:absolute hover:pb-4 hover:text-2xl hover:w-[300px] px-6 py-3 hover:uppercase hover:bg-green-900">
            Buy
          </p>
        </Link>
      </button>
    </section>
  );
};

export default ProductCard;
