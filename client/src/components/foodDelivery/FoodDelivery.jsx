import React, {  useEffect, useState} from 'react';
import "./foodDelivery.css";
import { FoodItem } from './FoodItem';
import axios from "axios"

export const FoodDelivery = ({category}) => {
    const url="https://parseapi.back4app.com/classes/Food"
    const [foodData, setFoodData] = useState([]);
    const fetchFood = async () => {
        try {
            const res = await axios.get(url, {
                headers: {
                    "X-Parse-Application-Id": "se2hrDVab4ZGXuVlYSzcfUz8EVTb4mUlJWJZZcKq",
                    "X-Parse-REST-API-Key": "N45ps6WnFxY9gYfbDyzO9b3MBLnobHY1VrUtpNus",
                }
            });
            setFoodData(res.data.results);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchFood();
    })
  return (
      <div className='foodDelivery' id="foodDelivery">
          <h2>{category==="All"?`Top Dishes near you.`:category}</h2>
          <div className="food-display-list">
              {foodData.filter((ele)=> category!=="All"? ele.category=== category:ele).map((item, index) => {
                  return <FoodItem item={ item} index={index} />
              })}
          </div>
    </div>
  )
}
