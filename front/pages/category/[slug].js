import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import React from "react";

const Category = ({ category, products, slug }) => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running shoes
          </div>
        </div>

        {/* product grid  start*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
        {/* product grid end */}
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const category = await fetchDataFromApi("/api/categories?populate=*");

  const paths = category.data.map((c) => ({
    params: {
      slug: c.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using ` getStaticProps
export async function getStaticProps({ params: { slug } }) {
  const category = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populates=*&[filters][categories][slug][$eq]=${slug}`
  );

  return {
    props: {
      category,
      products,
      slug,
    },
  };
}
