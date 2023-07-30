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
      <div>Copyright©2023 Dongdong867</div>
      <div className="flex">
        <TranslatableContextButton>
          <div className="text-xl">
            <FaGithub />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton>
          <div className="text-xl">
            <FaLinkedin />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton>
          <div className="text-xl">
            <FaInstagram />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton>
          <div className="text-xl">
            <FaDiscord />
          </div>
        </TranslatableContextButton>
        <TranslatableContextButton>
          <div className="text-xl">
            <FaEnvelope />
          </div>
        </TranslatableContextButton>
      </div>
    </div>
  );
};

export default Footer;
