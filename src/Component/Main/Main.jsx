import main from "./main.css";
import React from "react";

const Main = (props) => {

  return (
    <div className="main_conteyner">
          <div className="list_item_bloc">
        <img className="product_img" src={props.data.mainObject[0].image} alt='Товар'/>
        <div className="pric_list2">{props.data.mainObject[0].price}</div>
        <div className="old_pric_list3">{props.data.mainObject[0].oldPrice}</div>
        <div className="name_list4">{props.data.mainObject[0].name}</div>
        <button className="butoon_list1">{props.data.mainObject[0].button}</button>
        
          </div>

          <div className="list_item_bloc">
        <img className="product_img" src={props.data.mainObject[1].image} alt='Товар'/>
        <div className="pric_list2">{props.data.mainObject[1].price}</div>
        <div className="old_pric_list3">{props.data.mainObject[1].oldPrice}</div>
        <div className="name_list4">{props.data.mainObject[1].name}</div>
        <button className="butoon_list1">{props.data.mainObject[1].button}</button>
          </div>

          <div className="list_item_bloc">
        <img className="product_img" src={props.data.mainObject[2].image} alt='Товар'/>
        <div className="pric_list2">{props.data.mainObject[2].price}</div>
        <div className="old_pric_list3">{props.data.mainObject[2].oldPrice}</div>
        <div className="name_list4">{props.data.mainObject[2].name}</div>
        <button className="butoon_list1">{props.data.mainObject[2].button}</button>
          </div>

          <div className="list_item_bloc">
        <img className="product_img" src={props.data.mainObject[3].image} alt='Товар'/>
        <div className="pric_list2">{props.data.mainObject[3].price}</div>
        <div className="old_pric_list3">{props.data.mainObject[3].oldPrice}</div>
        <div className="name_list4">{props.data.mainObject[3].name}</div>
        <button className="butoon_list1">{props.data.mainObject[3].button}</button>
          </div>

          <div className="list_item_bloc">
        <img className="product_img" src={props.data.mainObject[4].image} alt='Товар'/>
        <div className="pric_list2">{props.data.mainObject[4].price}</div>
        <div className="old_pric_list3">{props.data.mainObject[4].oldPrice}</div>
        <div className="name_list4">{props.data.mainObject[4].name}</div>
        <button className="butoon_list1">{props.data.mainObject[4].button}</button>
          </div>   

          <div className="list_item_bloc">
        <img className="product_img" src={props.data.mainObject[5].image} alt='Товар'/>
        <div className="pric_list2">{props.data.mainObject[5].price}</div>
        <div className="old_pric_list3">{props.data.mainObject[5].oldPrice}</div>
        <div className="name_list4">{props.data.mainObject[5].name}</div>
        <button className='butoon_list1'>{props.data.mainObject[5].button}</button>
          </div>
 
    </div>
  );
};

export default Main;
