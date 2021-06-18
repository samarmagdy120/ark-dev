import React from "react";
import {
  GET_BEGIN_DATA,
  GET_SUCCESS_DATA,
  GET_FAILED_DATA,
  SET_ITEM_DATA,
  GET_ITEM_DATA,
} from "../action";

export default (state, action) => {
  if (action.type === GET_BEGIN_DATA) {
    return { ...state, loading_listData: true };
  }
  if (action.type === GET_SUCCESS_DATA) {
    return {
      ...state,
      loading_listData: false,
      lastData: action.payload,
    };
  }
  if (action.type === GET_FAILED_DATA) {
    return { ...state, loading_listData: false, data_error: true };
  }

  if (action.type === SET_ITEM_DATA) {
    // localStorage.setItem("data", action.payload);
    return { ...state, item: action.payload };
  }
  // if (action.type === GET_ITEM_DATA) {
  //   return { ...state, item: localStorage.getItem("data") };
  // }
};
