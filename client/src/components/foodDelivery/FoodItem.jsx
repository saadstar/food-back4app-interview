import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const FoodItem = ({item,index}) => {
      const [count, setCount] = useState(0);
  return (
   <div className="food-item" key={index} id={item.objectId}>
                          <div className="food-item-img-container">
                              <img src={item.image} alt="food-item" className='food-item-image' />
                              {!count 
                                  ? <AddIcon onClick={ ()=>setCount(prev=>prev+1)} className='add'/>
                                  : <div className='food-item-counter'>
                                      <RemoveIcon onClick={ ()=>setCount(count-1)} className="minusOne" />
                                      <p>{count}</p>
                                      <AddIcon onClick={ ()=>setCount(count+1)} className="addOne"/>
                               </div>   
                              }
                          </div>
                          <div className="food-item-info">
                              <div className="food-item-name-rating">
                                  <p>{item.name}</p>
                                  <div className="food-item-stars-icon">
                                      <StarIcon/>
                                      <StarIcon/>
                                      <StarIcon/>
                                      <StarIcon/>
                                  </div>
                              </div>
                                  <p className='food-item-desc'>{item.description }</p>
                                  <p className='food-item-price'>${item.price }</p>
                          </div>
                  </div>
  )
}
