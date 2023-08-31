import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const generalDashBoardInitialState = {
  dashBoardDetails: {
    monthlyIncome: 0,
    totalSpendings: 0,
    incomeTarget: 0,
    expenseTarget: 0,
  },
  favCoins : [],
  liveChartCoins: [],
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
    addRequestedCoins(state, action){
      state.favCoins = action.payload.newFavCoinsArray
      state.liveChartCoins = action.payload.finalLiveChartData
    }
  },
});

export const dashActions = generalDashBoard.actions

const store = configureStore({
  reducer: generalDashBoard.reducer,
});


export default store