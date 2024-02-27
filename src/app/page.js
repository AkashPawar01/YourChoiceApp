"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import {CiLinkedin} from "react-icons/ci"

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);
  const [textareaValue, setTextareaValue] = useState('');


  const [products, setProducts] = useState([]);
  const router = useRouter();

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Textarea value submitted:', textareaValue);
  };

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    getListOfProducts();
  }, []);

  console.log(products);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden">
      <section className="">
        <div className="grid max-w-screen-xl px-4 py-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Best Fashion Collection
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">
              Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
              lacus meleifend menean diverra loremous.
            </p>

            <button
              type="button"
              onClick={() => router.push("/product/listing/all-products")}
              className="mt-1.5 inline-block bg-blue-700 rounded-lg transition-all duration-200 px-5 py-4 text-xs font-medium uppercase tracking-wide text-white hover:bg-blue-600"
            >
              Explore Shop Collection
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                    Summer Sale Collection
                  </h2>
                </div>
                <button
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-1.5 inline-block bg-blue-800 px-5 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 hover:bg-blue-700 rounded-lg"
                >
                  Shop ALL
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <ul className="grid grid-cols-2 gap-4">
                {products && products.length
                  ? products
                      .filter((item) => item.onSale === "yes")
                      .splice(0, 2)
                      .map((productItem) => (
                        <li
                          onClick={() =>
                            router.push(`/product/${productItem._id}`)
                          }
                          className="cursor-pointer"
                          key={productItem._id}
                        >
                          <div>
                            <img
                              src={productItem.imageUrl}
                              alt="Sale Product Item"
                              className="object-cover w-full rounded aspect-square"
                            />
                          </div>
                          <div className="mt-3">
                            <h3 className="font-medium text-gray-900">
                              {productItem.name}
                            </h3>
                            <p className="mt-1 text-sm text-gray-800">
                              ${productItem.price}{" "}
                              <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                            </p>
                          </div>
                        </li>
                      ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
              SHOP BY CATEGORY
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1566454544259-f4b94c3d758c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-black">KIDS</h3>
                  <button
                    onClick={() => router.push("/product/listing/kids")}
                    className="mt-1.5 inline-block bg-blue-800 px-5 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 hover:bg-blue-700 rounded-md"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-black">WOMEN</h3>
                  <button
                    onClick={() => router.push("/product/listing/women")}
                    className="mt-1.5 inline-block bg-blue-800 px-5 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 hover:bg-blue-700 rounded-md"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1555529669-2269763671c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">MEN</h3>
                  <button
                    onClick={() => router.push("/product/listing/men")}
                    className="mt-1.5 inline-block bg-blue-800 px-5 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all duration-200 hover:bg-blue-700 rounded-md"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer className=" pt-14 pb-3  text-black md:h-full overflow-hidden">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="w-screen mt-0 mr-0 mb-0 ml-0 relative">
            
            
            <form className="flex items-center justify-center gap-3 w-screen overflow-hidden" onSubmit={handleSubmit}>
              <label className="flex items-center justify-center font-semibold">
                Give Feedback:
                <textarea
                  value={textareaValue}
                  onChange={handleTextareaChange}
                  className="ml-1 rounded-2xl  border placeholder-gray-400 focus:outline-none transition-all h-12 duration-300 focus:border-blue-800 w-28 md:w-96 md:ml-2 text-[12px] pl-2 pr-2 pt-[10px] pb-[1px] text-base block bg-white border-gray-600 "
                />
              </label>
              <br />
              <button className="disabled:opacity-50 inline-flex  items-center justify-center bg-blue-800 px-6 py-3 h-12 text-lg rounded-lg w-24 ml-[-10px]
                   text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wider  hover:bg-blue-700 md:h-10 md:py-6 md:w-28 md:ml-2" type="submit">Submit</button>
            </form>

          </div>
        </div>

        {/* icon START */}
        <div className="flex items-center w-screen gap-6 justify-center h-[15vh] bg-gray-100 md:flex-row md:items-center md:justify-center">
          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/akash-pawar-gadre-242a65252",
                "_blank"
              );
            }}
            className="w-11 h-11 rounded-full flex items-center justify-center border-2 text-black transition-all duration-200  hover:text-blue-800 cursor-pointer hover:border-blue-800"
          >
            <CiLinkedin size={30} />
          </div>
          <div
            onClick={() => {
              window.open("https://github.com/AkashPawar01", "_blank");
            }}
            className="w-11 h-11 rounded-full flex items-center justify-center border-2 text-black transition-all duration-200  hover:text-blue-800 cursor-pointer hover:border-blue-800"
          >
            <BsGithub size={30} />
          </div>
          <div className="w-11 h-11 rounded-full flex items-center justify-center border-2 text-black transition-all duration-200  hover:text-blue-800 cursor-pointer hover:border-blue-800">
            <FaYoutube size={30} />
          </div>
          <div className="w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-200  text-black hover:text-blue-800 cursor-pointer hover:border-blue-800">
            <FaInstagram size={30} />
          </div>
        </div>
        {/* icon END */}
      </footer> 
    </main>
  );
}
