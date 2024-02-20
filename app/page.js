import Image from "next/image";
import ImgLightBox from "@/public/assets/images/light-box-image.png";
import ImgLightBoxBtn from "@/public/assets/images/light-box-btn.png";
import ImgPexel_1 from "@/public/assets/images/Pexels-Photo-1.png";
import Img10 from "@/public/assets/images/image-10.png";
import { FaStar } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-5">
        <div className="md:flex gap-4 items-center justify-between py-32">
          <div className="w-full md:w-2/5 py-3 md:py-1">
            <h2 className="text-5xl md:text-5xl xl:text-7xl  text-[#242F3D] font-bold">
              Anuel AA & Ozuna - Los Dioses CD
            </h2>
            <h5 className="text-[#242F3D] text-2xl py-4 font-semibold">
              US $9.98
            </h5>
            <div className="flex gap-3">
              <div className="flex gap-1 text-2xl text-[#FFC829]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="text-[#242F3D] text-2xl">5 Reviews</div>
            </div>
            <div className="my-6">
              <a
                href="#"
                className="bg-[#E7323F] text-white text-xl rounded py-4 px-10"
              >
                Porches now
              </a>
            </div>
          </div>
          <div className="w-full md:w-3/5 py-3 md:py-1">
            <div className="relative">
              <Image
                src={ImgLightBox}
                className="2xl:w-[1034px] 2xl:h-[582px]"
              />

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <a href="#">
                  <Image src={ImgLightBoxBtn} className="flex justify-center" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="my-5 md:my-0 w-full">
            <Image src={ImgPexel_1} className="rounded-2xl" />
          </div>
          <div className="my-5 md:my-0 w-full">
            <Image src={ImgPexel_1} className="rounded-2xl" />
          </div>
          <div className="my-5 md:my-0 w-full">
            <Image src={ImgPexel_1} className="rounded-2xl" />
          </div>
          <div className="my-5 md:my-0 w-full">
            <Image src={ImgPexel_1} className="rounded-2xl" />
          </div>
          <div className="my-5 md:my-0 w-full">
            <Image src={ImgPexel_1} className="rounded-2xl" />
          </div>
          <div className="my-5 md:my-0 w-full">
            <Image src={ImgPexel_1} className="rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto my-20  px-5">
        <div className="md:flex gap-4 items-center justify-between bg-[#030303] rounded-2xl">
          <div className="w-full md:w-3/5 py-5 md:py-0">
            <h2 className="text-white text-4xl lg:text-7xl text-center font-bold">
              Coming Soon !
            </h2>
          </div>
          <div className="w-full md:w-2/5 py-5 md:py-0">
            <Image src={Img10} />
          </div>
        </div>
      </div>
    </div>
  );
}
