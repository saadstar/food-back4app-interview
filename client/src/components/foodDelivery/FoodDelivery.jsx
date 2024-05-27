import React, {  useEffect, useState} from 'react';
import "./foodDelivery.css";
import { FoodItem } from './FoodItem';
import Parse from 'parse';

export const FoodDelivery = ({category}) => {
    const [foodData, setFoodData] = useState([]);
    
    useEffect(()=>{ 
        const ftchData = async () => {
            const query = new Parse.Query('Food');
            query.select(["id","name","image","category","price","description"])
            const results = await query.find();
            setFoodData(results);
            const subscription =await query.subscribe();
            subscription.on('open', () => {
              console.log('Subscription opened');
            });
            subscription.on('create', (object) => {
              setFoodData((prevItems) => [...prevItems, object]);
            });
            subscription.on('update', (object) => {
              setFoodData((prevItems) => prevItems.map((item) => item.id === object.id ? object : item));
            });
            subscription.on('delete', (object) => {
              setFoodData((prevItems) => prevItems.filter((item) => item.id !== object.id));
            });            
            return () => {
              subscription.unsubscribe();
                    };
        }
        ftchData();
    });
  return (
      <div className='foodDelivery' id="foodDelivery">
          <h2>{category==="All"?`Top Dishes near you.`:category}</h2>
          <div className="food-display-list">
              {foodData.filter((ele)=> category!=="All"? ele.category=== category:ele).map((item, index) => {
                  return <FoodItem item={ item} index={index} key={item.id} />
              })}
          </div>
    </div>
  )
}
