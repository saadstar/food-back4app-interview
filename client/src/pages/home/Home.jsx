import React, { useState } from 'react';
import "./home.css";
import { Header } from '../../components/header/Header';
import { ExploreMenu } from '../../components/exploreMenu/ExploreMenu';
import { FoodDelivery } from '../../components/foodDelivery/FoodDelivery';

export const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div className='home'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDelivery category={category}/>
    </div>
  )
}
