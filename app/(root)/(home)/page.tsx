"use client";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import React from "react";
import { getProducts, getProductsPlaylist } from "@/sanity/actions";
import { useScrollContext } from "@/lib/context";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

// interface IPCard {
//   _id: number;
//   caption: string;
//   buyLink: string;
//   image: string;
//   category: string;
// }

export const revalidate = 1000;
export default async function Home({ searchParams }: Props) {
  const { show } = useScrollContext();
  const products = await getProducts({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  console.log(products);

  const productPlaylist = await getProductsPlaylist();

  return (
    <div className="min-w-[70vh] max-w-8xl h-full space-y-10">
      <Banner />
      <Banner />
      <section className="items-center justify-center flex mx-auto my-5 p-6">
        {show === "search" ? <Search /> : <></>}
      </section>

      <Filter />
      <section>
        {(searchParams?.query || searchParams?.category) && (
          <div className="flex flex-col w-full max-w-6xl justify-center mx-auto items-center">
            <Header
              category={searchParams?.category || ""}
              query={searchParams?.query || ""}
            />

            <div className="text-center p-6 my-5 grid md:grid-cols-2 xl:grid-cols-3 grid-col-dense">
              {products.length > 0 ? (
                products.map((product: any) => (
                  <ProductCard
                    caption={product.caption}
                    id={product._id}
                    buyLink={product.buyLink}
                    image={product.image}
                    key={product._id}
                    category={product.category}
                  />
                ))
              ) : (
                <p> Product Not Found</p>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center p-6 space-y-4 my-8">
          {productPlaylist.map((item: any) => (
            <div key={item._id}>
              <h1 className="text-3xl font-bold text-gray-800">
                {item.caption}
              </h1>
              <div>
                {item.product.map(({ product }: any) => (
                  <ProductCard
                    key={product._id}
                    id={product._id}
                    caption={product.caption}
                    buyLink={product.buyLink}
                    image={product.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <h1>Home</h1>
      <Button>Click me</Button> */}
    </div>
  );
}
