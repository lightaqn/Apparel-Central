import React from "react";
import Image from "next/image";

type Props = { id: number; caption: string; icon: string; desc: string };

const BannerCard = ({ id, caption, icon, desc }: Props) => {
  return (
    <section
      key={id}
      className="gap-4 p-10 hover:border border-orange-500 flex flex-col rounded-3xl m-5"
    >
      <div className="h-[40px] w-[40px] flex">
        <Image
          src={icon}
          alt=""
          className="h-auto"
          objectFit="cover"
          layout="responsive"
          height={250}
          width={300}
        />
      </div>
      <article className="mt-10 space-y-6 text-2xl text-gray-900 font-extrabold">
        <h2 className="">{caption}</h2>
        <p className="">{desc}</p>
      </article>
    </section>
  );
};

export default BannerCard;
