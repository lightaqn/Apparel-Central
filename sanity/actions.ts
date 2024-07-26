import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { createQuery } from "./utils";

interface GetProductsParams {
  query: string;
  category: string;
  page: string;
}

interface createQueryParams {
  type: string;
  query?: string;
  category?: string;
  page?: number;
  perPage: number;
}

export const getProducts = async (params: GetProductsParams) => {
  const { query, category, page } = params;
  try {
    const products = await readClient.fetch(
      groq`${createQuery({
        type: "product",
        query,
        category,
        page: parseInt(page),
      })}{caption, _id, buyLink, slug, "image": banner.asset->url, views, category}`
    );
    return products;
  } catch (error) {
    console.error(error);
  }
};

//for popular page and other special selection
export const getProductsPlaylist = async () => {
  try {
    const products = await readClient.fetch(
      groq`*[_type == "productPlaylist"]
       {caption,
        _id,
        products[0...6]->{
            caption, 
            _id,
             buyLink, 
            slug, 
            "image": banner.asset->url, views, category
        }
        }`
    );
    return products;
  } catch (error) {
    console.error(error);
  }
};

// For Latest Playlist.
// #groq`*[_type == "projectPlaylist"] | #order (_createdAt desc) `)
