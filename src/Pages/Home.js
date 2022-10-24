import { data } from "autoprefixer";
import React, { useContext, useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import Nave from "../Components/Nave";
import { AuthContext } from "../Context/AuthProvaider";
import "./Home.css";

const Home = () => {
  const { homeData, setHomeData } = useContext(AuthContext);
  const datas = useLoaderData();
  console.log(homeData);
  return (
    <div className="relative">
      <img
        src={
          homeData.img
            ? homeData.img
            : "https://img.freepik.com/premium-photo/photograph-red-camping-tent-beach-sunset-by-yuri-ugarte-cespedes_261378-865.jpg?w=996"
        }
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <Nave></Nave>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                {homeData.name ? (
                  homeData.name
                ) : (
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                    The quick, brown fox <br className="hidden md:block" />
                    jumps over a
                    <span className="text-teal-accent-400">lazy dog</span>
                  </h2>
                )}
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex text-white items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>

            {datas.map((data) => (
              <NavLink
                style={({ isActive }) =>
                  isActive ? "border-double" : undefined
                }
                onMouseEnter={() => setHomeData(data)}
                key={data.id}
                to={`/catagory/:${data.id}`}
                className="h-96 m-6 carousel carousel-vertical rounded-box"
              >
                <div className="carousel-item h-full">
                  <img src={data.img} />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
