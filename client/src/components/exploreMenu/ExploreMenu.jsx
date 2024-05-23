import React from 'react';
import "./exploreMenu.css";


export const ExploreMenu = ({category,setCategory}) => {
    const menuList = [
        {
            item_menu: "Salad",
            item_image:"./images/salad.jpg"
        },
        {
            item_menu: "Rolls",
            item_image:"./images/rolls.jpg"
        },
        {
            item_menu: "Deserts",
            item_image:"./images/deserts.jpg"
        },
        {
            item_menu: "Sandwich",
            item_image:"./images/sandwich.jpg"
        },
        {
            item_menu: "Cake",
            item_image:"./images/cake.jpg"
        },
        {
            item_menu: "Pure Veg",
            item_image:"./images/pureVeg.jpg"
        },
        {
            item_menu: "Pasta",
            item_image:"./images/pasta.jpg"
        },
        {
            item_menu: "Noodles",
            item_image:"./images/noodles.jpg"
        },
    ]
  return (
      <div className='exploreMenu' id="explore-menu">
          <h1>Explore our menu.</h1>
          <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary experties. Out mission is to statisfy your cravings and elevate your dinnig experience. one delicious meal at a time.</p>
          <div className="explore-menu-list">
              {menuList.map((item,index) => {
                  return (
                      <div onClick={()=>setCategory(prev=> prev ===item.item_menu?"All":item.item_menu)} className="explore-menu-list-item" id={index}>
                          <img className={category === item.item_menu?"active":""} src={ item.item_image} alt={item.item_menu} />
                          <p>{item.item_menu}</p>
                      </div>                      
                  )
              })}
          </div>
          <hr/>
    </div>
  )
}
