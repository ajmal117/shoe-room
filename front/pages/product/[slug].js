import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const productDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>

            {/* product subtitle  */}
            <div className="text-lg font mb-5">Men&apos; s Golf Shoes</div>

            {/* product price  */}
            <div className="text-lg font-semibold">MRP : &#8377; 19 695.00</div>

            {/* product tax */}
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>

            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* product size range start  */}
            <div className="mb-10">
              {/* heading start  */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* heading end  */}

              {/* size start  */}
              <div className=" grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-blacl/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              {/* size end  */}

              {/* error message start */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* error message end */}
            </div>
            {/* product size range end  */}

            {/* add to cart button start  */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add To Cart
            </button>
            {/* add to cart button end  */}

            {/* whilist button start  */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* whilist button end */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                fuga natus voluptas! Sunt eius laboriosam tempore excepturi
                corrupti, animi, eveniet qui delectus cupiditate adipisci in
                molestiae dolore atque doloremque quisquam.
              </div>
              <div className="markdown text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                fuga natus voluptas! Sunt eius laboriosam tempore excepturi
                corrupti, animi, eveniet qui delectus cupiditate adipisci in
                molestiae dolore atque doloremque quisquam.
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>

        <RelatedProduct />
      </Wrapper>
    </div>
  );
};

export default productDetails;
