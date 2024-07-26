"use client";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
import Cart from "@/components/Cart";
import { useRouter } from "next/router";
import Image from "next/image";
import { colors, sizes, tabItems, productItems } from "@/lib/constants";
import useCartStore from "@/store/cartStore";
import React, { useState, SetStateAction } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getProducts } from "@/sanity/actions";
import { useScrollContext } from "@/lib/context";

type Props = {
  a: number;
  item: string;
  onClick: () => void;
  i: any;
  renderImages: any;
};
interface IProduct {
  i: number;
  caption: string;
  description: string;
  pictures: string[] | any;
  colors: {
    i: number;
    caption: string;
    color: string;
  }[];
  sizes: {
    i: number;
    size: string;
  }[];
  price: number;
  reviews: {
    i: number;
    name: string;
    review: string;
    rating: number;
  }[];
  ratings: number;
}

export async function generateStaticParams({
  params,
}: {
  params: { productId: string };
}) {
  const products = await getProducts({
    query: "",
    category: "",
    page: "1",
  }).then((res) => res.json());

  return products.map((product: any) => ({
    productId: product._id,
  }));
}

export default function Product({ params }: { params: { productId: string } }) {
  const [tab, setTab] = useState(null);
  const { show, setShow } = useScrollContext();
  const { quantity, addProduct, removeProduct, incrementQty, decrementQty } =
    useCartStore();

  // Use the product data
  const { productId } = params;

  // const {
  //   i,
  //   caption,
  //   description,
  //   pictures,
  //   colors,
  //   sizes,
  //   price,
  //   reviews,
  //   ratings,
  // } = productItems[1];

  const handleAddToCart = (product: any) => {
    // addProduct({
    //   i,
    //   caption,
    //   description,
    //   pictures,
    //   colors,
    //   sizes,
    //   price,
    //   reviews,
    //   ratings,
    // });
  };

  const handleTab = (a: any) => {
    if (tab === a) {
      setTab(null);
    } else {
      setTab(a);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    autoplay: true,
  };

  // className: "flex items-center justify-center",

  // onClick={() => handleImgClick(index, image)}
  // className={index === activeImg ? "active" : ""}
  const showImages = pictures.slice(1, pictures.length).map((image, index) => (
    <div
      key={index}
      className="flex flex-row items-center justify-center object-contain h-[150px] w-[150px] p-5 rounded-2xl"
    >
      <img
        src={image}
        alt={`Image ${index}`}
        className="h-[150px] w-[150px] p-5 rounded-2xl"
      />
    </div>
  ));

  return (
    <div className="min-w-[60vw] max-w-8xl">
      <section className="grid lg:grid-cols-2 h-full">
        <section className="relative h-full min-h-[85vh] overflow-hidden">
          <div className="absolute inset-0 bottom-0 rounded-2xl">
            <Image
              src={pictures[0]}
              alt=""
              className="absolute h-full w-full"
              objectFit="cover"
              layout="fill"
            />
            <div className="">
              <div className="flex absolute items-center justify-center gap-x-4 z-30 bottom-5 mb-16 h-1/5 w-1/5">
                <Slider {...settings}>{showImages}</Slider>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white h-full w-full items-center justify-center text-center space-y-10">
          <div className="flex flex-col flex-grow px-10 py-20 min-h-[85vh] gap-y-10">
            <div className="space-y-10 my-3 items-center justify-center">
              <h1 className="lg:text-5xl text-3xl items-center text-center justify-center font-extrabold text-slate-900">
                {caption}
              </h1>
              <strong></strong>
              <p></p>
            </div>
            <p> 30 Day Free Return Policy</p>
            <div className="flex flex-wrap p-3 space-x-4 my-8 items-center justify-center">
              {colors.map(
                ({
                  i,
                  caption,
                  color,
                }: {
                  i: number;
                  caption: string;
                  color: string;
                }) => (
                  <button
                    key={i}
                    className={`text-center text-${
                      color === "black" ? "white" : "black"
                    } bg-${color} px-4 py-2 border-2 border-${color} hover:text-${color}`}
                  >
                    {caption}
                  </button>
                )
              )}
            </div>
            <div className="flex flex-wrap p-3 space-x-4 items-center justify-center my-8">
              {sizes.map(({ i, size }) => (
                <button
                  key={i}
                  className={`text-center text-black px-4 py-2 border-2 border-gray-500`}
                >
                  {size}
                </button>
              ))}
            </div>
            <h4></h4>
            <p>
              {description} <span>more</span>
            </p>
            {/* additional tabs like delivery details */}
            <div>
              <div className="flex items-center justify-evenly gap-x-6">
                {tabItems.map(({ a, item }) => (
                  <div
                    key={a}
                    className="flex-wrap active:border-b-4 active:border-orange-700 w-full p-4"
                  >
                    <button
                      type="submit"
                      onClick={() => handleTab(a)}
                      className="font-medium text-2xl hover:text-orange-400 active:text-orange-500 active:font-extrabold active:scale-105"
                    >
                      {item}
                    </button>
                  </div>
                ))}
              </div>

              {/* <div
                className={`flex w-full max-w-7xl lg:min-w-[50vw] ${
                  tab &&
                  "w-[70vw] items-center justify-center text-center bg-gray-400/30 backdrop-blur-lg space-x-4 lg:space-x-10 px-10 py-5 shadow-lg"
                } `}
              ></div> */}
            </div>
          </div>

          <div className="flex bg-white mb-0 text-center text-black h-[60px] items-center justify-center border-gray-300 border-t-2">
            <ol className="flex gap-x-8 mx-6">
              <li>One-time purchase: ${price}</li>
              <li>Subscribe & save(20%): ${Math.round(0.2 * price)}</li>
            </ol>
          </div>
          <div className="bg-black flex text-white text-3xl font-semibold font-poppins bottom-0 text-center items-center justify-evenly h-[100px] p-4">
            <div className="flex items-center justify-center">
              <h3 className="text-center mx-4 flex" onClick={handleAddToCart}>
                ADD TO BAG
              </h3>
              <p>
                <span> </span> ${price}
              </p>
            </div>

            <div className="flex items-center text-center justify-center mx-4 gap-x-8 border-l-2 border-gray-500 pl-12">
              <p onClick={incrementQty}>-</p>
              <p>{quantity}</p>
              <p onClick={decrementQty}>+</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

//submit button
//           <button onClick={() => setShow("cart") } > View Cart</button>
// {show === "cart" && (
//   <div className="relative w-full h-full">
// <Cart quantity={quantity} total={total} />
// </div>
// )}
