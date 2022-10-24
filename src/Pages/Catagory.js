import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Nave from "../Components/Nave";
import { AuthContext } from "../Context/AuthProvaider";
import { Fa500Px, FaBeer } from "react-icons/fa";

const Catagory = () => {
  const { satNavLocation, homeData } = useContext(AuthContext);
  const location = useLocation();
  satNavLocation(location);
  return (
    <div className="relative">
      <img
        src={homeData.img}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <Nave></Nave>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                {homeData.name}
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
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

            <div className="hero flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Origin</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Dahala"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Distination</span>
                    </label>
                    <input
                      type="text"
                      placeholder={homeData.name}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <div className="">
                      <div className="flex">
                        <div className="w-6/12">
                          <h4>To</h4>
                          <input type="date" name="" id="" />
                        </div>
                        <div className="w-6/12">
                          <h4>From</h4>
                          <input type="date" name="" id="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <Link to={`/booking/:${homeData.id}`}>
                      <button className="btn btn-primary w-full">
                        vew details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
