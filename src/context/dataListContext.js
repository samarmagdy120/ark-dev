import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";
import reducer from "../reducers/dataListReducer";
import { url } from "../utils/constant";
import {
  GET_BEGIN_DATA,
  GET_SUCCESS_DATA,
  GET_FAILED_DATA,
  SET_ITEM_DATA,
} from "../action";

const initialState = {
  loading_listData: false,
  lastData: [],
  data_error: false,
  item: null,
};
const DataList = React.createContext();

export const DataListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchListData = async (data, page) => {
    dispatch({ type: GET_BEGIN_DATA });
    try {
      const response = await axios.get(
        `${url}${data}&sort=stars&order=desc&page=${page}`
      );
      const lastData = response.data.items;
      console.log(lastData);
      dispatch({ type: GET_SUCCESS_DATA, payload: lastData });
    } catch (error) {
      dispatch({ type: GET_FAILED_DATA });
    }
  };

  const setItemData = (item) => {
    dispatch({ type: "SET_ITEM_DATA", payload: item });
  };

  // const getItemData = () => {
  //   dispatch({ type: "GET_ITEM_DATA" });
  // };
  // useEffect(() => {
  //   fetchListData(url);
  // }, []);
  return (
    <DataList.Provider value={{ ...state, fetchListData, setItemData }}>
      {children}
    </DataList.Provider>
  );
};

// make sure use
export const useDataListContext = () => {
  return useContext(DataList);
};
