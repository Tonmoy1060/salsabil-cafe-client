import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useAllItems = () => {
   const [allItems, setAllItems] = useState([]);
   useEffect(() => {
      fetch('http://localhost:5000/items/Cold Drinks')
      .then(res => res.json())
      .then(data => setAllItems(data))
   },[]);
   return [allItems, setAllItems];
};

export default useAllItems;