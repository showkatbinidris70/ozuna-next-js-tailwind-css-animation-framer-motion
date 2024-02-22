"use client";
import React, { useState } from "react";

export default function OffCanvas() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="relative">
        {/* Off-canvas menu */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-gray-900 text-white transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
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
        {/* Off-canvas overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
        )}
        {/* Toggle button */}
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
    </div>
  );
}
