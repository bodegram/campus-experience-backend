import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";
import notificationSlice from "./slices/notificationSlice";
import scheduleSlice from "./slices/scheduleSlice";

const rootReducer = combineReducers({
   auth: authSlice.reducer,
   notification:notificationSlice.reducer,
   schedule: scheduleSlice.reducer
})

export default rootReducer