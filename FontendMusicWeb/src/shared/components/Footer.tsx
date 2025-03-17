import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="footer-container mx-auto w-full max-w-[1000px] p-2">
        <div className="flex border-b border-gray-300 pb-4">
          <div className="flex-1">
            <div className="flex items-center">
              <img src={Logo} alt="logo" className="w-18 mr-4" />
              <h1 className="text-2xl font-medium">Quizzes</h1>
            </div>

            <p className="max-w-[400px] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae deserunt, eveniet
              sint?
            </p>
          </div>

          <div className="flex flex-1 justify-between">
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-semibold">Menu</h2>
              <ul className="text-sky-400 space-y-2">
                <li>
                  <Link to="/" className="duration-300 hover:text-sky-600">Home</Link>
                </li>
                <li>
                  <Link to="/" className="duration-300 hover:text-sky-600">Quizzes</Link>
                </li>
                <li>
                  <Link to="/about" className="duration-300 hover:text-sky-600">About</Link>
                </li>
                <li>
                  <Link to="/contact" className="duration-300 hover:text-sky-600">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <h2 className="mb-1 text-xl font-semibold">Contact</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 block w-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <Link to={"mailto:congding2021@gmail.com"} className="text-sky-400">
                    congding2021@gmail.com
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 block w-4">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <Link to={"tel:+84 944 551 356"} className="text-sky-400">+84 944 551 356</Link>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 block w-4">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <Link to={""} className="text-sky-400 flex-grow">
                    123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-2 text-center text-sm font-medium">© Copy May 2024 - ReactJS 19</div>
      </div>
    </footer>
  );
};

export default Footer;
