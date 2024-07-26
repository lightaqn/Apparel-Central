"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bannerItems } from "../lib/constants";
import BannerCard from "../components/BannerCard";
import Animation from "../components/Animation";
// import { useRouter } from "next/router";

type Props = {};

const Banner = (props: Props) => {
  // const router = useRouter();
  // const [scrollY, setScrollY] = useState(0);
  // const videoRef = useRef<null | any>(null);

  // const handleScroll = useCallback(() => {
  //   setScrollY(window.scrollY);
  // }, []);

  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [handleScroll]);

  // useEffect(() => {
  //   const scrollTime = scrollY * 0.1;
  //   videoRef.current.currentTime = scrollTime;
  //   if (scrollY >= 200) {
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  // }, [scrollY]);
  return (
    <section className="grid mt-0 h-[50vh] lg:grid-cols-2">
      <section className="h-full w-full opacity-50 relative px-10 lg:mx-0">
        {/* onClick={() => router.push(`/${category}`)} */}
        <div className="bg-white border-none mix-blend-normal h-full mx-auto w-full items-center justify-center z-10 pr-20 grid grid-cols-2 space-6 object-contain">
          {bannerItems.map(
            ({
              id,
              caption,
              icon,
              desc,
            }: {
              id: number;
              caption: string;
              icon: string;
              desc: string;
            }) => (
              <Link href={`/${encodeURIComponent(caption)}`}>
                <div className="">
                  <BannerCard
                    key={id}
                    id={id}
                    caption={caption}
                    icon={icon}
                    desc={desc}
                  />{" "}
                </div>
              </Link>
            )
          )}

          <button
            className="flex justify-between hover:-translate-x-8 items-center font-semibold mt-5 text-3xl text-white px-10 py-5 w-2/3 ml-20 border-orange-500 border bg-gray-800 hover:shadow-lg rounded-full hover:text-gray-200 hover:bg-gray-500"
            type="submit"
          >
            <span className="whitespace-nowrap"> Join the WaitList</span>
            <span className="ml-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>
      <section className="hidden relative bg-gradient-to-r h-full w-full from-slate-200 to-white lg:flex flex-col items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4; codecs=hvc1" />
          <source src="/video.mp4" type="video/webm; codecs=vp9" />
        </video>

        <section className="absolute z-10 h-full w-full gap-y-6 p-8 items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center p-10 mt-14">
            <Animation
              texts="T ransform your Merc Game"
              finaltexts="Transform your Merc Game"
            />

            <p className="font-light text-center tracking-widest leading-tight text-xl lg:text-3xl text-gray-700">
              With Trendy Outfits. Discover unique and customized Apparrels
              <br /> that makes every moment truly yours <br />
            </p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Banner;

// ref={videoRef}

// absolute top-0 left-0

{
  /* <div
className="flex h-screen flex-1 justify-center lg:items-center"
style={{ transform: `translateY(${translateY}px)` }}
>
<div className="w-full max-w-md px-10 pt-10 md:px-0 lg:pt-0">
  {children}
</div>
</div> */
}

{
  /* <div className="flex h-screen flex-1 justify-center lg:items-center">
<div className="w-full max-w-md px-10 pt-10 md:px-0 lg:pt-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/test.mp4" type="video/mp4; codecs=hvc1" />
              <source src="/test.webm" type="video/webm; codecs=vp9" />
            </video>
          </div> */
}

{
  /* <div className="relative pb-[56%]"> */
}

/* </div> */
// }
