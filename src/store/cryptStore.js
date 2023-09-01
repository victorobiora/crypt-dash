import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const generalDashBoardInitialState = {
  dashBoardDetails: {
    name: 'Kanonas',
    monthlyIncome: 0,
    monthlyExpense: 0,
    incomeTarget: 0,
    expenseTarget: 0,
  },
  portfolioBalance: 0,
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
        state.portfolioBalance = action.payload.monthlyIncome - action.payload.monthlyExpense
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