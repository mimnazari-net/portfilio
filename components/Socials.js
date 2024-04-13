import Link from "next/link";

import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
  RiTelegramLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex justify-center text-2xl gap-x-6 ">
      <Link href={""} className="hover:text-accent transition-all duration-300  ">
        <RiInstagramLine />{" "}
      </Link>

      <Link href={"/"} className="hover:text-accent transition-all duration-300 ">
        <RiGithubLine />{" "}
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300 ">
        <RiLinkedinLine />{" "}
      </Link>

      <Link href={""} className="hover:text-accent transition-all duration-300 ">
        <RiTelegramLine />{" "}
      </Link>
    </div>
  );
};

export default Socials;
