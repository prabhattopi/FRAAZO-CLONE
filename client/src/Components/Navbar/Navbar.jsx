import React, { useState } from "react";
import "./Navbar.css";
import navbarLogo from "../../Images/fraazo-logo.svg";
import { MdLocationOn, MdPerson } from "react-icons/md";

import { IoIosWallet } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <div className="navbar_wrapper">
      <div className="navbar_logo">
        <img src={navbarLogo} alt="" className="navbar_logo_img" />
      </div>
      <div className="navbar_location_wrapper">
        <MdLocationOn />
        Pune
      </div>
      <div className="navbar_search_bar">
        <input
          className="navbar_search_input"
          placeholder="Find fresh vegetables, fruits and dairy..."
        />
        <FaSearch className="navbar_search-icon" />
      </div>
      <div className="navbar_cart" onClick={() => setOpenCart(true)}>
        <HiShoppingCart className="navbar_icon" />
        Cart
      </div>
      <div className="navbar_credit">
        <IoIosWallet className="navbar_icon" />
        Credit
      </div>
      <div className="navbar_login">
        <MdPerson className="navbar_icon" />
        Login
      </div>
      <Cart openCart={openCart} setOpenCart={setOpenCart} />
    </div>
  );
};

export default Navbar;
