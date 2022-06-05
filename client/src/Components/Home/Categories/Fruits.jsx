import React from "react";
import "./Categories.css";
import Slider from "react-slick";
import { settings } from "../CommonSlider";
import { data } from "../../../data";
import ProductCard from "../../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Fruits = () => {
  return (
    <div className="category_section">
      <Link to="/products/fruits/apples-pears-plums" className="linkTag">
        <h2 className="category_heading">
          FRUITS <span className="view_all">( View All )</span>
        </h2>
      </Link>
      <div className="category_slider">
        <Slider {...settings}>
          {data.map((ele) => (
            <ProductCard prod={ele} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Fruits;
