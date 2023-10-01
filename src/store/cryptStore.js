import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const pagination = (array) => {

  const pageOne = array.slice(0, 20);
  const pageTwo = array.slice(20, 40);
  const pageThree = array.slice(40, 60);
  const pageFour = array.slice(60, 80);
  const pageFive = array.slice(80);

  return [pageOne, pageTwo, pageThree, pageFour, pageFive];
};

const chartsInitialState = {
  genCharts: [],
  selectedPageData: [],
  selectedIndex: 0,
};

const generalDashBoardInitialState = {
  dashBoardDetails: {
    name: "Kanonas",
    monthlyIncome: 0,
    monthlyExpense: 0,
    incomeTarget: 0,
    expenseTarget: 0,
    profilePic:
      "https://t4.ftcdn.net/jpg/01/86/29/31/360_F_186293166_P4yk3uXQBDapbDFlR17ivpM6B1ux0fHG.jpg",
  },
  portfolioBalance: 0,
  favCoins: [],
  liveChartCoins: [],
  transfers: [
    {
      mode: "Transfer In",
      date: "2023-09-03",
      time: "23:04",
      amount: 140,
      id: Math.round(Math.random() * 2000000000),
      detail: "Salary",
    },
    {
      mode: "Transfer Out",
      date: "2023-09-05",
      time: "08:34",
      amount: 55,
      id: Math.round(Math.random() * 2000000000),
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
    addToTransferList(state, action) {
      state.transfers.push(action.payload);
      state.portfolioBalance = state.transfers.reduce((acc, cur) => {
        if (cur.mode === "Transfer Out") {
          return acc + -cur.amount;
        } else {
          return acc + cur.amount;
        }
      }, 0);
    },
    removefromTransferList(state, action) {
      state.transfers = state.transfers.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

const generalCharts = createSlice({
  name: "chartState",
  initialState: chartsInitialState,
  reducers: {
    addTotalCharts(state, action) {
      const newArray = pagination(action.payload);
      state.selectedPageData = newArray[state.selectedIndex];
      state.genCharts = newArray;
    },
    updateSelectedPageData: (state, action) => {
      if (action.payload === "add") {
        state.selectedIndex = state.selectedIndex + 1;
        state.selectedPageData = state.genCharts[state.selectedIndex];
      } else {
        state.selectedIndex = state.selectedIndex - 1;
        state.selectedPageData = state.genCharts[state.selectedIndex];
      }
    },
  },
});

const modeState = createSlice({
  name: "mode",
  initialState: {
    modeIsDay: true,
  },
  reducers: {
    updateMode(state, action) {
      state.modeIsDay = !state.modeIsDay;
    },
  },
});

export const dashActions = generalDashBoard.actions;
export const chartActions = generalCharts.actions;
export const modeAction = modeState.actions;

const store = configureStore({
  reducer: {
    generalDashBoard: generalDashBoard.reducer,
    chartState: generalCharts.reducer,
    mode: modeState.reducer,
  },
});

export default store;
