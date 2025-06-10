import { useState } from "react";
import {
  FaCalendarAlt,
  FaClipboardCheck,
  FaCreditCard,
  FaMapMarkerAlt,
  FaTrash,
  FaTruck,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-darkgray w-full">
      <nav className="text-white p-4 w-full">
        {/* Hamburger toggle for mobile */}
        <div className="sm:hidden flex justify-between items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col mx-auto max-w-6xl mt-4 gap-4 sm:flex sm:flex-row sm:justify-between sm:items-center sm:mt-0`}
        >
          <Link to="/postcode" className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-brandblue text-xl" /> Postcode
          </Link>
          <Link to="/waste-type" className="flex items-center gap-2">
            <FaTrash className="text-brandblue text-xl" /> Waste Type
          </Link>
          <Link to="/" className="flex items-center gap-2">
            <FaTruck className="text-brandblue text-xl" /> Select Skip
          </Link>
          <Link to="/permit-check" className="flex items-center gap-2">
            <FaClipboardCheck className="text-brandblue text-xl" /> Permit Check
          </Link>
          <Link to="/choose-date" className="flex items-center gap-2">
            <FaCalendarAlt className="text-brandblue text-xl" /> Choose Date
          </Link>
          <Link to="/payment" className="flex items-center gap-2">
            <FaCreditCard className="text-brandblue text-xl" /> Payment
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
