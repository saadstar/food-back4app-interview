import React, { useState } from 'react'
import "./addFoodItem.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const AddFoodItem = () => { 
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [num, setPrice] = useState(0);
    const navigate = useNavigate();
    let price= parseInt(num,10)
    console.log({ name, price});

    const createFoodItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://parseapi.back4app.com/classes/Food", { name, category, image, description, price }, {
                headers: {
                    "X-Parse-Application-Id": "se2hrDVab4ZGXuVlYSzcfUz8EVTb4mUlJWJZZcKq",
                    "X-Parse-REST-API-Key": "N45ps6WnFxY9gYfbDyzO9b3MBLnobHY1VrUtpNus",
                }
            });
            setName("");
            setCategory("");
            setDescription("");
            setImage("");
            setPrice(0);
            res.status=== 201 && navigate("/")
        } catch (err) {
            console.log(err);
        }
    }
  return (
      <div className='addFoodItem'>
          <h1>Add New Food Item</h1>
          <form>
              <div className='inputsContainer'>
                  <div className='inputContainer'>
                      <label>Food Name</label>
                      <input placeholder='Enter food name' onChange={(e)=>setName(e.target.value)} type='text' />
                  </div>
                  <div className='inputContainer'>
                      <label>Food Description</label>
                      <input placeholder='Enter food description' onChange={(e)=>setDescription(e.target.value)} type='text' />
                  </div>
                  <div className='inputContainer'>
                      <label>Food Category</label>
                      <input placeholder='Salad,Cake,Sandwich,etc..' onChange={(e)=>setCategory(e.target.value)} type='text' />
                  </div>
                  <div className='inputContainer'>
                      <label>Image Url</label>
                      <input placeholder='https://www.pexels.com/ewer=fdfadsf32' onChange={(e)=>setImage(e.target.value)} type='text' />
                  </div>
                  <div className='inputContainer'>
                      <label>Price</label>
                      <input placeholder='Enter food price' onChange={(e)=>setPrice(e.target.value)} type='number' />
                  </div>
          <button onClick={createFoodItem}>Add</button>
              </div>
          </form>
    </div>
  )
}
