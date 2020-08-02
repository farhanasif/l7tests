import React, { createContext, useReducer, useEffect } from 'react';
import { itemReducer } from '../reducers/itemReducers';

export const ItemContext = createContext();

const geturl = "http://localhost:8000/api/items";

const ItemContextProvider = (props) => {
  const [items, dispatch] = useReducer(itemReducer, []);
  
  useEffect(() => {
    refreshContent(1);
  }, []);

  const refreshContent = async(val) => {
    await fetch(geturl)
      .then(res => res.json())
      .then((result) => {
        console.log(result.data);
        if(result.data.length > 0){
          const data = result.data;
          if(val == 1){
            dispatch({type: "INIT", data});
          }
          else{
            dispatch({type: "RELOAD", data});
          }
          
        }
        else{
          return [];
        }
      });
  }

  return (
    <ItemContext.Provider value={{ items, dispatch, refreshContent }}>
      {props.children}
    </ItemContext.Provider>
  );
}
 
export default ItemContextProvider;