//帐单列有相关store

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
  name: "bifll",
  //数据状态state
  initialState: {
    billList: []
  },
  reducers: {
    //同步修改的方法
    setBillList: (state, action) => {
      state.billList = action.payload;
    }
  }
});

//解构actionCreater函数
const { setBillList } = billStore.actions;
//编写异步
const getBillList = () => {
  return async (dispatch) => {
    //编写异步请求
    const res = await axios.get("http://localhost:8888/ka");
    //触发同步reducer
    dispatch(setBillList(res.data));
  };
};

export { getBillList };
//导出reducer
const reducer = billStore.reducer;

export default reducer;
