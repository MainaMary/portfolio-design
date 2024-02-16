import SubTitle from "./SubTitle";
import { footerLinks } from "../data/footer-links";
import { Link } from "react-router-dom";
import { currentYear } from "../utils/date";

const Footer = () => {
  return (
    <footer className="text-white py-4 space-y-2">
      <SubTitle>Let's connect</SubTitle>
      <div className="flex gap-2">
        {footerLinks.map((label) => (
          <Link to={label.path}>
            <p>{label.label}</p>
          </Link>
        ))}
      </div>
      <p>Email- ategunabass@gmail.com</p>
      <p>{`Made with care | ${currentYear()} Abbas Ategun`}</p>
    </footer>
  );
};

export default Footer;
