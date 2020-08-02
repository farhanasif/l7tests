import React, { createContext, useReducer, useEffect } from 'react';
import { itemReducer } from '../reducers/itemReducers';

export const ItemContext = createContext();

const geturl = "http://localhost:8000/api/items";

const ItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(itemReducer, []);
  
  useEffect(() => {
    //console.log('----------useEffect-------------')
    async function fetchData(){
      await fetch(geturl)
      .then(res => res.json())
      .then((result) => {
        console.log(result.data);
        if(result.data.length > 0){
          const data = result.data;
          dispatch({type: "INIT", data});
        }
        else{
          return [];
        }
      });
    }
    fetchData();
  }, []);
  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
}
 
export default ItemContextProvider;