import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const generalDashBoardInitialState = {
  dashBoardDetails: {
    totalEarnings: 0,
    totalSpendings: 0,
    incomeGoals: 0,
    expenseGoals: 0,
  },
  favCoins : [],
  transfers: [
    {
      mode: "Transfer In",
      date: 23 / 4 / 2000,
      time: "23:04",
      amount: 1435,
      title: "car laundry",
    },
  ],
};

const generalDashBoard = createSlice({
  name: "generalDashBoard",
  initialState: generalDashBoardInitialState,
  reducers: {
    addToDashBoard(state, action){
        state.dashBoardDetails = action.payload
    },
    addFavCoins(state, action){
      state.favCoins = action.payload
    }
  },
});

export const dashActions = generalDashBoard.actions

const store = configureStore({
  reducer: generalDashBoard.reducer,
});


export default store