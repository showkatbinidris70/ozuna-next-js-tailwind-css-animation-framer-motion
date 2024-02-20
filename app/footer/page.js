import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

export default function FooterPage() {
  return (
    <div>
      <div className="container mx-auto px-5 my-20">
        <div className="">
          <h2 className="text-center font-extrabold text-black text-3xl">
            JOIN OUR MAILING LIST
          </h2>
          <div class="flex justify-center mt-10 mb-32">
            <input
              type="search"
              class="relative m-0 block w-full md:w-2/5 py-6 rounded border border-solid border-[#C2C2C2] bg-transparent ps-4"
              id="exampleSearch"
              placeholder="Email Address"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 my-20">
        <div className="flex gap-2 items-center">
          <div>Follow us</div>
          <div className="flex gap-2">
            <FaFacebookSquare /> <FaFacebookSquare /> <FaFacebookSquare />
          </div>
        </div>
      </div>
    </div>
  );
}
