import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import TranslatableContext from "./translatable-context";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between place-items-center pb-5 mx-10">
      <div>Copyright © 2023 Dongdong867</div>
      <div className="flex">
        <TranslatableContext className="p-2">
          <Link href={"https://github.com//dongdong867"} target="_blank">
            <FaGithub className="text-2xl" />
          </Link>
        </TranslatableContext>
        <TranslatableContext className="p-2">
          <Link href={"https://linkedin.com/in/dongdong867"} target="_blank">
            <FaLinkedin className="text-2xl" />
          </Link>
        </TranslatableContext>
        <TranslatableContext className="p-2">
          <Link href={"https://instagram.com/dongdong_867"} target="_blank">
            <FaInstagram className="text-2xl" />
          </Link>
        </TranslatableContext>
        <TranslatableContext className="p-2">
          <Link
            href={"https://discordapp.com/users/978679087067435039"}
            target="_blank"
          >
            <FaDiscord className="text-2xl" />
          </Link>
        </TranslatableContext>
        <TranslatableContext className="p-2">
          <Link href={"mailto:dongdong0867@gmail.com"}>
            <FaEnvelope className="text-2xl" />
          </Link>
        </TranslatableContext>
      </div>
    </div>
  );
};

export default Footer;
