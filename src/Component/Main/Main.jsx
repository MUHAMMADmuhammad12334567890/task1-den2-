import main from "./main.css";
import React from "react";
import PropTypes  from "prop-types";
const Main = (props) => {
  let data = props.data.mainObject;

  return (
    <div className="main_conteyner">

      {data.map((item) => {
        return (
          <div key={item.id} className="list_item_bloc">
            <img className="product_img" src={item.image} alt="Товар" /> 
            <p className="NameProduct">{item.name}</p>
            <p className="price_class">{'Цена: '}{item.price}</p> 
            <p className="Left_Products">{'Наличи: '}{item.left}{' Штук'}</p>
          </div>
        );
      })}

    </div>
  );
Main.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    left: PropTypes.number,

};
};

export default Main;

