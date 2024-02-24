"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/assets/images/logo.png";
import Cart from "../../public/assets/images/cart.png";
import User from "../../public/assets/images/user.png";
import Search from "../../public/assets/images/search.png";
import Link from "next/link";
import SearchModal from "./SearchModal";
import OffCanvas from "./OffCanvas";




export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="bg-hero bg-center bg-cover h-screen bg-no-repeat bg-[#00000069] py-10 z-0">
        <div className="container mx-auto px-1 md:px-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              {/* <IoReorderThreeOutline className="text-2xl text-white" /> */}
              {/* <p className="text-sm md:text-2xl font-light text-white">
                PRODUCTS
              </p> */}
             <OffCanvas/>
            </div>

            <div className="relative hidden">
              <div
                className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                  }`}
              >
                <div className="p-4">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <ul className="mt-4">
                    <li className="py-2">Item 1</li>
                    <li className="py-2">Item 2</li>
                    <li className="py-2">Item 3</li>
                  </ul>
                </div>
              </div>
              {isOpen && (
                <div
                  className="fixed inset-0 bg-black opacity-50"
                  onClick={toggleMenu}
                ></div>
              )}
              <button
                className="fixed top-0 left-0 m-4 bg-gray-900 text-white p-2 rounded flex items-center"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
                {isOpen ? "Close Menu" : "Open Menu"}
              </button>
            </div>





            <div className="">
              <Image src={Logo} className="w-[70px] md:w-48" />
            </div>
            <div className="flex gap:1 md:gap-3">
              <div className="text-white md:border-r pr-3">ESPAÑOL</div>
              <div className="px-1">
                <Link href="#" onClick={toggleModal}>
                  <Image src={Search} />
                </Link>
              </div>
              <div className="px-1">
                <Link href="#">
                  <Image src={User} />
                </Link>
              </div>
              <div className="px-1">
                <Link href="#">
                  <Image src={Cart} />
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-1 md:mt-16 md:px-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-3xl font-extrabold text-white text-center">
              OZUNA{" "}
              <span className="ps-2 text-3xl font-medium text-white">
                OFFICIAL STORE
              </span>
            </div>
            <div className="text-4xl md:text-6xl font-light text-white text-center mb-10 mt-5">
              PRE-ORDER COSMO MERCH
            </div>
            <div className="text-center my-1">
              <Link
                href="#"
                className="text-xl text-white font-black bg-[#ffffff34] px-10 py-4 rounded tracking-wide"
              >
                Porches now
              </Link>
            </div>
          </div>
          {/* search modal */}
          <SearchModal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
      </div>
    </div>
  );
}
