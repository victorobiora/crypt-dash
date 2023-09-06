import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const generalDashBoardInitialState = {
  dashBoardDetails: {
    name: "Kanonas",
    monthlyIncome: 0,
    monthlyExpense: 0,
    incomeTarget: 0,
    expenseTarget: 0,
  },
  portfolioBalance: 0,
  favCoins: [],
  liveChartCoins: [],
  transfers: [
    {
      mode: "Transfer In",
      date: " 23 - 4 - 2023",
      time: "23:04",
      amount: 1435,
      id: Math.round(Math.random()*2000000000),
      detail: "Salary",
    },
    {
      mode: "Transfer Out",
      date: " 27 - 4 - 2023",
      time: "08:34",
      amount: 5,
      id: Math.round(Math.random()*2000000000),
      detail: "car laundry",
    },
  ],
};

const generalDashBoard = createSlice({
  name: "generalDashBoard",
  initialState: generalDashBoardInitialState,
  reducers: {
    addToDashBoard(state, action) {
      state.dashBoardDetails = action.payload;
      state.portfolioBalance =
        action.payload.monthlyIncome - action.payload.monthlyExpense;
    },
    addRequestedCoins(state, action) {
      state.favCoins = action.payload.newFavCoinsArray;
      state.liveChartCoins = action.payload.finalLiveChartData;
    },
    addToTransferList(state, action){
      state.transfers.push(action.payload)
    },
    removefromTransferList(state, action){
      state.transfers = state.transfers.filter(el => el.id !== action.payload)
    }
  },
});

export const dashActions = generalDashBoard.actions;

const store = configureStore({
  reducer: generalDashBoard.reducer,
});

export default store;
