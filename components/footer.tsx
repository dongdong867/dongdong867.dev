import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import TranslatableContextButton from "./translatable-context-button";

const Footer = () => {
  return (
    <div className="flex justify-between place-items-center pb-10 mx-10">
      <div>Copyright © 2023 Dongdong867</div>
      <div className="flex">
        <TranslatableContextButton className="p-2">
          <div className="text-2xl">
            <FaGithub />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton className="p-2">
          <div className="text-2xl">
            <FaLinkedin />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton className="p-2">
          <div className="text-2xl">
            <FaInstagram />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton className="p-2">
          <div className="text-2xl">
            <FaDiscord />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton className="p-2">
          <div className="text-2xl">
            <FaEnvelope />
          </div>
        </TranslatableContextButton>
      </div>
    </div>
  );
};

export default Footer;
