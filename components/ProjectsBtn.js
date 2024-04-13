import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href={"/work"}
        className="relative w-[105px] h-[105px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group  "
      >
        <Image
          src={"/rounded-text.png"}
          width={91}
          height={98}
          alt=""
          className="animate-spin-slow h-full w-full max-w-[71px] max-h-[78px]"
        />
        <HiArrowRight className=" text-3 xl absolute group-hover:translate-x-2 transition-all duration-300 " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
