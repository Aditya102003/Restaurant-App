import React, { useState } from 'react'
import "./style.css";
import { ReactDOM } from 'react-dom/client';
import Menu from "./MenuApi.js"
import MenuCard from './MenuCard.js';
import Navbar from './Navbar.js';

const uniqueList = [...new Set (Menu.map((curElem) =>{
return curElem.category;
}))];
console.log(uniqueList);

const Restaraunt = () => {
    const [menuData,setmenuData]=useState(Menu);
const [menuList,setmenuList] =useState(uniqueList);

    const filterItem =  (category) =>{
      const updatedList  = Menu.filter((curElem) =>{
return curElem.category==category;
      })
      setmenuData(updatedList);
    };
  return (
    <>
   <Navbar filterItem={filterItem} menuList={menuList}/>
<MenuCard menuData = {menuData}/>

    </>
  )
}

export default Restaraunt